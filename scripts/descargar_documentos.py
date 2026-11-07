"""Descarga la RD N° 005-2024-EF/68.01 y sus 38 anexos (documentos estandarizados de OxI).

La página del MEF tiene protección anti-bots, así que se usa la copia oficial que el
Ministerio de Vivienda (DGPPCS) publica en Google Drive:
https://sites.google.com/vivienda.gob.pe/mvcs-oxi/documentos-oxi-estandarizados
"""
import re, time, unicodedata
from pathlib import Path
import pandas as pd
import requests

BASE = Path(__file__).resolve().parents[1]
DESTINO = BASE / "documentos"
DESTINO.mkdir(exist_ok=True)

def nombre_archivo(fila):
    t = unicodedata.normalize("NFKD", fila.titulo).encode("ascii", "ignore").decode()
    t = re.sub(r"[^A-Za-z0-9]+", "_", t).strip("_").lower()[:80]
    pref = "RD_005-2024-EF-68.01" if fila.n == 0 else f"Anexo_{fila.n:02d}"
    return f"{pref}_{t}.{fila.tipo}" if fila.n else f"{pref}.{fila.tipo}"

def descargar(drive_id, ruta):
    url = f"https://drive.google.com/uc?export=download&id={drive_id}"
    r = requests.get(url, timeout=60)
    r.raise_for_status()
    if r.content[:4] == bytes.fromhex("d0cf11e0"):   # Word 97-2003 (.doc)
        ruta = ruta.with_suffix(".doc")
    elif r.content[:2] not in (b"PK", b"%P"):        # ni Office (zip) ni PDF
        raise ValueError(f"respuesta inesperada ({r.headers.get('content-type')})")
    ruta.write_bytes(r.content)
    return len(r.content)

cat = pd.read_csv(BASE / "datos" / "catalogo.csv")
cat["archivo"] = cat.apply(nombre_archivo, axis=1)
for fila in cat.itertuples():
    ruta = DESTINO / fila.archivo
    if ruta.exists() or ruta.with_suffix(".doc").exists():
        continue
    try:
        kb = descargar(fila.drive_id, ruta) / 1024
        print(f"OK  {fila.archivo} ({kb:.0f} KB)")
    except Exception as e:
        print(f"ERR {fila.archivo}: {e}")
    time.sleep(0.5)
cat["archivo"] = [a if (DESTINO / a).exists() else str(Path(a).with_suffix(".doc")) for a in cat.archivo]
cat.to_csv(BASE / "datos" / "catalogo.csv", index=False)
print("Archivos:", len(list(DESTINO.iterdir())))
