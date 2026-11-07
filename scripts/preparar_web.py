"""Arma los datos del tablero (web/data/proceso.js) y los ZIP descargables.

Proceso simplificado en las 4 fases que usa el propio MEF (presentación DGPPIP "Obras por Impuestos.
Información general"): Priorización, Actos previos, Proceso de selección y Ejecución.
Dos rutas: regular (RD N° 005-2024-EF/68.01, 38 modelos) y emergencia El Niño 2026-2027
(D.U. N° 010-2026 y RD N° 004-2026-EF/68.01, 23 modelos).
"""
import json, re, zipfile
from pathlib import Path
import pandas as pd
import docx

BASE = Path(__file__).resolve().parents[1]
WEB, DOCS = BASE / "web", BASE / "documentos"

FASES = [
  dict(id="F1", nombre="Priorización", pregunta="¿Qué obra o servicio se hará?",
       regular="La entidad elige las inversiones o servicios que hará con OxI y asegura los recursos. "
               "La idea puede venir de la propia entidad o de una empresa (iniciativa privada).",
       emergencia="La oficina de presupuesto acredita los recursos y el titular aprueba la lista de priorización en 3 días hábiles (antes, 30).",
       hitos_regular=["Gobierno Nacional: opinión favorable de capacidad presupuestal (DGPP-MEF)",
                      "Regiones, municipios y universidades: acuerdo de concejo o consejo",
                      "Lista priorizada aprobada"],
       hitos_emergencia=["Informe de acreditación de recursos", "Lista de priorización en 3 días hábiles"]),
  dict(id="F2", nombre="Actos previos", pregunta="¿Está todo listo para convocar?",
       regular="Se forma el Comité Especial, se elaboran las bases y los informes técnico, financiero y legal, "
               "y se pide el informe previo de la Contraloría.",
       emergencia="Se designa el Comité Especial y, con informes técnico y legal, el titular autoriza la contratación directa en 4 días hábiles. "
                  "No se pide el informe previo de la Contraloría.",
       hitos_regular=["Comité Especial designado", "Bases e informes técnico, financiero y legal", "Informe previo de la Contraloría"],
       hitos_emergencia=["Comité Especial designado", "Resolución que autoriza la contratación directa (4 días hábiles)"]),
  dict(id="F3", nombre="Proceso de selección", pregunta="¿Qué empresa lo hará?",
       regular="Se convoca públicamente a las empresas, que presentan sus propuestas. El Comité las evalúa y otorga la buena pro.",
       emergencia="El Comité invita a empresas: tienen 5 días hábiles para proponer. Se evalúa en 2 días hábiles y se adjudica.",
       hitos_regular=["Convocatoria", "Propuestas y evaluación", "Buena pro consentida"],
       hitos_emergencia=["Invitación", "Propuesta (5 días hábiles)", "Evaluación (2) y adjudicación"]),
  dict(id="F4", nombre="Ejecución", pregunta="¿Se hizo bien y se devuelve la inversión?",
       regular="Se firma el convenio, la empresa ejecuta la obra o el servicio con una supervisora, la entidad da conformidad "
               "y pide al MEF el CIPRL o CIPGN, que la empresa usa para pagar impuestos.",
       emergencia="Convenio de IOARR de emergencia, de servicios o integrado. Expediente técnico aprobado en 5 días hábiles, "
                  "liquidación en 10 y emisión del CIPRL/CIPGN por el MEF en 5.",
       hitos_regular=["Convenio de Inversión firmado", "Obra o servicio con conformidad", "CIPRL / CIPGN emitido"],
       hitos_emergencia=["Convenio firmado", "Conformidades y liquidación", "CIPRL / CIPGN en 5 días hábiles"]),
]

# Juego regular (RD 005-2024): n -> (fase, momento, elabora, dirigido/participa, para qué sirve)
REGULAR = {
 1: ("F1","Iniciativa privada","Entidad pública","Empresa privada","El titular declara relevante el proyecto propuesto por una empresa."),
 2: ("F1","Iniciativa privada","Empresa privada","Entidad pública","La empresa propone priorizar un proyecto o actividad."),
 3: ("F1","Iniciativa privada","Empresa privada","Entidad pública","La empresa propone actualizar el estudio de un proyecto."),
 4: ("F1","Recursos","Entidad pública","MEF","Gobierno Nacional: pide al MEF (DGPP) opinión de capacidad presupuestal."),
 5: ("F1","Lista priorizada","Entidad pública","Comité Especial","Gobierno Nacional: aprueba la lista priorizada y designa al Comité."),
 6: ("F1","Lista priorizada","Entidad pública","Comité Especial","Regiones, municipios y universidades: acuerdo de concejo o consejo."),
 7: ("F2","Informes para Contraloría","Entidad pública","Contraloría","Sustento técnico para el informe previo."),
 8: ("F2","Informes para Contraloría","Entidad pública","Contraloría","Sustento financiero (Gobierno Nacional)."),
 9: ("F2","Informes para Contraloría","Entidad pública","Contraloría","Sustento financiero (regiones, municipios y universidades)."),
 10:("F2","Informes para Contraloría","Entidad pública","Contraloría","Flujo de caja proyectado (Excel)."),
 11:("F2","Informes para Contraloría","Entidad pública","Contraloría","Sustento legal para el informe previo."),
 12:("F2","Bases","Comité Especial","Empresa privada","Reglas para elegir a la empresa (el modelo más extenso)."),
 13:("F2","Bases","Comité Especial","Entidad privada supervisora","Reglas para elegir a la supervisora."),
 14:("F2","Bases","Entidad pública","Comité Especial","El titular aprueba las bases."),
 15:("F3","Convocatoria","Comité Especial","Empresa privada","Aviso público para las empresas."),
 16:("F3","Convocatoria","Comité Especial","Entidad privada supervisora","Aviso público para las supervisoras."),
 17:("F3","Consultas","Comité Especial","Empresa privada","Aclara o precisa las bases."),
 18:("F3","Actas","Comité Especial","Empresa privada","Registra los sobres recibidos."),
 19:("F3","Actas","Comité Especial","Empresa privada","Registra la evaluación de propuestas."),
 20:("F3","Actas","Comité Especial","Empresa privada","Registra la buena pro."),
 21:("F4","Convenio","Entidad pública","Empresa privada","Contrato central: obligaciones, plazos, garantías y pago con CIPRL/CIPGN."),
 22:("F4","Convenio","Entidad pública","Entidad privada supervisora","Contrato con la supervisora."),
 23:("F4","Cambios","Entidad pública","Empresa privada","Adenda por exceso del límite de emisión de CIPRL."),
 24:("F4","Cambios","Entidad pública","Empresa privada","Negociación directa ante una controversia."),
 31:("F4","Cambios","Empresa privada","Entidad pública","Pide más plazo por atrasos no atribuibles."),
 32:("F4","Cambios","Empresa privada","Entidad pública","Pide modificar el convenio por hechos sobrevinientes."),
 33:("F4","Cambios","Entidad pública","Empresa privada","Formaliza la ampliación de plazo."),
 34:("F4","Cambios","Entidad pública","Empresa privada","Formaliza la modificación por hechos sobrevinientes."),
 35:("F4","Cambios","Entidad pública","Empresa privada","Suspende el plazo por fuerza mayor."),
 27:("F4","Conformidad","Entidad pública","Empresa privada","Conformidad al expediente técnico."),
 26:("F4","Conformidad","Entidad pública","Entidad privada supervisora","Conformidad de calidad de la obra."),
 25:("F4","Conformidad","Entidad pública","Empresa privada","Recepción de la obra."),
 28:("F4","Conformidad","Entidad pública","Entidad privada supervisora","Conformidad del servicio de supervisión."),
 29:("F4","Conformidad","Entidad pública","Empresa privada","Conformidad de operación y/o mantenimiento."),
 30:("F4","CIPRL / CIPGN","Entidad pública","MEF","Pide al Tesoro Público emitir el CIPRL o CIPGN."),
 38:("F4","CIPRL / CIPGN","Empresa privada","Entidad pública","Sustenta el reembolso de estudios que financió la empresa."),
 36:("F0","ProInversión","ProInversión","Entidad pública","Convenio de asesoría de ProInversión a la entidad."),
 37:("F0","ProInversión","ProInversión","Entidad pública","Convenio para encargar el proceso a ProInversión."),
}

# Juego emergencia El Niño (RD 004-2026): n -> (fase, momento, título, elabora, dirigido, uso)
EMERGENCIA = {
 1: ("F1","Lista priorizada","Resolución que aprueba o actualiza la lista de priorización (regiones, municipios y universidades)","Entidad pública","Comité Especial","El titular aprueba la lista de intervenciones de emergencia."),
 2: ("F1","Lista priorizada","Resolución que aprueba o actualiza la lista de priorización (Gobierno Nacional)","Entidad pública","Comité Especial","Igual que el anterior, para entidades del Gobierno Nacional."),
 3: ("F1","Recursos","Informe de acreditación de recursos","Entidad pública","Entidad pública","La oficina de presupuesto acredita los recursos; desde él corren 3 días hábiles."),
 4: ("F2","Comité","Resolución que designa al Comité Especial","Entidad pública","Comité Especial","Designa a quienes conducen la contratación directa."),
 5: ("F2","Contratación directa","Informe técnico sustentatorio de la contratación directa","Entidad pública","Entidad pública","Sustento técnico de la contratación directa."),
 6: ("F2","Contratación directa","Informe legal sustentatorio de la contratación directa","Entidad pública","Entidad pública","Sustento legal de la contratación directa."),
 7: ("F2","Contratación directa","Resolución que autoriza la contratación directa","Entidad pública","Comité Especial","El titular autoriza la contratación directa (4 días hábiles)."),
 8: ("F3","Invitación","Invitación para presentar propuesta","Comité Especial","Empresa privada","Invita a empresas: 5 días hábiles para proponer."),
 9: ("F3","Propuesta","Carta de presentación de propuesta y formatos","Empresa privada","Comité Especial","La empresa presenta su propuesta."),
 10:("F3","Actas","Acta de evaluación de propuestas","Comité Especial","Empresa privada","Evaluación en 2 días hábiles."),
 11:("F3","Actas","Acta de adjudicación de la contratación directa","Comité Especial","Empresa privada","Adjudica; la empresa tiene 7 días hábiles para los requisitos."),
 12:("F4","Convenio","Convenio de Inversión – IOARR de emergencia","Entidad pública","Empresa privada","Convenio para inversiones de emergencia."),
 13:("F4","Convenio","Convenio de Inversión – Servicios","Entidad pública","Empresa privada","Convenio para servicios (novedad del Reglamento 2026)."),
 14:("F4","Convenio","Convenio de Inversión integrado (servicios + IOARR)","Entidad pública","Empresa privada","Un solo convenio con una sola empresa para servicios e IOARR."),
 15:("F4","Convenio","Contrato de supervisión","Entidad pública","Entidad privada supervisora","Contrato con la supervisora."),
 16:("F4","Conformidad","Conformidad a la versión final del expediente técnico","Entidad pública","Empresa privada","Aprobación del expediente en 5 días hábiles."),
 17:("F4","Conformidad","Conformidad de calidad y recepción – IOARR de emergencia","Entidad pública","Empresa privada","Calidad y recepción en un solo documento."),
 18:("F4","Conformidad","Conformidad de calidad – servicios","Entidad pública","Empresa privada","Calidad del servicio prestado."),
 19:("F4","Conformidad","Conformidad de recepción de la prestación – servicios","Entidad pública","Empresa privada","Recepción del servicio."),
 20:("F4","Conformidad","Informe de conformidad – servicios","Entidad pública","Empresa privada","Informe por cada periodo de avance del servicio."),
 21:("F4","Conformidad","Conformidad del servicio de supervisión","Entidad pública","Entidad privada supervisora","Conformidad a la supervisora (avance o total)."),
 22:("F4","Liquidación","Liquidación por obligación y del convenio","Empresa privada","Entidad pública","Liquidación en 10 días hábiles para cada parte."),
 23:("F4","CIPRL / CIPGN","Solicitud de emisión del CIPRL o CIPGN","Entidad pública","MEF","El MEF emite el certificado en 5 días hábiles."),
}

# Plazos máximos en días hábiles, desde la convocatoria/invitación hasta presentar los requisitos del convenio
CAL_REGULAR = [("Expresión de interés y consultas", 7), ("Absolución de consultas", 4), ("Integración de bases", 1),
               ("Presentación de propuestas", 7), ("Evaluación", 4), ("Buena pro", 1),
               ("Consentimiento de la buena pro", 8), ("Requisitos del convenio", 10)]
CAL_EMERGENCIA = [("Presentación de propuesta", 5), ("Evaluación y adjudicación", 2), ("Requisitos del convenio", 7)]

NOVEDADES = [
  dict(fecha="02/10/2025", norma="Ley N° 32460", texto="Modifica la Ley de Obras por Impuestos: suma servicios y planificación territorial, "
       "precisa plazos para el informe previo de la Contraloría y amplía el rol de ProInversión en todas las fases."),
  dict(fecha="13/03/2026", norma="D.S. N° 038-2026-EF", texto="Nuevo Reglamento, vigente desde el 14/03/2026; deroga el D.S. N° 210-2022-EF. "
       "Los procesos convocados antes de esa fecha siguen las reglas anteriores."),
  dict(fecha="06/09/2026", norma="RD N° 004-2026-EF/68.01", texto="23 modelos para la ruta de emergencia por El Niño 2026-2027 (D.U. N° 010-2026): "
       "contratación directa, plazos más cortos y sin informe previo de la Contraloría."),
]
CAMBIOS = [
  ("No solo obras", "Ahora también se financian servicios de salud, educación y saneamiento, planes territoriales y viviendas rurales."),
  ("Certificados más útiles", "El CIPRL y el CIPGN pagan hasta el 80% de 7 impuestos: renta (3 regímenes), activos netos, minería, IGV e ISC."),
  ("Diseñar y construir a la vez", "El expediente técnico puede hacerse en paralelo a la obra, con metodología BIM obligatoria."),
  ("Iniciativa privada al inicio", "La empresa propone ideas en etapa temprana, pero ya no puede sumarse a proyectos ya priorizados o viables."),
  ("Más filtros", "Patrimonio mínimo, estados financieros auditados y nuevos impedimentos: deuda coactiva con SUNAT y delitos graves."),
  ("Reglas de ejecución", "Penalidades de hasta 10% por obligación, trato directo reforzado y ProInversión depura las listas de priorización."),
]

def palabras(ruta):
    if ruta.suffix == ".docx":
        d = docx.Document(ruta)
        t = " ".join(p.text for p in d.paragraphs) + " ".join(c.text for tb in d.tables for r in tb.rows for c in r.cells)
        return len(re.findall(r"\w+", t))
    return None

SIGLAS = {"ciprl": "CIPRL", "cipgn": "CIPGN", "ioarr": "IOARR", "proinversión": "ProInversión",
          "concejo municipal": "Concejo Municipal", "consejo regional": "Consejo Regional", "comité especial": "Comité Especial",
          "entidad privada supervisora": "Entidad Privada Supervisora", "empresa privada": "Empresa Privada",
          "gobierno nacional": "Gobierno Nacional", "buena pro": "Buena Pro", "Modelo de ": ""}

docs = []
cat = pd.read_csv(BASE / "datos" / "catalogo.csv").merge(pd.read_csv(BASE / "datos" / "metricas.csv"), on="n")
for f in cat.itertuples():
    if f.n == 0:
        fase, mom, elab, dirig, uso, tit = "N", "Norma", "MEF", "Todos", "Aprueba los 38 modelos de la ruta regular (El Peruano, 21/12/2024).", "Resolución Directoral N° 005-2024-EF/68.01"
    else:
        fase, mom, elab, dirig, uso = REGULAR[f.n]
        tit = f.titulo.capitalize()
        for a, b in SIGLAS.items():
            tit = tit.replace(a, b)
        tit = tit[0].upper() + tit[1:]
    docs.append(dict(juego="regular", n=int(f.n), titulo=tit, fase=fase, momento=mom, elabora=elab, dirigido=dirig, uso=uso,
                     formato=Path(f.archivo).suffix.lstrip(".").upper(), palabras=int(f.palabras),
                     archivo=f.archivo, enlace=f"https://drive.google.com/file/d/{f.drive_id}/view"))
cat26 = pd.read_csv(BASE / "datos" / "catalogo_2026.csv")
for f in cat26.itertuples():
    if f.n == 0:
        fase, mom, tit, elab, dirig, uso = "N", "Norma", "Resolución Directoral N° 004-2026-EF/68.01", "MEF", "Todos", "Aprueba los 23 modelos de la ruta de emergencia (El Peruano, 06/09/2026)."
    else:
        fase, mom, tit, elab, dirig, uso = EMERGENCIA[f.n]
    ruta = DOCS / f.archivo
    docs.append(dict(juego="emergencia", n=int(f.n), titulo=tit, fase=fase, momento=mom, elabora=elab, dirigido=dirig, uso=uso,
                     formato=ruta.suffix.lstrip(".").upper(), palabras=palabras(ruta), archivo=f.archivo, enlace=f.url))

ZIPS = {"regular": "descargas/oxi_ruta_regular_RD005-2024.zip", "emergencia": "descargas/oxi_ruta_emergencia_RD004-2026.zip"}
(WEB / "descargas").mkdir(exist_ok=True)
for viejo in (WEB / "descargas").glob("*.zip"):
    if viejo.name not in [Path(z).name for z in ZIPS.values()]:
        viejo.unlink()
tam = {}
for juego, z in ZIPS.items():
    with zipfile.ZipFile(WEB / z, "w", zipfile.ZIP_DEFLATED) as zf:
        for d in docs:
            if d["juego"] == juego:
                zf.write(DOCS / d["archivo"], Path(d["archivo"]).name)
    tam[juego] = round((WEB / z).stat().st_size / 2**20, 1)

datos = dict(fases=FASES, documentos=docs, novedades=NOVEDADES, cambios=[dict(t=a, d=b) for a, b in CAMBIOS],
             calendario=dict(regular=[dict(paso=p, dias=d) for p, d in CAL_REGULAR],
                             emergencia=[dict(paso=p, dias=d) for p, d in CAL_EMERGENCIA]),
             zips=ZIPS, tam_zip=tam)
(WEB / "data").mkdir(parents=True, exist_ok=True)
(WEB / "data" / "proceso.js").write_text("const DATOS = " + json.dumps(datos, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
df = pd.DataFrame(docs)
print(df.groupby(["juego", "fase"]).size().unstack(0).fillna(0).astype(int))
print("Días hábiles regular:", sum(d for _, d in CAL_REGULAR), "| emergencia:", sum(d for _, d in CAL_EMERGENCIA), "| ZIP MB:", tam)
