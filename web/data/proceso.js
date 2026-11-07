const DATOS = {
 "fases": [
  {
   "id": "F1",
   "nombre": "Priorización",
   "pregunta": "¿Qué obra o servicio se hará?",
   "regular": "La entidad elige las inversiones o servicios que hará con OxI y asegura los recursos. La idea puede venir de la propia entidad o de una empresa (iniciativa privada).",
   "emergencia": "La oficina de presupuesto acredita los recursos y el titular aprueba la lista de priorización en 3 días hábiles (antes, 30).",
   "hitos_regular": [
    "Gobierno Nacional: opinión favorable de capacidad presupuestal (DGPP-MEF)",
    "Regiones, municipios y universidades: acuerdo de concejo o consejo",
    "Lista priorizada aprobada"
   ],
   "hitos_emergencia": [
    "Informe de acreditación de recursos",
    "Lista de priorización en 3 días hábiles"
   ]
  },
  {
   "id": "F2",
   "nombre": "Actos previos",
   "pregunta": "¿Está todo listo para convocar?",
   "regular": "Se forma el Comité Especial, se elaboran las bases y los informes técnico, financiero y legal, y se pide el informe previo de la Contraloría.",
   "emergencia": "Se designa el Comité Especial y, con informes técnico y legal, el titular autoriza la contratación directa en 4 días hábiles. No se pide el informe previo de la Contraloría.",
   "hitos_regular": [
    "Comité Especial designado",
    "Bases e informes técnico, financiero y legal",
    "Informe previo de la Contraloría"
   ],
   "hitos_emergencia": [
    "Comité Especial designado",
    "Resolución que autoriza la contratación directa (4 días hábiles)"
   ]
  },
  {
   "id": "F3",
   "nombre": "Proceso de selección",
   "pregunta": "¿Qué empresa lo hará?",
   "regular": "Se convoca públicamente a las empresas, que presentan sus propuestas. El Comité las evalúa y otorga la buena pro.",
   "emergencia": "El Comité invita a empresas: tienen 5 días hábiles para proponer. Se evalúa en 2 días hábiles y se adjudica.",
   "hitos_regular": [
    "Convocatoria",
    "Propuestas y evaluación",
    "Buena pro consentida"
   ],
   "hitos_emergencia": [
    "Invitación",
    "Propuesta (5 días hábiles)",
    "Evaluación (2) y adjudicación"
   ]
  },
  {
   "id": "F4",
   "nombre": "Ejecución",
   "pregunta": "¿Se hizo bien y se devuelve la inversión?",
   "regular": "Se firma el convenio, la empresa ejecuta la obra o el servicio con una supervisora, la entidad da conformidad y pide al MEF el CIPRL o CIPGN, que la empresa usa para pagar impuestos.",
   "emergencia": "Convenio de IOARR de emergencia, de servicios o integrado. Expediente técnico aprobado en 5 días hábiles, liquidación en 10 y emisión del CIPRL/CIPGN por el MEF en 5.",
   "hitos_regular": [
    "Convenio de Inversión firmado",
    "Obra o servicio con conformidad",
    "CIPRL / CIPGN emitido"
   ],
   "hitos_emergencia": [
    "Convenio firmado",
    "Conformidades y liquidación",
    "CIPRL / CIPGN en 5 días hábiles"
   ]
  }
 ],
 "documentos": [
  {
   "juego": "regular",
   "n": 0,
   "titulo": "Resolución Directoral N° 005-2024-EF/68.01",
   "fase": "N",
   "momento": "Norma",
   "elabora": "MEF",
   "dirigido": "Todos",
   "uso": "Aprueba los 38 modelos de la ruta regular (El Peruano, 21/12/2024).",
   "formato": "PDF",
   "palabras": 1971,
   "archivo": "RD_005-2024-EF-68.01.pdf",
   "enlace": "https://drive.google.com/file/d/1qosrxBgBNC_7QpuoQgrfu3_8gla27Tn5/view"
  },
  {
   "juego": "regular",
   "n": 1,
   "titulo": "Oficio del titular para otorgar relevancia",
   "fase": "F1",
   "momento": "Iniciativa privada",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "El titular declara relevante el proyecto propuesto por una empresa.",
   "formato": "DOCX",
   "palabras": 964,
   "archivo": "Anexo_01_modelo_de_oficio_del_titular_para_otorgar_relevancia.docx",
   "enlace": "https://drive.google.com/file/d/1BtYIH6hN56fa3W-hLxukGG0t2Dzklmi1/view"
  },
  {
   "juego": "regular",
   "n": 2,
   "titulo": "Carta de iniciativa privada para proponer la priorización",
   "fase": "F1",
   "momento": "Iniciativa privada",
   "elabora": "Empresa privada",
   "dirigido": "Entidad pública",
   "uso": "La empresa propone priorizar un proyecto o actividad.",
   "formato": "DOCX",
   "palabras": 6146,
   "archivo": "Anexo_02_modelo_de_carta_de_iniciativa_privada_para_proponer_la_priorizacion.docx",
   "enlace": "https://drive.google.com/file/d/1XFPcf_AvOefyDYIFRYmMzwIOXhsUXo8h/view"
  },
  {
   "juego": "regular",
   "n": 3,
   "titulo": "Carta de iniciativa privada para actualización de proyecto de inversión",
   "fase": "F1",
   "momento": "Iniciativa privada",
   "elabora": "Empresa privada",
   "dirigido": "Entidad pública",
   "uso": "La empresa propone actualizar el estudio de un proyecto.",
   "formato": "DOCX",
   "palabras": 925,
   "archivo": "Anexo_03_modelo_de_carta_de_iniciativa_privada_para_actualizacion_de_proyecto_de_inversio.docx",
   "enlace": "https://drive.google.com/file/d/1kd73hnkppNRYSaZ-j7vDxam47Ivrrqtj/view"
  },
  {
   "juego": "regular",
   "n": 4,
   "titulo": "Solicitud de opinión favorable de capacidad presupuestal",
   "fase": "F1",
   "momento": "Recursos",
   "elabora": "Entidad pública",
   "dirigido": "MEF",
   "uso": "Gobierno Nacional: pide al MEF (DGPP) opinión de capacidad presupuestal.",
   "formato": "DOCX",
   "palabras": 1929,
   "archivo": "Anexo_04_modelo_de_solicitud_de_opinion_favorable_de_capacidad_presupuestal.docx",
   "enlace": "https://drive.google.com/file/d/1qnrwNCGFC4d84xf7HvvxZThI-ZlZcORk/view"
  },
  {
   "juego": "regular",
   "n": 5,
   "titulo": "Resolución de la entidad del Gobierno Nacional que aprueba la lista priorizada y designación del Comité Especial",
   "fase": "F1",
   "momento": "Lista priorizada",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "Gobierno Nacional: aprueba la lista priorizada y designa al Comité.",
   "formato": "DOCX",
   "palabras": 1518,
   "archivo": "Anexo_05_modelo_de_resolucion_de_la_entidad_del_gobierno_nacional_que_aprueba_la_lista_pr.docx",
   "enlace": "https://drive.google.com/file/d/1IUSqrn6YIpykMsFdDfA9mHQQ-Sdh5Y-d/view"
  },
  {
   "juego": "regular",
   "n": 6,
   "titulo": "Acuerdo de Concejo Municipal, Consejo Regional o universitario para priorización de proyectos y designación del Comité Especial",
   "fase": "F1",
   "momento": "Lista priorizada",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "Regiones, municipios y universidades: acuerdo de concejo o consejo.",
   "formato": "DOCX",
   "palabras": 4073,
   "archivo": "Anexo_06_modelo_de_acuerdo_de_concejo_municipal_consejo_regional_o_universitario_para_pri.docx",
   "enlace": "https://drive.google.com/file/d/1d1Ahidwn8ZlAw8SGafF7QA91Mk3tEylg/view"
  },
  {
   "juego": "regular",
   "n": 7,
   "titulo": "Informe técnico",
   "fase": "F2",
   "momento": "Informes para Contraloría",
   "elabora": "Entidad pública",
   "dirigido": "Contraloría",
   "uso": "Sustento técnico para el informe previo.",
   "formato": "DOCX",
   "palabras": 3978,
   "archivo": "Anexo_07_modelo_de_informe_tecnico.docx",
   "enlace": "https://drive.google.com/file/d/1TuDLxigU0VfZw2Fg-9YNiewX-NiNeNZW/view"
  },
  {
   "juego": "regular",
   "n": 8,
   "titulo": "Informe financiero para entidades de Gobierno Nacional",
   "fase": "F2",
   "momento": "Informes para Contraloría",
   "elabora": "Entidad pública",
   "dirigido": "Contraloría",
   "uso": "Sustento financiero (Gobierno Nacional).",
   "formato": "DOCX",
   "palabras": 2215,
   "archivo": "Anexo_08_modelo_de_informe_financiero_para_entidades_de_gobierno_nacional.docx",
   "enlace": "https://drive.google.com/file/d/1tVLlOe7eUGZS8XObYfa6Y-o48xFixyyC/view"
  },
  {
   "juego": "regular",
   "n": 9,
   "titulo": "Informe financiero para gobiernos regionales, gobiernos locales o universidades públicas",
   "fase": "F2",
   "momento": "Informes para Contraloría",
   "elabora": "Entidad pública",
   "dirigido": "Contraloría",
   "uso": "Sustento financiero (regiones, municipios y universidades).",
   "formato": "DOCX",
   "palabras": 4023,
   "archivo": "Anexo_09_modelo_de_informe_financiero_para_gobiernos_regionales_gobiernos_locales_o_unive.docx",
   "enlace": "https://drive.google.com/file/d/15QysECoOCGIt8iBZNKnhGsJWQ4NcRR-8/view"
  },
  {
   "juego": "regular",
   "n": 10,
   "titulo": "Flujo de caja proyectado",
   "fase": "F2",
   "momento": "Informes para Contraloría",
   "elabora": "Entidad pública",
   "dirigido": "Contraloría",
   "uso": "Flujo de caja proyectado (Excel).",
   "formato": "XLSX",
   "palabras": 9379,
   "archivo": "Anexo_10_modelo_de_flujo_de_caja_proyectado.xlsx",
   "enlace": "https://drive.google.com/file/d/1vCJ_mx4SKonxNZM2tntJcgefx-GCvDzm/view"
  },
  {
   "juego": "regular",
   "n": 11,
   "titulo": "Informe legal",
   "fase": "F2",
   "momento": "Informes para Contraloría",
   "elabora": "Entidad pública",
   "dirigido": "Contraloría",
   "uso": "Sustento legal para el informe previo.",
   "formato": "DOCX",
   "palabras": 1912,
   "archivo": "Anexo_11_modelo_de_informe_legal.docx",
   "enlace": "https://drive.google.com/file/d/1IHIpqsUvrhPruIBRqYzDzXSTb1BdgSfJ/view"
  },
  {
   "juego": "regular",
   "n": 12,
   "titulo": "Bases del proceso de selección de la Empresa Privada",
   "fase": "F2",
   "momento": "Bases",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Reglas para elegir a la empresa (el modelo más extenso).",
   "formato": "DOCX",
   "palabras": 24477,
   "archivo": "Anexo_12_modelo_de_bases_del_proceso_de_seleccion_de_la_empresa_privada.docx",
   "enlace": "https://drive.google.com/file/d/1q375L4WlSzOgYvlE0yblTVcfBZOj9alq/view"
  },
  {
   "juego": "regular",
   "n": 13,
   "titulo": "Bases del proceso de selección de la Entidad Privada Supervisora",
   "fase": "F2",
   "momento": "Bases",
   "elabora": "Comité Especial",
   "dirigido": "Entidad privada supervisora",
   "uso": "Reglas para elegir a la supervisora.",
   "formato": "DOCX",
   "palabras": 16717,
   "archivo": "Anexo_13_modelo_de_bases_del_proceso_de_seleccion_de_la_entidad_privada_supervisora.docx",
   "enlace": "https://drive.google.com/file/d/14ob8z4JnOGDQmF8PzKODOE1sYLFKQUx3/view"
  },
  {
   "juego": "regular",
   "n": 14,
   "titulo": "Resolución de la entidad que aprueba las bases del proceso de selección de la Empresa Privada",
   "fase": "F2",
   "momento": "Bases",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "El titular aprueba las bases.",
   "formato": "DOCX",
   "palabras": 796,
   "archivo": "Anexo_14_modelo_de_resolucion_de_la_entidad_que_aprueba_las_bases_del_proceso_de_seleccio.docx",
   "enlace": "https://drive.google.com/file/d/1fFRoeRMtxhcN3iLD3YF21VOpr5k5lBMs/view"
  },
  {
   "juego": "regular",
   "n": 15,
   "titulo": "Convocatoria de la Empresa Privada",
   "fase": "F3",
   "momento": "Convocatoria",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Aviso público para las empresas.",
   "formato": "DOCX",
   "palabras": 1326,
   "archivo": "Anexo_15_modelo_de_convocatoria_de_la_empresa_privada.docx",
   "enlace": "https://drive.google.com/file/d/1F6qRrkUDhX4JdQ1HZ-4UTk7dcWvioKtS/view"
  },
  {
   "juego": "regular",
   "n": 16,
   "titulo": "Convocatoria de la Entidad Privada Supervisora",
   "fase": "F3",
   "momento": "Convocatoria",
   "elabora": "Comité Especial",
   "dirigido": "Entidad privada supervisora",
   "uso": "Aviso público para las supervisoras.",
   "formato": "DOCX",
   "palabras": 1045,
   "archivo": "Anexo_16_modelo_de_convocatoria_de_la_entidad_privada_supervisora.docx",
   "enlace": "https://drive.google.com/file/d/1jSRga65tYJe5xTvwvDjfGH5rpXU7Q18l/view"
  },
  {
   "juego": "regular",
   "n": 17,
   "titulo": "Circular",
   "fase": "F3",
   "momento": "Consultas",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Aclara o precisa las bases.",
   "formato": "DOCX",
   "palabras": 325,
   "archivo": "Anexo_17_modelo_de_circular.docx",
   "enlace": "https://drive.google.com/file/d/1ERh5RxG1ep-3fUdVhoIF2gLdowSsSSW_/view"
  },
  {
   "juego": "regular",
   "n": 18,
   "titulo": "Acta de recepción de propuestas",
   "fase": "F3",
   "momento": "Actas",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Registra los sobres recibidos.",
   "formato": "DOCX",
   "palabras": 384,
   "archivo": "Anexo_18_modelo_de_acta_de_recepcion_de_propuestas.docx",
   "enlace": "https://drive.google.com/file/d/1MNxWUCU5AIdJir8q2T1nmMt1rsWJ79zh/view"
  },
  {
   "juego": "regular",
   "n": 19,
   "titulo": "Acta de evaluación de propuestas",
   "fase": "F3",
   "momento": "Actas",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Registra la evaluación de propuestas.",
   "formato": "DOCX",
   "palabras": 965,
   "archivo": "Anexo_19_modelo_de_acta_de_evaluacion_de_propuestas.docx",
   "enlace": "https://drive.google.com/file/d/1L8Ig9Ba3hGsIvCgGVPwNRfymtoe5dQZD/view"
  },
  {
   "juego": "regular",
   "n": 20,
   "titulo": "Acta de adjudicación de la Buena Pro",
   "fase": "F3",
   "momento": "Actas",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Registra la buena pro.",
   "formato": "DOC",
   "palabras": 361,
   "archivo": "Anexo_20_modelo_de_acta_de_adjudicacion_de_la_buena_pro.doc",
   "enlace": "https://drive.google.com/file/d/1lBXVTB2GT0_k0hK8AK4HUOcqsQB0uH3T/view"
  },
  {
   "juego": "regular",
   "n": 21,
   "titulo": "Convenio de inversión",
   "fase": "F4",
   "momento": "Convenio",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Contrato central: obligaciones, plazos, garantías y pago con CIPRL/CIPGN.",
   "formato": "DOCX",
   "palabras": 11730,
   "archivo": "Anexo_21_modelo_de_convenio_de_inversion.docx",
   "enlace": "https://drive.google.com/file/d/1FQfM3Sq2fNE0lcleqtkk7cDPfdZbM1ds/view"
  },
  {
   "juego": "regular",
   "n": 22,
   "titulo": "Contrato de la Entidad Privada Supervisora",
   "fase": "F4",
   "momento": "Convenio",
   "elabora": "Entidad pública",
   "dirigido": "Entidad privada supervisora",
   "uso": "Contrato con la supervisora.",
   "formato": "DOCX",
   "palabras": 3952,
   "archivo": "Anexo_22_modelo_de_contrato_de_la_entidad_privada_supervisora.docx",
   "enlace": "https://drive.google.com/file/d/1qX2A74fZmDF9VLpO67Iqa-TWfrD-Q7hP/view"
  },
  {
   "juego": "regular",
   "n": 23,
   "titulo": "Adenda al convenio por exceso de límite de emisión de CIPRL",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Adenda por exceso del límite de emisión de CIPRL.",
   "formato": "DOCX",
   "palabras": 2997,
   "archivo": "Anexo_23_modelo_de_adenda_al_convenio_por_exceso_de_limite_de_emision_de_ciprl.docx",
   "enlace": "https://drive.google.com/file/d/12U0f-gEDrkZr7X8VEIAgaZLvnsW77wS8/view"
  },
  {
   "juego": "regular",
   "n": 24,
   "titulo": "Acta de trato directo",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Negociación directa ante una controversia.",
   "formato": "DOCX",
   "palabras": 1303,
   "archivo": "Anexo_24_modelo_de_acta_de_trato_directo.docx",
   "enlace": "https://drive.google.com/file/d/1Wh5Tgu3hlFyce-swqwevQSqdjyBXkzuS/view"
  },
  {
   "juego": "regular",
   "n": 25,
   "titulo": "Conformidad de recepción de las inversiones",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Recepción de la obra.",
   "formato": "DOCX",
   "palabras": 918,
   "archivo": "Anexo_25_modelo_de_conformidad_de_recepcion_de_las_inversiones.docx",
   "enlace": "https://drive.google.com/file/d/1Uo2HxwTCH8tmFYYBkD8CPbVZ2mONmPL6/view"
  },
  {
   "juego": "regular",
   "n": 26,
   "titulo": "Conformidad de calidad del proyecto - IOARR",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Entidad privada supervisora",
   "uso": "Conformidad de calidad de la obra.",
   "formato": "DOCX",
   "palabras": 494,
   "archivo": "Anexo_26_modelo_de_conformidad_de_calidad_del_proyecto_ioarr.docx",
   "enlace": "https://drive.google.com/file/d/1XzU9yPTqDFzABoOoHDMYgw1udBtUvz9t/view"
  },
  {
   "juego": "regular",
   "n": 27,
   "titulo": "Conformidad a la elaboración del expediente técnico o documento equivalente",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Conformidad al expediente técnico.",
   "formato": "DOCX",
   "palabras": 351,
   "archivo": "Anexo_27_modelo_de_conformidad_a_la_elaboracion_del_expediente_tecnico_o_documento_equiva.docx",
   "enlace": "https://drive.google.com/file/d/1s6N890iXFCex-wpC4EvrdYFJXkXhv5ld/view"
  },
  {
   "juego": "regular",
   "n": 28,
   "titulo": "Conformidad por el servicio de supervisión del avance o ejecución total del proyecto - IOARR",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Entidad privada supervisora",
   "uso": "Conformidad del servicio de supervisión.",
   "formato": "DOCX",
   "palabras": 445,
   "archivo": "Anexo_28_modelo_de_conformidad_por_el_servicio_de_supervision_del_avance_o_ejecucion_tota.docx",
   "enlace": "https://drive.google.com/file/d/1BZY_zOvkIc-xg7NwaRJ5JUJKGFpUSZ0A/view"
  },
  {
   "juego": "regular",
   "n": 29,
   "titulo": "Conformidad de las actividades de operación o mantenimiento",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Conformidad de operación y/o mantenimiento.",
   "formato": "DOCX",
   "palabras": 556,
   "archivo": "Anexo_29_modelo_de_conformidad_de_las_actividades_de_operacion_o_mantenimiento.docx",
   "enlace": "https://drive.google.com/file/d/18bBE5MMHpW0E_xAIG6uFjb05it-vlHI4/view"
  },
  {
   "juego": "regular",
   "n": 30,
   "titulo": "Oficio de solicitud de emisión de CIPRL o CIPGN",
   "fase": "F4",
   "momento": "CIPRL / CIPGN",
   "elabora": "Entidad pública",
   "dirigido": "MEF",
   "uso": "Pide al Tesoro Público emitir el CIPRL o CIPGN.",
   "formato": "DOCX",
   "palabras": 998,
   "archivo": "Anexo_30_modelo_de_oficio_de_solicitud_de_emision_de_ciprl_o_cipgn.docx",
   "enlace": "https://drive.google.com/file/d/1yNpuLyqdwUVEXe26UolYZ-ogvosKchYC/view"
  },
  {
   "juego": "regular",
   "n": 31,
   "titulo": "Carta de solicitud de ampliación de plazo por atrasos o paralizaciones no atribuibles a la Empresa Privada",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Empresa privada",
   "dirigido": "Entidad pública",
   "uso": "Pide más plazo por atrasos no atribuibles.",
   "formato": "DOCX",
   "palabras": 1956,
   "archivo": "Anexo_31_modelo_de_carta_de_solicitud_de_ampliacion_de_plazo_por_atrasos_o_paralizaciones.docx",
   "enlace": "https://drive.google.com/file/d/1ZLl4lour7AyJd47UH07-3dpIBHRhxOjS/view"
  },
  {
   "juego": "regular",
   "n": 32,
   "titulo": "Carta de solicitud para modificaciones al convenio por circunstancias sobrevinientes u otros supuestos",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Empresa privada",
   "dirigido": "Entidad pública",
   "uso": "Pide modificar el convenio por hechos sobrevinientes.",
   "formato": "DOCX",
   "palabras": 1835,
   "archivo": "Anexo_32_modelo_de_carta_de_solicitud_para_modificaciones_al_convenio_por_circunstancias_.docx",
   "enlace": "https://drive.google.com/file/d/1VS9YOUixLD-dHAkVa2zRXwSbV2XbXxqU/view"
  },
  {
   "juego": "regular",
   "n": 33,
   "titulo": "Adenda por ampliación de plazo por atrasos o paralizaciones no atribuibles a la Empresa Privada",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Formaliza la ampliación de plazo.",
   "formato": "DOCX",
   "palabras": 1530,
   "archivo": "Anexo_33_modelo_de_adenda_por_ampliacion_de_plazo_por_atrasos_o_paralizaciones_no_atribui.docx",
   "enlace": "https://drive.google.com/file/d/17OYtk8qWzacgpugjyRhvgY4Vl-46GRdX/view"
  },
  {
   "juego": "regular",
   "n": 34,
   "titulo": "Adenda por circunstancias sobrevinientes u otros supuestos",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Formaliza la modificación por hechos sobrevinientes.",
   "formato": "DOCX",
   "palabras": 1560,
   "archivo": "Anexo_34_modelo_de_adenda_por_circunstancias_sobrevinientes_u_otros_supuestos.docx",
   "enlace": "https://drive.google.com/file/d/1bxs7cbcSzoD-kN9eUK2uWxvNmDTmfv2u/view"
  },
  {
   "juego": "regular",
   "n": 35,
   "titulo": "Acta por suspensión de plazo de ejecución por caso fortuito o fuerza mayor",
   "fase": "F4",
   "momento": "Cambios",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Suspende el plazo por fuerza mayor.",
   "formato": "DOCX",
   "palabras": 1363,
   "archivo": "Anexo_35_modelo_de_acta_por_suspension_de_plazo_de_ejecucion_por_caso_fortuito_o_fuerza_m.docx",
   "enlace": "https://drive.google.com/file/d/1H1NcH5QetNNfxeUnEixJ4Of8r4vtvZaS/view"
  },
  {
   "juego": "regular",
   "n": 36,
   "titulo": "Convenio de asistencia técnica de ProInversión por asesoría",
   "fase": "F0",
   "momento": "ProInversión",
   "elabora": "ProInversión",
   "dirigido": "Entidad pública",
   "uso": "Convenio de asesoría de ProInversión a la entidad.",
   "formato": "DOCX",
   "palabras": 2238,
   "archivo": "Anexo_36_modelo_de_convenio_de_asistencia_tecnica_de_proinversion_por_asesoria.docx",
   "enlace": "https://drive.google.com/file/d/1n6uExB--FF0RwNw4YFj1g73XWXyncnBG/view"
  },
  {
   "juego": "regular",
   "n": 37,
   "titulo": "Convenio de asistencia técnica de ProInversión por encargo",
   "fase": "F0",
   "momento": "ProInversión",
   "elabora": "ProInversión",
   "dirigido": "Entidad pública",
   "uso": "Convenio para encargar el proceso a ProInversión.",
   "formato": "DOCX",
   "palabras": 3915,
   "archivo": "Anexo_37_modelo_de_convenio_de_asistencia_tecnica_de_proinversion_por_encargo.docx",
   "enlace": "https://drive.google.com/file/d/13XFPhKOMakmrYK_txyMfR8p2u7w50VhP/view"
  },
  {
   "juego": "regular",
   "n": 38,
   "titulo": "Solicitud de reembolso de los costos",
   "fase": "F4",
   "momento": "CIPRL / CIPGN",
   "elabora": "Empresa privada",
   "dirigido": "Entidad pública",
   "uso": "Sustenta el reembolso de estudios que financió la empresa.",
   "formato": "DOCX",
   "palabras": 678,
   "archivo": "Anexo_38_modelo_de_solicitud_de_reembolso_de_los_costos.docx",
   "enlace": "https://drive.google.com/file/d/18dwWIMRrXKOFspobeVRI9xmDtmmJ6abE/view"
  },
  {
   "juego": "emergencia",
   "n": 0,
   "titulo": "Resolución Directoral N° 004-2026-EF/68.01",
   "fase": "N",
   "momento": "Norma",
   "elabora": "MEF",
   "dirigido": "Todos",
   "uso": "Aprueba los 23 modelos de la ruta de emergencia (El Peruano, 06/09/2026).",
   "formato": "PDF",
   "palabras": null,
   "archivo": "2026/RD_004-2026-EF-68.01.pdf",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573922/8563340-resolucion-directoral-n-004-2026-ef-68-01.pdf?v=1788716690"
  },
  {
   "juego": "emergencia",
   "n": 1,
   "titulo": "Resolución que aprueba o actualiza la lista de priorización (regiones, municipios y universidades)",
   "fase": "F1",
   "momento": "Lista priorizada",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "El titular aprueba la lista de intervenciones de emergencia.",
   "formato": "DOCX",
   "palabras": 1932,
   "archivo": "2026/2026_Anexo_01.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573923/8563340-anexo-01-modelo-de-resolucion-del-titular-del-gobierno-regional-gobierno-local-o-universidad-publica-que-aprueba-o-actualiza-la-lista-de-priorizacion.docx?v=1788716690"
  },
  {
   "juego": "emergencia",
   "n": 2,
   "titulo": "Resolución que aprueba o actualiza la lista de priorización (Gobierno Nacional)",
   "fase": "F1",
   "momento": "Lista priorizada",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "Igual que el anterior, para entidades del Gobierno Nacional.",
   "formato": "DOCX",
   "palabras": 1582,
   "archivo": "2026/2026_Anexo_02.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573924/8563340-anexo-02-modelo-de-resolucion-del-titular-de-la-entidad-publica-del-gobierno-nacional-que-aprueba-o-actualiza-la-lista-de-priorizacion.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 3,
   "titulo": "Informe de acreditación de recursos",
   "fase": "F1",
   "momento": "Recursos",
   "elabora": "Entidad pública",
   "dirigido": "Entidad pública",
   "uso": "La oficina de presupuesto acredita los recursos; desde él corren 3 días hábiles.",
   "formato": "DOCX",
   "palabras": 1745,
   "archivo": "2026/2026_Anexo_03.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573925/8563340-anexo-03-modelo-de-informe-de-acreditacion-de-recursos.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 4,
   "titulo": "Resolución que designa al Comité Especial",
   "fase": "F2",
   "momento": "Comité",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "Designa a quienes conducen la contratación directa.",
   "formato": "DOCX",
   "palabras": 1450,
   "archivo": "2026/2026_Anexo_04.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573926/8563340-anexo-04-modelo-de-resolucion-que-designa-al-comite-especial.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 5,
   "titulo": "Informe técnico sustentatorio de la contratación directa",
   "fase": "F2",
   "momento": "Contratación directa",
   "elabora": "Entidad pública",
   "dirigido": "Entidad pública",
   "uso": "Sustento técnico de la contratación directa.",
   "formato": "DOCX",
   "palabras": 1926,
   "archivo": "2026/2026_Anexo_05.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573927/8563340-anexo-05-modelo-de-informe-tecnico-sustentatorio-de-la-contratacion-directa.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 6,
   "titulo": "Informe legal sustentatorio de la contratación directa",
   "fase": "F2",
   "momento": "Contratación directa",
   "elabora": "Entidad pública",
   "dirigido": "Entidad pública",
   "uso": "Sustento legal de la contratación directa.",
   "formato": "DOCX",
   "palabras": 1528,
   "archivo": "2026/2026_Anexo_06.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573928/8563340-anexo-06-modelo-de-informe-legal-sustentatorio-de-la-contratacion-directa.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 7,
   "titulo": "Resolución que autoriza la contratación directa",
   "fase": "F2",
   "momento": "Contratación directa",
   "elabora": "Entidad pública",
   "dirigido": "Comité Especial",
   "uso": "El titular autoriza la contratación directa (4 días hábiles).",
   "formato": "DOCX",
   "palabras": 3564,
   "archivo": "2026/2026_Anexo_07.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573929/8563340-anexo-07-modelo-de-resolucion-del-titular-de-la-entidad-publica-que-autoriza-la-contratacion-directa.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 8,
   "titulo": "Invitación para presentar propuesta",
   "fase": "F3",
   "momento": "Invitación",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Invita a empresas: 5 días hábiles para proponer.",
   "formato": "DOCX",
   "palabras": 2045,
   "archivo": "2026/2026_Anexo_08.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573930/8563340-anexo-08-modelo-de-invitacion-para-presentar-propuesta.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 9,
   "titulo": "Carta de presentación de propuesta y formatos",
   "fase": "F3",
   "momento": "Propuesta",
   "elabora": "Empresa privada",
   "dirigido": "Comité Especial",
   "uso": "La empresa presenta su propuesta.",
   "formato": "DOCX",
   "palabras": 1917,
   "archivo": "2026/2026_Anexo_09.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573931/8563340-anexo-09-modelo-de-carta-de-presentacion-de-propuesta-y-formatos-anexos.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 10,
   "titulo": "Acta de evaluación de propuestas",
   "fase": "F3",
   "momento": "Actas",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Evaluación en 2 días hábiles.",
   "formato": "DOCX",
   "palabras": 1068,
   "archivo": "2026/2026_Anexo_10.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573932/8563340-anexo-10-modelo-de-acta-de-evaluacion-de-propuestas.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 11,
   "titulo": "Acta de adjudicación de la contratación directa",
   "fase": "F3",
   "momento": "Actas",
   "elabora": "Comité Especial",
   "dirigido": "Empresa privada",
   "uso": "Adjudica; la empresa tiene 7 días hábiles para los requisitos.",
   "formato": "DOCX",
   "palabras": 1205,
   "archivo": "2026/2026_Anexo_11.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573933/8563340-anexo-11-modelo-de-acta-de-adjudicacion-de-la-contratacion-directa.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 12,
   "titulo": "Convenio de Inversión – IOARR de emergencia",
   "fase": "F4",
   "momento": "Convenio",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Convenio para inversiones de emergencia.",
   "formato": "DOCX",
   "palabras": 4925,
   "archivo": "2026/2026_Anexo_12.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573934/8563340-anexo-12-modelo-de-convenio-de-inversion-ioarr-de-emergencia.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 13,
   "titulo": "Convenio de Inversión – Servicios",
   "fase": "F4",
   "momento": "Convenio",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Convenio para servicios (novedad del Reglamento 2026).",
   "formato": "DOCX",
   "palabras": 4016,
   "archivo": "2026/2026_Anexo_13.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573935/8563340-anexo-13-modelo-de-convenio-de-inversion-servicios.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 14,
   "titulo": "Convenio de Inversión integrado (servicios + IOARR)",
   "fase": "F4",
   "momento": "Convenio",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Un solo convenio con una sola empresa para servicios e IOARR.",
   "formato": "DOCX",
   "palabras": 8616,
   "archivo": "2026/2026_Anexo_14.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573936/8563340-anexo-14-modelo-de-convenio-de-inversion-integrado-agrupamiento-de-servicios-e-ioarr-de-emergencia-con-una-sola-empresa-privada.docx?v=1788716691"
  },
  {
   "juego": "emergencia",
   "n": 15,
   "titulo": "Contrato de supervisión",
   "fase": "F4",
   "momento": "Convenio",
   "elabora": "Entidad pública",
   "dirigido": "Entidad privada supervisora",
   "uso": "Contrato con la supervisora.",
   "formato": "DOCX",
   "palabras": 1920,
   "archivo": "2026/2026_Anexo_15.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573937/8563340-anexo-15-modelo-de-contrato-de-supervision-entidad-privada-supervisora.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 16,
   "titulo": "Conformidad a la versión final del expediente técnico",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Aprobación del expediente en 5 días hábiles.",
   "formato": "DOCX",
   "palabras": 899,
   "archivo": "2026/2026_Anexo_16.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573938/8563340-anexo-16-modelo-de-conformidad-a-la-version-final-del-expediente-tecnico-o-documento-equivalente.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 17,
   "titulo": "Conformidad de calidad y recepción – IOARR de emergencia",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Calidad y recepción en un solo documento.",
   "formato": "DOCX",
   "palabras": 1355,
   "archivo": "2026/2026_Anexo_17.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573939/8563340-anexo-17-modelo-de-conformidad-de-calidad-y-recepcion-ioarr-de-emergencia.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 18,
   "titulo": "Conformidad de calidad – servicios",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Calidad del servicio prestado.",
   "formato": "DOCX",
   "palabras": 875,
   "archivo": "2026/2026_Anexo_18.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573940/8563340-anexo-18-modelo-de-conformidad-de-calidad-servicios.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 19,
   "titulo": "Conformidad de recepción de la prestación – servicios",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Recepción del servicio.",
   "formato": "DOCX",
   "palabras": 1079,
   "archivo": "2026/2026_Anexo_19.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573941/8563340-anexo-19-modelo-de-conformidad-de-recepcion-de-la-prestacion-ejecutada-servicios.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 20,
   "titulo": "Informe de conformidad – servicios",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Empresa privada",
   "uso": "Informe por cada periodo de avance del servicio.",
   "formato": "DOCX",
   "palabras": 1900,
   "archivo": "2026/2026_Anexo_20.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573942/8563340-anexo-20-modelo-de-informe-de-conformidad-servicios.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 21,
   "titulo": "Conformidad del servicio de supervisión",
   "fase": "F4",
   "momento": "Conformidad",
   "elabora": "Entidad pública",
   "dirigido": "Entidad privada supervisora",
   "uso": "Conformidad a la supervisora (avance o total).",
   "formato": "DOCX",
   "palabras": 1256,
   "archivo": "2026/2026_Anexo_21.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573943/8563340-anexo-21-modelo-de-conformidad-por-el-servicio-de-supervision-del-avance-o-ejecucion-total-de-la-intervencion.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 22,
   "titulo": "Liquidación por obligación y del convenio",
   "fase": "F4",
   "momento": "Liquidación",
   "elabora": "Empresa privada",
   "dirigido": "Entidad pública",
   "uso": "Liquidación en 10 días hábiles para cada parte.",
   "formato": "DOCX",
   "palabras": 1411,
   "archivo": "2026/2026_Anexo_22.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573944/8563340-anexo-22-modelo-de-liquidacion-por-obligacion-y-liquidacion-del-convenio-de-inversion.docx?v=1788716692"
  },
  {
   "juego": "emergencia",
   "n": 23,
   "titulo": "Solicitud de emisión del CIPRL o CIPGN",
   "fase": "F4",
   "momento": "CIPRL / CIPGN",
   "elabora": "Entidad pública",
   "dirigido": "MEF",
   "uso": "El MEF emite el certificado en 5 días hábiles.",
   "formato": "DOCX",
   "palabras": 1209,
   "archivo": "2026/2026_Anexo_23.docx",
   "enlace": "https://cdn.www.gob.pe/uploads/document/file/10573945/8563340-anexo-23-modelo-de-solicitud-de-emision-del-ciprl-o-cipgn.docx?v=1788716692"
  }
 ],
 "novedades": [
  {
   "fecha": "02/10/2025",
   "norma": "Ley N° 32460",
   "texto": "Modifica la Ley de Obras por Impuestos: suma servicios y planificación territorial, precisa plazos para el informe previo de la Contraloría y amplía el rol de ProInversión en todas las fases."
  },
  {
   "fecha": "13/03/2026",
   "norma": "D.S. N° 038-2026-EF",
   "texto": "Nuevo Reglamento, vigente desde el 14/03/2026; deroga el D.S. N° 210-2022-EF. Los procesos convocados antes de esa fecha siguen las reglas anteriores."
  },
  {
   "fecha": "06/09/2026",
   "norma": "RD N° 004-2026-EF/68.01",
   "texto": "23 modelos para la ruta de emergencia por El Niño 2026-2027 (D.U. N° 010-2026): contratación directa, plazos más cortos y sin informe previo de la Contraloría."
  }
 ],
 "cambios": [
  {
   "t": "No solo obras",
   "d": "Ahora también se financian servicios de salud, educación y saneamiento, planes territoriales y viviendas rurales."
  },
  {
   "t": "Certificados más útiles",
   "d": "El CIPRL y el CIPGN pagan hasta el 80% de 7 impuestos: renta (3 regímenes), activos netos, minería, IGV e ISC."
  },
  {
   "t": "Diseñar y construir a la vez",
   "d": "El expediente técnico puede hacerse en paralelo a la obra, con metodología BIM obligatoria."
  },
  {
   "t": "Iniciativa privada al inicio",
   "d": "La empresa propone ideas en etapa temprana, pero ya no puede sumarse a proyectos ya priorizados o viables."
  },
  {
   "t": "Más filtros",
   "d": "Patrimonio mínimo, estados financieros auditados y nuevos impedimentos: deuda coactiva con SUNAT y delitos graves."
  },
  {
   "t": "Reglas de ejecución",
   "d": "Penalidades de hasta 10% por obligación, trato directo reforzado y ProInversión depura las listas de priorización."
  }
 ],
 "calendario": {
  "regular": [
   {
    "paso": "Expresión de interés y consultas",
    "dias": 7
   },
   {
    "paso": "Absolución de consultas",
    "dias": 4
   },
   {
    "paso": "Integración de bases",
    "dias": 1
   },
   {
    "paso": "Presentación de propuestas",
    "dias": 7
   },
   {
    "paso": "Evaluación",
    "dias": 4
   },
   {
    "paso": "Buena pro",
    "dias": 1
   },
   {
    "paso": "Consentimiento de la buena pro",
    "dias": 8
   },
   {
    "paso": "Requisitos del convenio",
    "dias": 10
   }
  ],
  "emergencia": [
   {
    "paso": "Presentación de propuesta",
    "dias": 5
   },
   {
    "paso": "Evaluación y adjudicación",
    "dias": 2
   },
   {
    "paso": "Requisitos del convenio",
    "dias": 7
   }
  ]
 },
 "zips": {
  "regular": "descargas/oxi_ruta_regular_RD005-2024.zip",
  "emergencia": "descargas/oxi_ruta_emergencia_RD004-2026.zip"
 },
 "tam_zip": {
  "regular": 54.5,
  "emergencia": 1.3
 }
};
