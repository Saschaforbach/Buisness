#!/usr/bin/env python3
"""
Forbach & Partners — Google Fonts Downloader
=========================================
Dieses Skript lädt alle Website-Fonts lokal herunter.
Ausführen mit: python3 download-fonts.py

Danach den gesamten Ordner (inkl. fonts/) auf GitHub hochladen.
"""

import re, os, urllib.request, sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
FONTS_DIR = os.path.join(SCRIPT_DIR, "fonts")
os.makedirs(FONTS_DIR, exist_ok=True)

FONT_URL = (
    "https://fonts.googleapis.com/css2?"
    "family=Raleway:wght@200;300;400;500;600;700;800"
    "&family=JetBrains+Mono:wght@300;400;500;600"
    "&family=Oswald:wght@300;400;500;600;700"
    "&display=swap"
)

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)

print("\n🔄 Forbach & Partners — Fonts werden heruntergeladen...\n")

# ── 1. Google Fonts CSS abrufen ──
try:
    req = urllib.request.Request(FONT_URL, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req, timeout=15).read().decode()
except Exception as e:
    print(f"❌ Fehler beim Abrufen der Font-CSS: {e}")
    sys.exit(1)

# ── 2. Alle font-face Blöcke parsen ──
blocks = re.findall(r"@font-face\s*\{[^}]+\}", css)
seen = {}
output_css = "/* Forbach & Partners — Lokal gehostete Fonts (kein Google-Server) */\n\n"

for block in blocks:
    fm = re.search(r"font-family:\s*'([^']+)'", block)
    wm = re.search(r"font-weight:\s*(\d+)", block)
    um = re.search(r"url\(([^)]+\.woff2)\)", block)
    if not (fm and wm and um):
        continue

    family  = fm.group(1)
    weight  = wm.group(2)
    src_url = um.group(1)
    key     = (family, weight)

    if key in seen:
        continue  # Nur einmal pro Familie+Gewicht (latin)

    safe    = family.lower().replace(" ", "-")
    fname   = f"{safe}-{weight}.woff2"
    seen[key] = fname

    print(f"  ↓ {fname}", end="  ", flush=True)
    try:
        r2   = urllib.request.Request(src_url, headers={"User-Agent": UA})
        data = urllib.request.urlopen(r2, timeout=15).read()
        with open(os.path.join(FONTS_DIR, fname), "wb") as f:
            f.write(data)
        print(f"✓  ({len(data)//1024} KB)")
    except Exception as e:
        print(f"❌  Fehler: {e}")
        continue

    # Lokalen @font-face Block bauen (ohne unicode-range)
    local_block = (
        f"@font-face {{\n"
        f"  font-family: '{family}';\n"
        f"  font-style: normal;\n"
        f"  font-weight: {weight};\n"
        f"  font-display: swap;\n"
        f"  src: url('fonts/{fname}') format('woff2');\n"
        f"}}\n"
    )
    output_css += local_block + "\n"

# ── 3. fonts.css schreiben ──
css_path = os.path.join(FONTS_DIR, "fonts.css")
with open(css_path, "w", encoding="utf-8") as f:
    f.write(output_css)

print(f"\n✅  {len(seen)} Font-Dateien heruntergeladen")
print(f"✅  fonts/fonts.css erstellt")
print(f"\n🚀  Fertig! Jetzt den gesamten Ordner auf GitHub hochladen")
print(f"    (inklusive des neuen 'fonts/' Ordners)\n")
