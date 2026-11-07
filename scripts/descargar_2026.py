"""Descarga la RD N° 004-2026-EF/68.01 y sus 23 anexos (documentos estandarizados OxI para El Niño 2026-2027, D.U. N° 010-2026).

Fuente: https://www.gob.pe/institucion/mef/normas-legales/8563340-004-2026-ef-68-01
Salida: documentos/2026/*.docx|pdf y datos/catalogo_2026.csv

gob.pe responde 418 al cliente de Python, así que primero se guarda la página con:
  curl -sL -o datos/gobpe_rd_004-2026.html <PAGINA>
Los archivos del CDN (cdn.www.gob.pe) sí se descargan con requests.
"""
import re, time
from pathlib import Path
import pandas as pd
import requests

BASE = Path(__file__).resolve().parents[1]
PAGINA = "https://www.gob.pe/institucion/mef/normas-legales/8563340-004-2026-ef-68-01"
DESTINO = BASE / "documentos" / "2026"
DESTINO.mkdir(parents=True, exist_ok=True)

html = (BASE / "datos" / "gobpe_rd_004-2026.html").read_text(encoding="utf-8")
urls = sorted(set(re.findall(r'https://cdn\.www\.gob\.pe/uploads/document/file/\d+/8563340-[^"?]+\.(?:pdf|docx)\?v=\d+', html)))
filas = []
for url in urls:
    nombre = url.split("/")[-1].split("?")[0].replace("8563340-", "")
    m = re.match(r"anexo-(\d+)-(.*)\.(docx|pdf)", nombre)
    n = int(m.group(1)) if m else 0
    archivo = f"2026_Anexo_{n:02d}.{nombre.rsplit('.', 1)[1]}" if n else "RD_004-2026-EF-68.01.pdf"
    ruta = DESTINO / archivo
    if not ruta.exists():
        r = requests.get(url, timeout=60); r.raise_for_status()
        if r.content[:2] not in (b"PK", b"%P"):
            raise ValueError(f"{archivo}: respuesta inesperada")
        ruta.write_bytes(r.content); time.sleep(0.3)
    filas.append(dict(n=n, archivo=f"2026/{archivo}", url=url))
cat = pd.DataFrame(filas).sort_values("n")
cat.to_csv(BASE / "datos" / "catalogo_2026.csv", index=False)
print("Archivos 2026:", len(cat))
