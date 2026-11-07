"""Extrae el texto de los 39 documentos y calcula métricas simples por documento."""
import re
from pathlib import Path
import pandas as pd
import docx, pypdf, openpyxl

BASE = Path(__file__).resolve().parents[1]
DOCS, TXT = BASE / "documentos", BASE / "datos" / "textos"
TXT.mkdir(exist_ok=True)

def texto_docx(ruta):
    d = docx.Document(ruta)
    partes = [p.text for p in d.paragraphs]
    for t in d.tables:
        for f in t.rows:
            partes.append(" | ".join(c.text for c in f.cells))
    return "\n".join(partes)

def texto_doc(ruta):                      # Word 97-2003: se abre con Word instalado
    import win32com.client
    w = win32com.client.Dispatch("Word.Application"); w.Visible = False
    try:
        d = w.Documents.Open(str(ruta.resolve()), ReadOnly=True)
        t = d.Content.Text; d.Close(False); return t.replace("\r", "\n")
    finally:
        w.Quit()

def texto_pdf(ruta):
    return "\n".join(p.extract_text() or "" for p in pypdf.PdfReader(ruta).pages)

def texto_xlsx(ruta):
    wb = openpyxl.load_workbook(ruta, data_only=True)
    return "\n".join(" | ".join(str(c) for c in fila if c is not None)
                     for h in wb for fila in h.iter_rows(values_only=True) if any(fila))

LECTOR = {".docx": texto_docx, ".doc": texto_doc, ".pdf": texto_pdf, ".xlsx": texto_xlsx}
cat = pd.read_csv(BASE / "datos" / "catalogo.csv")
filas = []
for f in cat.itertuples():
    ruta = DOCS / f.archivo
    t = LECTOR[ruta.suffix](ruta)
    (TXT / f"{f.n:02d}.txt").write_text(t, encoding="utf-8")
    filas.append({"n": f.n,
                  "palabras": len(re.findall(r"\w+", t)),
                  "campos_por_llenar": len(re.findall(r"\[[^\]]{1,80}\]|…{2,}|\.{5,}|_{4,}", t)),
                  "kb": round(ruta.stat().st_size / 1024)})
m = pd.DataFrame(filas)
m.to_csv(BASE / "datos" / "metricas.csv", index=False)
print(m.describe().round(0)); print("Total palabras:", m.palabras.sum())
