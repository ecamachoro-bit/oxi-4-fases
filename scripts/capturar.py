"""Captura secciones del tablero (web/index.html) para revisarlo, el README, LinkedIn y el video.

Requiere Selenium y Google Chrome. Uso: python scripts/capturar.py
"""
import time
from pathlib import Path
from selenium import webdriver

BASE = Path(__file__).resolve().parents[1]
CAP = BASE / "capturas"
CAP.mkdir(exist_ok=True)
for viejo in CAP.glob("*.png"):
    viejo.unlink()

o = webdriver.ChromeOptions()
for arg in ["--headless=new", "--window-size=1280,1000", "--hide-scrollbars", "--force-device-scale-factor=2"]:
    o.add_argument(arg)
d = webdriver.Chrome(options=o)
d.get((BASE / "web/index.html").as_uri())
time.sleep(1.5)
print("Errores de consola:", [l for l in d.get_log("browser") if l["level"] == "SEVERE"] or "ninguno")

def foto(selector, nombre, antes=None):
    if antes:
        d.execute_script(antes); time.sleep(0.4)
    el = d.find_element("css selector", selector)
    d.execute_script("arguments[0].scrollIntoView({block: 'start'})", el); time.sleep(0.4)
    el.screenshot(str(CAP / f"{nombre}.png")); print("captura", nombre)

foto(".portada", "01_portada")
foto(".kpis", "02_kpis")
foto("#fases", "03_fases_regular")
foto("#proceso", "04_proceso_regular")
foto("#fases", "05_fases_emergencia", "document.querySelector('[data-ruta=emergencia]').click()")
foto("#proceso", "06_proceso_emergencia", "document.querySelector('[data-fase=F3]').click()")
foto("#comparacion .tarjeta", "07_comparacion")
foto("#novedades", "08_novedades")
foto("#catalogo", "09_catalogo")
d.quit()
