# 🌐 Domain + Kontaktformular — Schritt-für-Schritt

---

## SCHRITT 1 — Kontaktformular aktivieren (5 Minuten)

Das Formular ist bereits in die Webseite eingebaut. Sie brauchen nur einen
kostenlosen Zugangscode von Web3Forms.

### So bekommen Sie Ihren Zugangscode:

1. Gehen Sie auf **web3forms.com**
2. Geben Sie **info@forbachandpartners.com** ein
3. Klicken Sie "Get your Access Key"
4. Öffnen Sie Ihre E-Mail → Sie bekommen einen Code wie:
   `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

### So bauen Sie ihn ein:

1. Öffnen Sie auf GitHub: **`index.html`** → Stift ✏️
2. Suchen (Strg+F) nach: `IHRE_WEB3FORMS_ACCESS_KEY_HIER`
3. Ersetzen mit Ihrem echten Code
4. Commit changes

Das gleiche wiederholen für **`ueber-uns.html`**, **`kontakt.html`** und **`common.js`**.

**Fertig — ab jetzt landen alle Anfragen in info@forbachandpartners.com**

---

## SCHRITT 2 — Domain verbinden (All-Inkl)

### 2a. In GitHub: Custom Domain eintragen

1. Gehen Sie zu **github.com/Saschaforbach/REPO-NAME/settings/pages**
2. Unter "Custom domain": `forbachandpartners.com` eingeben
3. "Save" klicken
4. "Enforce HTTPS" aktivieren (erscheint nach ~24h)

### 2b. In All-Inkl: DNS-Einträge setzen

1. Einloggen auf **all-inkl.com** → KAS (Kunden-Administrations-System)
2. Klicken Sie auf Ihre Domain `forbachandpartners.com`
3. Gehen Sie zu **DNS-Verwaltung** oder **DNS-Einträge**
4. Löschen Sie bestehende A-Einträge für `@` (falls vorhanden)
5. Fügen Sie folgende Einträge hinzu:

```
TYP    NAME    WERT                  TTL
A      @       185.199.108.153       3600
A      @       185.199.109.153       3600
A      @       185.199.110.153       3600
A      @       185.199.111.153       3600
CNAME  www     saschaforbach.github.io   3600
```

> ⚠️ Bei `saschaforbach.github.io` bitte Ihren echten GitHub-Benutzernamen
> verwenden (klein geschrieben).

### 2c. Warten & prüfen

- DNS-Änderungen brauchen **2–24 Stunden**
- Danach ist `https://forbachandpartners.com` Ihre offizielle Adresse
- GitHub Pages aktiviert automatisch ein kostenloses SSL-Zertifikat (HTTPS)

---

## SCHRITT 3 — CNAME-Datei (einmalig, wichtig!)

Damit GitHub Pages Ihre Domain behält, müssen Sie eine Datei namens `CNAME`
(ohne Endung) in Ihr Repository hochladen:

**Inhalt der Datei** (nur diese eine Zeile):
```
forbachandpartners.com
```

→ Datei erstellen: GitHub → "Add file" → "Create new file"
→ Dateiname: `CNAME`
→ Inhalt: `forbachandpartners.com`
→ Commit

---

## ZUSAMMENFASSUNG — Was danach funktioniert:

| Was | Wie |
|-----|-----|
| Website live | https://forbachandpartners.com |
| Kontaktformular | Anfragen → info@forbachandpartners.com |
| HTTPS / SSL | Automatisch kostenlos |
| Blog-Artikel editieren | GitHub → blog-posts.js → ✏️ |

---

*Erstellt Mai 2026 · Bei Fragen: Diese Datei liegt in Ihrem Projektordner*
