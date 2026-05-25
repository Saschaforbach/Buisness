# Forbach & Partners — Website fertig zum Hochladen

**Fokus:** CNC-Fräszentren · Predictive Maintenance  
**Domain (vorbereitet):** forbachandpartners.com

---

## So geht’s (3 Schritte)

### 1. Auf GitHub hochladen

1. Öffnen Sie **github.com** und loggen Sie sich ein.
2. **Neues Repository** erstellen (Name z. B. `forbachandpartners-website`, **Public**).
3. Auf der leeren Repo-Seite: **„uploading an existing file“**.
4. **Alle Dateien aus diesem Ordner** markieren und per Drag & Drop ins Fenster ziehen — **nicht** den Ordner selbst, sondern den Inhalt (alle `.html`, `.js`, `.pdf`, `CNAME`).
5. Unten **Commit changes** klicken.

### 2. Website live schalten

1. Im Repository: **Settings** → links **Pages**.
2. **Branch:** `main` · **Ordner:** `/ (root)` → **Save**.
3. Nach 1–2 Minuten ist die Seite unter  
   `https://IHR-GITHUB-NAME.github.io/REPO-NAME/` erreichbar.

### 3. Kontaktformular aktivieren (einmalig)

1. Gehen Sie auf **web3forms.com** → E-Mail **info@forbachandpartners.com** → Access Key anfordern.
2. Auf GitHub diese 4 Dateien bearbeiten (Stift ✏️), suchen nach  
   `IHRE_WEB3FORMS_ACCESS_KEY_HIER` und durch Ihren echten Key ersetzen:
   - `index.html`
   - `kontakt.html`
   - `ueber-uns.html`
   - `common.js`
3. **Commit changes** — fertig. Anfragen landen in Ihrer E-Mail.

Ausführlich: **DOMAIN-UND-FORMULAR-ANLEITUNG.md** in diesem Ordner.

---

## Eigene Domain (optional)

Die Datei **CNAME** enthält bereits `forbachandpartners.com`.

1. GitHub **Settings → Pages** → Custom domain eintragen → Save.
2. Bei **All-Inkl** die DNS-Einträge setzen (steht in DOMAIN-UND-FORMULAR-ANLEITUNG.md).
3. Nach 2–24 h: **Enforce HTTPS** aktivieren.

---

## Was in diesem Ordner liegt

| Datei | Zweck |
|-------|--------|
| `index.html` | Startseite (CNC) |
| `cnc-fraeszentren.html` | Detail: Spindel, Achsen, Werkzeugwechsler |
| `ueber-uns.html` | Team & Geschichte |
| `kontakt.html` | Kontakt & Formular |
| `blog.html` + `blog-posts.js` | Blog (Artikel nur in `blog-posts.js` bearbeiten) |
| `impressum.html` / `datenschutz.html` | Rechtliches |
| `common.js` | Termin-Modal auf allen Seiten |
| `onepager-forbach-partners.pdf` | Download One-Pager |
| `images/` | Fotos (Gründer + CNC) — siehe `images/BILDER-ANLEITUNG.md` |
| `CNAME` | Domain für GitHub Pages |

---

## Blog-Artikel hinzufügen

1. GitHub → `blog-posts.js` → ✏️ bearbeiten.
2. Vorlage oben in der Datei kopieren → unter `const POSTS = [` einfügen.
3. Texte ausfüllen → Commit. Live in ca. 1 Minute.

---

## Checkliste vor dem Go-Live

- [ ] Alle Dateien aus diesem Ordner im GitHub-Repo (Root-Ebene)
- [ ] GitHub Pages aktiviert (Branch `main`)
- [ ] Web3Forms-Key in 4 Dateien eingetragen
- [ ] Impressum & Datenschutz geprüft (Adresse, USt-ID falls nötig)
- [ ] Optional: Domain + DNS + HTTPS

---

## Lokal testen (optional)

Doppelklick auf `index.html` im Finder — Layout prüfen.  
Formular und Domain funktionieren erst online über GitHub Pages.

---

*Mai 2026 · CNC-spezialisiert · Forbach & Partners*
