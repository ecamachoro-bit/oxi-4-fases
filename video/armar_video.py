"""Video corto para LinkedIn, SIN VOZ y con subtítulos incrustados (1080 × 1350, 30 fps).

Entradas: ../web/data/proceso.js y ../capturas/*.png (de scripts/capturar.py)
Salidas: video_oxi_documentos.mp4, subtitulos.srt, portada.png
Requiere FFmpeg en el PATH (winget install Gyan.FFmpeg). Uso: python armar_video.py
"""
import json, shutil, subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

AQUI = Path(__file__).resolve().parent
RAIZ = AQUI.parent
W, H, FPS = 1080, 1350, 30
FONDO, TINTA, TINTA2, TENUE = (244, 243, 240), (11, 11, 11), (82, 81, 78), (119, 117, 111)
BLANCO, BORDE, AZUL, NARANJA = (252, 252, 251), (222, 220, 214), (42, 120, 214), (235, 104, 52)
NARANJA_T = (196, 81, 31)                       # naranja oscuro para texto (contraste)
RAMPA = [(109, 167, 236), (57, 135, 229), (37, 106, 191), (24, 79, 149)]
F = "C:/Windows/Fonts/"
fuente = lambda n, t: ImageFont.truetype(F + n, t)
REG, NEG, SEMI = "segoeui.ttf", "segoeuib.ttf", "seguisb.ttf"

txt = (RAIZ / "web/data/proceso.js").read_text(encoding="utf-8")
DATOS = json.loads(txt[txt.index("{"): txt.rindex("}") + 1])
FASES = DATOS["fases"]
DOCS = DATOS["documentos"]
n_modelos = {j: sum(d["juego"] == j and d["n"] > 0 for d in DOCS) for j in ("regular", "emergencia")}
dias = {j: sum(p["dias"] for p in DATOS["calendario"][j]) for j in ("regular", "emergencia")}
assert n_modelos == {"regular": 38, "emergencia": 23} and dias == {"regular": 42, "emergencia": 14}

suave = lambda u: (lambda v: v * v * (3 - 2 * v))(min(1, max(0, u)))


def envolver(d, texto, f, ancho):
    lineas, linea = [], ""
    for p in texto.split():
        prueba = (linea + " " + p).strip()
        if d.textlength(prueba, font=f) <= ancho:
            linea = prueba
        else:
            lineas.append(linea); linea = p
    return lineas + [linea]


def parrafo(d, xy, texto, f, color, ancho, interlinea):
    x, y = xy
    for l in envolver(d, texto, f, ancho):
        d.text((x, y), l, font=f, fill=color); y += interlinea
    return y


def lienzo():
    im = Image.new("RGB", (W, H), FONDO)
    d = ImageDraw.Draw(im)
    d.text((70, 52), "OBRAS POR IMPUESTOS · ACTUALIZADO 2026", font=fuente(SEMI, 24), fill=TENUE)
    return im, d


def subtitulo(im, texto):
    d = ImageDraw.Draw(im, "RGBA")
    f = fuente(SEMI, 40)
    lineas = envolver(d, texto, f, W - 180)
    alto = 58 * len(lineas) + 40
    y0 = H - 70 - alto
    d.rounded_rectangle((60, y0, W - 60, y0 + alto), 22, fill=(11, 11, 11, 225))
    for i, l in enumerate(lineas):
        d.text((W / 2, y0 + 20 + 58 * i + 29), l, font=f, fill=(255, 255, 255), anchor="mm")


def titulo(d, t, y=110, tam=60):
    for i, l in enumerate(envolver(d, t, fuente(NEG, tam), W - 140)):
        d.text((70, y + i * (tam + 10)), l, font=fuente(NEG, tam), fill=TINTA)


def tarjeta(d, caja, borde_color=None):
    d.rounded_rectangle(caja, 20, fill=BLANCO, outline=BORDE, width=2)
    if borde_color:
        d.rounded_rectangle((caja[0], caja[1], caja[0] + 10, caja[3]), 5, fill=borde_color)


# ---------------- Escenas ----------------
def esc_portada(u, t):
    im, d = lienzo()
    d.text((70, 250), "Obras por Impuestos", font=fuente(NEG, 92), fill=TINTA)
    d.text((70, 360), "en 4 fases", font=fuente(NEG, 92), fill=AZUL)
    for k in range(4):
        v = suave(u * 3 - k * 0.3)
        x = 70 + k * 240
        if v > 0:
            d.rounded_rectangle((x, 540, x + 220, 560), 10, fill=RAMPA[k])
            parrafo(d, (x, 580), FASES[k]["nombre"], fuente(SEMI, 30), TINTA, 220, 38)
    d.text((70, 720), "Actualizado con el Reglamento 2026", font=fuente(SEMI, 38), fill=TINTA2)
    d.text((70, 775), "y la ruta de emergencia por El Niño", font=fuente(SEMI, 38), fill=NARANJA_T)
    return im


def esc_que_es(u, t):
    im, d = lienzo()
    titulo(d, "¿Cómo funciona OxI?")
    pasos = [("Empresa", "financia y ejecuta la obra o el servicio"), ("Estado", "lo elige, lo supervisa y da conformidad"),
             ("MEF", "emite el certificado CIPRL o CIPGN"), ("Empresa", "lo usa para pagar sus impuestos")]
    for i, (a, b) in enumerate(pasos):
        if suave(u * 5 - i * 0.8) <= 0:
            continue
        y = 250 + i * 160
        tarjeta(d, (70, y, W - 70, y + 135))
        d.ellipse((100, y + 37, 160, y + 97), fill=AZUL)
        d.text((130, y + 67), str(i + 1), font=fuente(NEG, 32), fill=(255, 255, 255), anchor="mm")
        d.text((190, y + 22), a, font=fuente(NEG, 38), fill=TINTA)
        d.text((190, y + 74), b, font=fuente(REG, 32), fill=TINTA2)
    return im


def esc_fase(i):
    f = FASES[i]
    def dibujar(u, t):
        im, d = lienzo()
        for k in range(4):
            d.rounded_rectangle((70 + k * 240, 110, 70 + k * 240 + 225, 128), 9, fill=RAMPA[k] if k <= i else BORDE)
        d.text((70, 155), f"FASE {i + 1} DE 4", font=fuente(SEMI, 30), fill=AZUL if i < 2 else RAMPA[i])
        d.text((70, 195), f["nombre"], font=fuente(NEG, 76), fill=TINTA)
        d.text((70, 295), f["pregunta"], font=fuente(REG, 40), fill=TINTA2)
        f32 = fuente(SEMI, 32)
        alto_txt = lambda hs: sum(42 * len(envolver(d, "• " + h, f32, W - 230)) + 6 for h in hs)
        y0 = 370
        for k, (hs, color, etq, col_t) in enumerate([(f["hitos_regular"], AZUL, "RUTA REGULAR", AZUL),
                                                     (f["hitos_emergencia"], NARANJA, "EMERGENCIA EL NIÑO 2026", NARANJA_T)]):
            if k == 1 and suave(u * 2.2 - 0.9) <= 0:
                break
            y1 = y0 + 70 + alto_txt(hs) + 14
            tarjeta(d, (70, y0, W - 70, y1), color)
            d.text((110, y0 + 20), etq, font=fuente(SEMI, 24), fill=col_t)
            y = y0 + 60
            for h in hs:
                y = parrafo(d, (110, y), "• " + h, f32, TINTA, W - 230, 42) + 6
            y0 = y1 + 25
        return im
    return dibujar


def esc_comparacion(u, t):
    im, d = lienzo()
    titulo(d, "¿Cuánto toma elegir a la empresa?")
    izq, der = 70, W - 170
    x = lambda v: izq + v / dias["regular"] * (der - izq)
    for k, (j, color, etq) in enumerate([("regular", AZUL, "Ruta regular"), ("emergencia", NARANJA, "Emergencia El Niño 2026")]):
        y = 330 + k * 250
        d.text((izq, y), etq, font=fuente(SEMI, 38), fill=TINTA)
        avance = suave(u * 1.5 - k * 0.15) * dias[j]
        ini = 0
        for p in DATOS["calendario"][j]:
            fin = ini + p["dias"]
            vis = min(fin, max(ini, avance))
            if vis - ini > 0.3:
                d.rounded_rectangle((x(ini) + (2 if ini else 0), y + 60, x(vis) - 2, y + 140), 8, fill=color)
            ini = fin
        d.text((x(avance) + 16, y + 100), f"{round(avance)}", font=fuente(NEG, 56), fill=TINTA, anchor="lm")
    d.text((70, 860), "días hábiles, hasta presentar los requisitos del convenio", font=fuente(REG, 32), fill=TINTA2)
    return im


def esc_cronograma(u, t):
    """Cronograma paso a paso de la selección: ruta regular (RD 005-2024) y de emergencia (D.U. 010-2026)."""
    im, d = lienzo()
    titulo(d, "Cronograma de la selección", tam=56)
    izq, der = 420, W - 120
    x = lambda v: izq + v / dias["regular"] * (der - izq)
    y = 205
    for v in range(0, dias["regular"] + 1, 7):                   # rejilla de días
        d.line((x(v), y + 40, x(v), y + 760), fill=(233, 231, 226), width=2)
        d.text((x(v), y + 770), str(v), font=fuente(REG, 22), fill=TENUE, anchor="mt")
    d.text(((izq + der) / 2, y + 805), "días hábiles (plazos máximos)", font=fuente(REG, 22), fill=TENUE, anchor="mt")
    avance = suave(u * 1.6) * dias["regular"]
    for j, color, etq, col_t in [("regular", AZUL, "RUTA REGULAR", AZUL), ("emergencia", NARANJA, "EMERGENCIA EL NIÑO 2026", NARANJA_T)]:
        d.text((70, y + 6), etq, font=fuente(SEMI, 24), fill=col_t)
        y += 46
        ini = 0
        for p_ in DATOS["calendario"][j]:
            fin = ini + p_["dias"]
            d.text((izq - 14, y + 19), p_["paso"], font=fuente(REG, 24), fill=TINTA2, anchor="rm")
            vis = min(fin, max(ini, avance))
            if vis - ini > 0.2:
                d.rounded_rectangle((x(ini), y + 4, max(x(ini) + 6, x(vis)), y + 34), 6, fill=color)
            if avance >= fin:
                d.text((x(fin) + 8, y + 19), f"día {fin}", font=fuente(SEMI, 22), fill=TINTA, anchor="lm")
            ini = fin
            y += 46
        y += 24
    return im


def esc_normas(u, t):
    im, d = lienzo()
    titulo(d, "¿Qué cambió?")
    for k, n in enumerate(DATOS["novedades"]):
        if suave(u * 4 - k * 0.7) <= 0:
            continue
        y = 230 + k * 235
        tarjeta(d, (70, y, W - 70, y + 210), NARANJA if k == 2 else AZUL)
        d.text((110, y + 22), n["fecha"], font=fuente(SEMI, 28), fill=NARANJA_T if k == 2 else AZUL)
        d.text((330, y + 18), n["norma"], font=fuente(NEG, 36), fill=TINTA)
        parrafo(d, (110, y + 75), n["texto"].split(":")[0].split(";")[0] + ".", fuente(REG, 30), TINTA2, W - 230, 40)
    return im


def esc_cambios(u, t):
    im, d = lienzo()
    titulo(d, "Lo nuevo del Reglamento 2026")
    for k, c in enumerate(DATOS["cambios"][:4]):
        if suave(u * 5 - k * 0.8) <= 0:
            continue
        y = 230 + k * 170
        tarjeta(d, (70, y, W - 70, y + 150), AZUL)
        d.text((110, y + 18), c["t"], font=fuente(NEG, 36), fill=TINTA)
        parrafo(d, (110, y + 68), c["d"], fuente(REG, 27), TINTA2, W - 230, 36)
    return im


def esc_captura(archivo, tit, recorte=1.0):
    img = Image.open(RAIZ / "capturas" / archivo).convert("RGB")
    img = img.crop((0, 0, round(img.width * recorte), img.height))
    def dibujar(u, t):
        im, d = lienzo()
        titulo(d, tit)
        ancho = W - 140
        esc = img.resize((ancho, round(img.height * ancho / img.width)), Image.LANCZOS)
        alto_vis = 760
        desplaz = int(max(0, esc.height - alto_vis) * suave(u))
        rec = esc.crop((0, desplaz, ancho, desplaz + min(alto_vis, esc.height)))
        d.rounded_rectangle((66, 226, 74 + ancho, 234 + rec.height), 14, outline=BORDE, width=3)
        im.paste(rec, (70, 230))
        return im
    return dibujar


def esc_cierre(u, t):
    im, d = lienzo()
    titulo(d, "Descarga los 61 modelos del MEF", y=250, tam=68)
    d.text((70, 430), "Tablero interactivo: enlace en el post", font=fuente(SEMI, 40), fill=AZUL)
    for k, l in enumerate(["• El proceso en 4 fases, ruta regular y de emergencia",
                           "• Qué cambió en 2026", "• 38 + 23 modelos en Word y Excel"]):
        d.text((70, 530 + k * 62), l, font=fuente(REG, 36), fill=TINTA2)
    d.text((70, 800), "Eliana Camacho Cárdenas", font=fuente(NEG, 36), fill=TINTA)
    d.text((70, 850), "Python intermedio · QLAB PUCP", font=fuente(REG, 30), fill=TINTA2)
    return im


SUB_FASES = [
    "Fase 1: la entidad decide qué obra o servicio hará y asegura los recursos.",
    "Fase 2: se preparan las bases y los informes. En emergencia no se pide el informe previo de la Contraloría.",
    "Fase 3: se elige a la empresa. En emergencia, por invitación y contratación directa.",
    "Fase 4: se firma el convenio, se ejecuta, se da conformidad y el MEF devuelve la inversión.",
]
ESCENAS = [
    (4.5, "El proceso de Obras por Impuestos, simplificado en 4 fases y actualizado a 2026.", esc_portada),
    (6.0, "Una empresa adelanta la obra o el servicio y recupera lo invertido al pagar sus impuestos.", esc_que_es),
]
ESCENAS += [(5.5, SUB_FASES[i], esc_fase(i)) for i in range(4)]
ESCENAS += [
    (6.5, "En 2026 hay nuevo Reglamento y una ruta de emergencia por El Niño, con 23 modelos nuevos.", esc_normas),
    (6.5, "OxI ya no es solo obras: también financia servicios, planes territoriales y viviendas rurales.", esc_cambios),
    (7.5, f"Elegir a la empresa toma hasta {dias['regular']} días hábiles en la ruta regular y {dias['emergencia']} en la de emergencia, que usa invitación directa.", esc_cronograma),
    (6.0, "En el tablero interactivo eliges la ruta y la fase, y ves los documentos de cada una.", esc_captura("04_proceso_regular.png", "Un tablero interactivo")),
    (5.5, "Con un clic cambias a la ruta de emergencia por El Niño 2026.", esc_captura("06_proceso_emergencia.png", "Ruta de emergencia 2026")),
    (5.5, "El catálogo reúne los 61 modelos, con filtros y enlace de descarga.", esc_captura("09_catalogo.png", "Catálogo con descargas", 0.62)),
    (5.0, "El enlace al tablero y las descargas están en la publicación.", esc_cierre),
]


def srt_tiempo(s):
    ms = round(s * 1000)
    return f"{ms // 3600000:02d}:{ms // 60000 % 60:02d}:{ms // 1000 % 60:02d},{ms % 1000:03d}"


ff = shutil.which("ffmpeg")
salida = AQUI / "video_oxi_documentos.mp4"
proc = subprocess.Popen([ff, "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                         "-r", str(FPS), "-i", "-", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20",
                         "-movflags", "+faststart", "-an", str(salida)], stdin=subprocess.PIPE)
srt, t0, FUNDIDO = [], 0.0, 0.35
for k, (dur, sub, dibujar) in enumerate(ESCENAS):
    srt.append(f"{k + 1}\n{srt_tiempo(t0)} --> {srt_tiempo(t0 + dur - 0.05)}\n{sub}\n")
    n = round(dur * FPS)
    for f in range(n):
        t = f / FPS
        im = dibujar(t / dur, t)
        subtitulo(im, sub)
        a = min(1, t / FUNDIDO, (dur - t) / FUNDIDO)
        if a < 1:
            im = Image.blend(Image.new("RGB", (W, H), FONDO), im, max(0, a))
        if k == 0 and f == round(n * 0.8):
            im.save(AQUI / "portada.png")
        proc.stdin.write(im.tobytes())
    t0 += dur
proc.stdin.close(); proc.wait()
(AQUI / "subtitulos.srt").write_text("\n".join(srt), encoding="utf-8")
print(f"Video: {salida.name} · {t0:.1f} s · {len(ESCENAS)} escenas · sin audio")
