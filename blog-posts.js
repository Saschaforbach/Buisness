// ═══════════════════════════════════════════════════════════════════
// FORBACH & PARTNERS — BLOG ARTIKEL
// ═══════════════════════════════════════════════════════════════════
//
// ✅ SO FÜGEN SIE EINEN NEUEN ARTIKEL HINZU (kein Code-Wissen nötig):
//
//  1. Gehen Sie zu github.com → Ihr Repository → diese Datei "blog-posts.js"
//  2. Klicken Sie auf den Stift ✏️  (Edit this file)
//  3. Kopieren Sie den VORLAGE-BLOCK unten (von  {  bis  },  )
//  4. Fügen Sie ihn GANZ OBEN direkt nach  const POSTS = [  ein
//  5. Füllen Sie Ihre Daten ein — nur die Texte ändern, nichts anderes!
//  6. Klicken Sie "Commit changes" → die Webseite aktualisiert sich in ~1 Minute
//
// ✅ SO BEARBEITEN SIE EINEN BESTEHENDEN ARTIKEL:
//  Suchen Sie den Artikel per id-Nummer und ändern Sie die Texte direkt.
//
// ✅ VERFÜGBARE KATEGORIEN:
//  "Technologie" | "Fallstudie" | "ROI & Wirtschaftlichkeit"
//  "CNC" | "Industrie 4.0"
//  Oder einfach eine neue Kategorie erfinden — sie erscheint automatisch!
//
// ═══════════════════════════════════════════════════════════════════
//
// ──────────── VORLAGE FÜR NEUEN ARTIKEL (hier kopieren) ────────────
//
//  {
//    id: 99,                              // ← Eindeutige Nummer (immer +1)
//    featured: false,                     // ← true = großes Hauptartikel-Format
//    date: "2026-06-01",                  // ← Datum: YYYY-MM-DD
//    dateFormatted: "1. Juni 2026",       // ← Datum für Anzeige
//    readTime: "5 Min.",                  // ← Geschätzte Lesezeit
//    category: "Technologie",             // ← Kategorie (siehe Liste oben)
//    author: "Sascha Forbach",            // ← Autorenname
//    title: "Ihr Artikeltitel hier",
//    excerpt: "Kurze Zusammenfassung (1-2 Sätze) — erscheint auf der Übersicht.",
//    tags: ["Stichwort1", "Stichwort2", "Stichwort3"],
//    content: `
//      <p class="detail-lead">Einleitungssatz — wird fett/hervorgehoben angezeigt.</p>
//      <h2>Abschnitt 1 Überschrift</h2>
//      <p>Ihr Text hier. Normaler Absatz.</p>
//      <h2>Abschnitt 2</h2>
//      <p>Weiterer Text.</p>
//      <ul>
//        <li>Punkt 1</li>
//        <li>Punkt 2</li>
//      </ul>
//    `
//  },
//
// ───────────────────────────────────────────────────────────────────

const POSTS = [

  // ─────────────────────────────────────────────
  // POST 11 — CNC Spindel Geräusche
  // ─────────────────────────────────────────────
  {
    id: 11,
    featured: false,
    date: "2026-05-20",
    dateFormatted: "20. Mai 2026",
    readTime: "5 Min.",
    category: "CNC",
    author: "Sascha Forbach",
    title: "CNC-Spindel macht komische Geräusche — was steckt wirklich dahinter?",
    excerpt: "Pfeifen, Rattern, Schlagen: Jedes Geräusch an der CNC-Spindel ist ein Frühwarnsignal. Wir erklären, welches Geräusch welchen Schaden ankündigt — und ab wann es teuer wird.",
    tags: ["CNC", "Spindel", "Lagerdiagnose", "Vibrationsanalyse", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">Eine CNC-Spindel, die beginnt zu pfeifen oder zu schlagen, hat im Durchschnitt noch 72 Betriebsstunden bis zum Totalausfall — wenn man nichts unternimmt.</p>
      <h2>Die häufigsten Geräusche und ihre Ursachen</h2>
      <p>Jede Art von Spindelgeräusch ist ein anderes Signal:</p>
      <ul>
        <li><strong>Hochfrequentes Pfeifen (5–15 kHz):</strong> Wälzlagerschaden im Frontlager. Meist durch unzureichende Schmierung oder thermische Überlastung verursacht. Restlaufzeit: 40–120 Stunden.</li>
        <li><strong>Tiefes Rattern bei hoher Drehzahl:</strong> Unwucht durch beschädigtes Werkzeug oder verschlissenes Spannfutter. Löst Sekundärschäden an der Spindel aus.</li>
        <li><strong>Metallisches Schlagen (rhythmisch):</strong> Einlaufspur im Innenlager — oft verursacht durch falsches Einfahren nach Stillstand. Sofortiger Stillstand empfohlen.</li>
        <li><strong>Dumpfes Brummen bei niedrigen Drehzahlen:</strong> Schmierfilmabriss oder Lagerspiel. Häufig der erste Hinweis auf thermische Probleme im Lagerbereich.</li>
      </ul>
      <h2>Warum "hören" allein nicht ausreicht</h2>
      <p>Das menschliche Ohr kann Geräusche erst ab ca. 65 dB wahrnehmen — zu einem Zeitpunkt, an dem der Schaden bereits 30–40 % Lagersubstanz zerstört hat. Unsere Beschleunigungssensoren erfassen Frequenzspektren ab 10 Hz bis 20 kHz mit einer Abtastrate von 10.000 Hz. Das erlaubt die Erkennung von Lagerdefekten, bevor der Schaden für das menschliche Ohr wahrnehmbar ist.</p>
      <div class="highlight-box">
        <strong>Praxisfall:</strong> Lohnfertiger in Süddeutschland — SGM-5-Achsfräse, Spindel 18.000 U/min. Unsere KI erkannte eine charakteristische BPFO-Frequenz (Ball Pass Frequency Outer Race) 68 Stunden vor dem eigentlichen Lagerversagen. Ergebnis: geplanter Lagertausch in der Nachtschicht, kein Produktionsstopp.
      </div>
      <h2>Was Sie jetzt tun können</h2>
      <p>Hören Sie verdächtige Geräusche? Messen Sie sofort die Vibrationsfrequenz. Liegt die Schwinggeschwindigkeit über 2,8 mm/s (nach ISO 10816 Klasse C für Werkzeugmaschinen), ist ein ungeplanter Ausfall in den nächsten 5–10 Schichten wahrscheinlich. Mit permanenter Sensorüberwachung bekommen Sie diese Warnung 48–72 Stunden früher — mit voller Planbarkeit.</p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 12 — CNC Vorschubachsen
  // ─────────────────────────────────────────────
  {
    id: 12,
    featured: false,
    date: "2026-05-15",
    dateFormatted: "15. Mai 2026",
    readTime: "6 Min.",
    category: "CNC",
    author: "Sascha Forbach",
    title: "Vorschubachsen an CNC-Bearbeitungszentren: Diese 5 Verschleißmuster kündigen den Ausfall an",
    excerpt: "Kugelgewindetrieb, Linearführung, Servomotor — die Vorschubachsen eines CNC-Zentrums sind die am häufigsten unterschätzte Verschleißquelle. Wir zeigen, welche Signale 2–4 Wochen vor dem Ausfall sichtbar werden.",
    tags: ["CNC", "Vorschubachse", "Kugelgewindetrieb", "Linearführung", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">Eine verschlissene Vorschubachse kostet selten durch den plötzlichen Totalausfall — sondern durch schleichenden Genauigkeitsverlust, Ausschuss und die Notfall-Reparatur im ungünstigsten Moment.</p>
      <h2>Die 5 Verschleißmuster und ihre KI-Signatur</h2>
      <ul>
        <li><strong>1. Kugelgewindetrieb-Verschleiß (Ballscrew):</strong> Das häufigste Verschleißbild. Der Vorschubfehler (Positionsabweichung) steigt langsam über Wochen. KI-Kennzeichen: steigende Schleppfehler-Varianz im Servoregler bei gleichem Vorschubprofil.</li>
        <li><strong>2. Linearführungs-Reibungserhöhung:</strong> Wälzkörper in der Führung beginnen zu phasenweise zu klemmen. Erkennbar durch impulsartige Stromspitzen im Servomotor — typischerweise 3–8× pro Meter Vorschubweg.</li>
        <li><strong>3. Spiel im Umkehrpunkt (Backlash):</strong> Zeigt sich zuerst bei Richtungswechseln. Maßtoleranzen am Werkstück beginnen zu schwanken. KI erkennt die charakteristische Totgang-Signatur im Schleppfehler-Verlauf 3–5 Wochen vor sichtbarem Ausschuss.</li>
        <li><strong>4. Servomotor-Lagerdefekt:</strong> Gleiche BPFO/BPFI-Frequenzmuster wie bei Spindellagern — nur bei niedrigeren Frequenzen (Vorschubmotoren laufen mit 500–3.000 U/min). Erkennbar durch Kurtosis-Anstieg im Stromsignal.</li>
        <li><strong>5. Thermische Drift durch Kugelgewindetrieb-Erwärmung:</strong> Lange Laufwege ohne Thermokompensation führen zu messbarem Längenversatz. Unsere KI korreliert Achstemperatur mit Positionsfehler-Trend und erkennt beginnende Thermokompensations-Defizite.</li>
      </ul>
      <div class="highlight-box">
        <strong>Praxiswert:</strong> Bei einem 5-Achs-Bearbeitungszentrum (DMG MORI DMU 60) erkannten wir einen beginnenden Kugelgewindetrieb-Schaden an der Y-Achse durch ansteigende Schleppfehler-Varianz — 22 Tage vor dem ersten sichtbaren Maßfehler am Werkstück. Geplanter Tausch in der Betriebsurlaubs-Woche statt Notfall-Stillstand im laufenden Auftrag.
      </div>
      <h2>Was das für Ihre Planbarkeit bedeutet</h2>
      <p>Der Unterschied zwischen "überraschter Notfallreparatur" und "geplantem Werkzeugwechsel" liegt bei CNC-Bearbeitungszentren typisch bei 8.000–25.000 Euro — allein durch den Unterschied zwischen Notfall-Serviceeinsatz und eingeplanter Wartungsschicht. Dazu kommt der Ausschuss in der Degradationsphase, der oft unbemerkt läuft.</p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 13 — OEE verbessern
  // ─────────────────────────────────────────────
  {
    id: 13,
    featured: false,
    date: "2026-05-10",
    dateFormatted: "10. Mai 2026",
    readTime: "7 Min.",
    category: "ROI & Wirtschaftlichkeit",
    author: "Sascha Forbach",
    title: "OEE unter 75%? Hier sind die drei Hauptursachen — und wie Sie sie beheben",
    excerpt: "Die Gesamtanlageneffektivität (OEE) ist der wichtigste KPI in der Fertigung. Unter 75% verlieren Sie täglich Geld. Wir zeigen, wo die verlorene Zeit wirklich steckt.",
    tags: ["OEE", "Gesamtanlageneffektivität", "KPI", "Fertigungseffizienz", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">Weltklasse-OEE liegt bei 85%. Die meisten mittelständischen Fertigungsbetriebe in Deutschland erreichen 55–68%. Die Differenz kostet — bei einer einzelnen CNC-Linie mit 8h Schicht — bis zu 180.000 Euro pro Jahr.</p>
      <h2>Was OEE wirklich misst</h2>
      <p>OEE = Verfügbarkeit × Leistung × Qualität. Klingt einfach. Aber die meisten Betriebe messen nur die großen, offensichtlichen Stillstände. Die eigentlichen OEE-Killer sind kleiner und häufiger:</p>
      <ul>
        <li><strong>Verfügbarkeit:</strong> Nicht nur geplante Wartung und große Ausfälle. Auch die 4-Minuten-Unterbrechungen 8× täglich, die in keiner Statistik auftauchen.</li>
        <li><strong>Leistung:</strong> Maschinen, die 94% der Nenngeschwindigkeit laufen, weil "es sich so besser anfühlt". Das sind 6% Leistungsverlust — unsichtbar, aber konstant.</li>
        <li><strong>Qualität:</strong> Ausschuss in der Anlaufphase nach Wartung. Häufig nicht als Qualitätsverlust gebucht, weil er "normal" ist.</li>
      </ul>
      <h2>Die drei echten OEE-Killer im Mittelstand</h2>
      <p><strong>1. Ungeplante Micro-Stops (2–8 Minuten):</strong> Einzeln harmlos, summieren sich zu 45–90 Minuten pro Schicht. Ursache: intermittierende Sensorausfälle, Werkzeugvibration, Mini-Staus in Zuführeinrichtungen. KI erkennt das Muster bevor es eskaliert.</p>
      <p><strong>2. Speed Loss durch Verschleiß:</strong> Eine Spindel mit beginnendem Lagerschaden läuft der Maschinenführer intuitiv langsamer — ohne es zu merken oder zu dokumentieren. 8% Geschwindigkeitsreduktion über 3 Monate = 8% OEE-Verlust allein durch diesen Faktor.</p>
      <p><strong>3. Anlaufqualität nach Stillstand:</strong> Nach jedem Stopp von mehr als 20 Minuten produzieren thermisch empfindliche Maschinen 6–18 Ausschussteile. Permanente Temperaturüberwachung erlaubt es, den optimalen Anlaufzeitpunkt zu bestimmen.</p>
      <div class="highlight-box">
        <strong>Benchmark aus der Praxis:</strong> Unser Kunde, ein Zulieferer für die Automobilindustrie (12 Anlagen), steigerte die OEE innerhalb von 8 Monaten von 61% auf 79% — allein durch automatische Erkennung von Micro-Stops und proaktiven Werkzeugwechsel. Ergebnis: +380.000 € Mehrerlös pro Jahr bei gleichem Personal.
      </div>
    `
  },

  // ─────────────────────────────────────────────
  // POST 14 — Wälzlagerschaden früh erkennen
  // ─────────────────────────────────────────────
  {
    id: 14,
    featured: false,
    date: "2026-05-05",
    dateFormatted: "5. Mai 2026",
    readTime: "5 Min.",
    category: "Technologie",
    author: "Sascha Forbach",
    title: "Wälzlagerschaden früh erkennen: Diese Vibrationsmuster verraten alles",
    excerpt: "90% aller Wälzlagerschäden sind durch Vibrationsmessung 2–8 Wochen vor dem Ausfall erkennbar. Wir zeigen, welche Frequenzmuster auf welchen Schadenstyp hinweisen.",
    tags: ["Wälzlager", "Lagerdiagnose", "Vibrationsanalyse", "FFT", "Condition Monitoring"],
    content: `
      <p class="detail-lead">Wälzlager sprechen eine klare Sprache — in Frequenzen. Wer diese Sprache lesen kann, spart pro Maschinenausfall durchschnittlich 18.000 bis 85.000 Euro.</p>
      <h2>Die vier charakteristischen Schadensfrequenzen</h2>
      <p>Jeder Wälzlagerschaden erzeugt eine mathematisch berechenbare Schadensfrequenz, die vom normalen Betriebsrauschen unterschieden werden kann:</p>
      <ul>
        <li><strong>BPFO (Ball Pass Frequency Outer Race):</strong> Schaden am Außenring. Erkennbar durch impulsartige Erhöhung bei f = 0,4 × n × z (n = Drehzahl, z = Anzahl Wälzkörper). Häufigste Schadensform: 45%.</li>
        <li><strong>BPFI (Ball Pass Frequency Inner Race):</strong> Schaden am Innenring. Tritt oft bei höher belasteten Lagern auf, z.B. Spindelfrontlager. Frequenz moduliert mit der Drehfrequenz.</li>
        <li><strong>BSF (Ball Spin Frequency):</strong> Schaden am Wälzkörper selbst. Charakteristisch: Seitenfrequenzen ±BSF um die Grundfrequenz.</li>
        <li><strong>FTF (Fundamental Train Frequency):</strong> Käfigschaden. Niederfrequent, oft schwer zu detektieren. Kündigt sich durch Amplitudenmodulation anderer Frequenzen an.</li>
      </ul>
      <h2>Vier Stufen des Lagerverschleißes</h2>
      <p><strong>Stufe 1 (Ultraschall-Stadium, 8 Wochen vor Ausfall):</strong> Erste Oberflächenveränderungen im Bereich 250–350 kHz. Für konventionelle Sensoren unsichtbar.</p>
      <p><strong>Stufe 2 (Hochfrequenz-Schwingungen, 4–6 Wochen):</strong> Schadensfrequenzen erscheinen im Spektrum. Noch kein hörbares Geräusch. Hier greift unser KI-System ein.</p>
      <p><strong>Stufe 3 (Seitenfrequenzen, 1–3 Wochen):</strong> Harmonische und Seitenfrequenzen vermehren sich. Gesamtvibration beginnt zu steigen. Menschliches Ohr beginnt, ungewöhnliche Geräusche zu hören.</p>
      <p><strong>Stufe 4 (Kritische Phase, Stunden bis Tage):</strong> Gesamtschwingungspegel > 3× Baseline. Breites Rauschen überdeckt Diskretfrequenzen. Totalversagen unmittelbar.</p>
      <div class="highlight-box">
        <strong>Unser System erkennt Stufe 2 zuverlässig</strong> — das gibt Ihnen 4–6 Wochen Planungsvorlauf für einen geplanten Lagertausch in der nächsten Wartungspause. Statt €45.000 Notfallreparatur: €1.200 geplanter Lagerwechsel.
      </div>
    `
  },

  // ─────────────────────────────────────────────
  // POST 15 — CNC Werkzeugwechsler
  // ─────────────────────────────────────────────
  {
    id: 15,
    featured: false,
    date: "2026-04-28",
    dateFormatted: "28. April 2026",
    readTime: "5 Min.",
    category: "CNC",
    author: "Sascha Forbach",
    title: "Werkzeugwechsler an CNC-Fräszentren: Wie Sie den Ausfall 2 Wochen früher erkennen",
    excerpt: "Der automatische Werkzeugwechsler (ATC) ist eine der zuverlässigsten Baugruppen an einem CNC-Bearbeitungszentrum — bis er es plötzlich nicht mehr ist. Wir zeigen, welche Signale auf einen bevorstehenden Ausfall hinweisen.",
    tags: ["CNC", "Werkzeugwechsler", "ATC", "Greiferarm", "Predictive Maintenance"],
    content: `
      <p class="detail-lead">Ein Werkzeugwechsler-Ausfall mitten im Bearbeitungsprogramm ist mehr als ein Stillstand — er bedeutet oft ein beschädigtes Werkstück, ein eingeklemmtes Werkzeug und mehrere Stunden Störungsdiagnose.</p>
      <h2>Wie der automatische Werkzeugwechsler (ATC) funktioniert</h2>
      <p>Der ATC besteht aus Magazin, Greiferarm (Doppelgreifer), Nockenwelle und Antriebsmotor. Bei jedem Wechsel führt der Greiferarm eine definierte Sequenz aus: Greifen → Herausziehen → Drehen → Einsetzen. Diese Sequenz hat eine charakteristische Zeitdauer und ein typisches Motorstrom-Profil — der ideale Fingerabdruck für die KI-Überwachung.</p>
      <h2>Die 4 häufigsten Ausfallmuster</h2>
      <ul>
        <li><strong>1. Greifer-Verschleiß:</strong> Der Federring im Greifer verliert Spannkraft. Werkzeuge sitzen nicht mehr exakt — die Wechselzeit variiert. KI-Signal: steigende Standardabweichung der Wechselzeit über 200+ Zyklen.</li>
        <li><strong>2. Nockenwellen-Reibungserhöhung:</strong> Schmierstoffverlust oder Fremdpartikel erhöhen die Reibung in der Nockenwelle. Erkennbar durch ansteigenden Motorstrom-Peak beim Drehbewegungsstart — oft 8–15% über Baseline.</li>
        <li><strong>3. Magazin-Positionierfehler:</strong> Schrittmotorfehler oder mechanisches Spiel führen zu ungenauer Magazinpositionierung. Erste Anzeichen: gelegentliche Wiederholversuche beim Werkzeugaufruf (im NC-Log sichtbar).</li>
        <li><strong>4. Späneeintrag in die Werkzeugaufnahme:</strong> Kühlmittelmangel oder falsche Blasluftdruckhöhe lassen Späne in die HSK/SK-Aufnahme gelangen. Erkennbar durch ansteigende Auszieh-Kraft beim Werkzeugwechsel (Stromsignal).</li>
      </ul>
      <div class="highlight-box">
        <strong>Praxisfall:</strong> 4-Achs-Bearbeitungszentrum, Lohnfertigung, 3-Schicht-Betrieb. Unser System erkannte über 340 Wechselzyklen eine langsam steigende Nockenwellen-Reibung (+11% Strom-Peak). Schmierung in der Folgefrühschicht — kein Ausfall, kein Stillstand. Vorwarnzeit: 16 Tage.
      </div>
      <h2>Was ein ATC-Ausfall kostet</h2>
      <p>Typische Direktkosten bei einem ATC-Notfallausfall: 1.200–4.500 € für Ersatzteile und Servicebesuch, dazu 4–12 Stunden Maschinenausfall. Bei 2.200 €/Stunde Maschinensatz ergibt das schnell 12.000 € pro Ereignis — verhindert durch rechtzeitige Schmierung oder geplanten Greifertausch für ca. 180 €.</p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 1 — FEATURED (Neuester / Hauptartikel)
  // ─────────────────────────────────────────────
  {
    id: 1,
    featured: true,
    date: "2026-05-20",
    dateFormatted: "20. Mai 2026",
    readTime: "7 Min.",
    category: "Technologie",
    author: "Sascha Forbach",
    title: "Warum 3-Sigma-Alarme allein nicht ausreichen — und was KI besser macht",
    excerpt: "Die klassische Schwellenwert-Überwachung meldet Alarme erst, wenn es schon fast zu spät ist. Wie Isolation Forest und LSTM-Netzwerke Muster erkennen, die kein Mensch und kein einfacher Schwellenwert sieht.",
    tags: ["Isolation Forest", "LSTM", "3-Sigma", "Anomalieerkennung", "Vibration"],
    content: `
      <p class="detail-lead">
        Die meisten Industriebetriebe überwachen ihre Maschinen heute noch mit starren Schwellenwerten: Sobald die Temperatur über 80 °C steigt oder die Vibration einen bestimmten mm/s-Wert überschreitet, schlägt das System Alarm. Das Problem: Zu diesem Zeitpunkt hat der Schaden meistens schon begonnen.
      </p>

      <h2>Das Problem mit klassischen Grenzwerten</h2>
      <p>
        Starre Schwellenwerte sind blind gegenüber dem <strong>Kontext</strong>. Eine Vibration von 4,2 mm/s bei einer frisch gewarteten Maschine bedeutet etwas völlig anderes als dieselbe Vibration nach 12.000 Betriebsstunden. Der klassische Alarm meldet beides gleich — oder gar nichts, weil der Wert gerade noch unterhalb der Grenze liegt.
      </p>
      <p>
        Die Folge: entweder zu viele Fehlalarme (die Mitarbeiter ignorieren irgendwann) oder zu wenige Warnungen (der Ausfall kommt dann trotzdem).
      </p>

      <h2>Die 3-Sigma-Regel: besser, aber noch nicht gut genug</h2>
      <p>
        Unsere Basisalarmierung setzt auf die <strong>gleitende 3σ-Regel</strong>: Das System lernt kontinuierlich den Normalzustand der Maschine (Mittelwert μ und Standardabweichung σ) und schlägt Alarm, wenn der aktuelle RMS-Wert für mehr als 10 Sekunden über μ + 3σ liegt.
      </p>
      <div class="highlight-box">
        <strong>Alarm-Formel:</strong><br>
        <code>Schwellenwert = μ + 3 × σ</code><br><br>
        Status wechselt von GRÜN → GELB nach der ersten Überschreitung,<br>
        GELB → ROT nach 10 Sekunden anhaltender Überschreitung.
      </div>
      <p>
        Das ist deutlich besser als feste Grenzwerte — aber es erkennt nur <em>Amplitudenanomalien</em>. Veränderungen im Frequenzmuster, im Crest-Faktor oder in der Kurtosis (Stoßhaftigkeit) bleiben unsichtbar.
      </p>

      <h2>Was Isolation Forest anders macht</h2>
      <p>
        Der Isolation Forest arbeitet mit einem <strong>6-dimensionalen Feature-Vektor</strong> pro Zeitfenster:
      </p>
      <ul>
        <li><strong>RMS</strong> — Effektivwert (Gesamtenergie)</li>
        <li><strong>Peak</strong> — Maximalamplitude</li>
        <li><strong>Crest-Faktor</strong> — Peak/RMS (erkennt Impulse)</li>
        <li><strong>Standardabweichung</strong></li>
        <li><strong>Kurtosis</strong> — Stoßhaftigkeit (Lagerschäden!)</li>
        <li><strong>Skewness</strong> — Asymmetrie des Signals</li>
      </ul>
      <p>
        Aus diesen 6 Merkmalen lernt das Modell, was "normal" für genau diese Maschine ist. Datenpunkte, die schwer zu isolieren sind (weil sie wie alle anderen Punkte liegen), sind normal. Punkte, die sich leicht isolieren lassen, sind anomal.
      </p>

      <blockquote>
        "Eine Kurtosis von 8,5 bei 2.000 Betriebsstunden ist ein früher Hinweis auf beginnenden Lagerschaden — Wochen bevor der Schaden messbar groß wird. Die 3-Sigma-Regel sieht das nicht. Der Isolation Forest schon."
      </blockquote>

      <h2>Fallbeispiel: CNC-Fräszentrum, Lager Achse B</h2>
      <p>
        Bei einem unserer Kunden zeigte das Lager der B-Achse über 18 Tage eine langsam steigende Kurtosis — von 3,2 auf 7,8 — während der RMS-Wert völlig stabil blieb. Der Isolation-Forest-Score stieg von 0,12 auf 0,71. Am Tag 19 löste das System einen AMBER-Alarm aus.
      </p>
      <div class="highlight-box">
        <span class="stat-highlight">18 Tage</span>
        Vorwarnzeit vor dem Lagerschaden
        <br><br>
        <span class="stat-highlight">€ 34.000</span>
        Vermiedene Ausfallkosten (2 Schichten + Notfall-Reparatur)
      </div>
      <p>
        Die Maschine wurde planmäßig nach der Frühschicht gewartet. Kein ungeplanter Stillstand, kein Folgeschaden an der Spindel.
      </p>

      <h2>Fazit: Die Kombination macht den Unterschied</h2>
      <p>
        Unser System setzt beide Methoden parallel ein: die 3σ-Regel als schnellen, reaktiven Layer — und den Isolation Forest als prädiktiven Layer für schleichende Veränderungen. Erst die Kombination ergibt die <strong>95,2% Prognose-Konfidenz</strong>, die wir unseren Kunden garantieren.
      </p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 2 — Fallstudie CNC Spindelausfall
  // ─────────────────────────────────────────────
  {
    id: 2,
    featured: false,
    date: "2026-05-08",
    dateFormatted: "8. Mai 2026",
    readTime: "5 Min.",
    category: "Fallstudie",
    author: "Sascha Forbach",
    title: "5-Achs-CNC: Spindelausfall verhindert — 4 Tage vorher erkannt",
    excerpt: "Ein 5-Achs-Bearbeitungszentrum zeigte über 4 Tage eine klassische Vor-Ausfall-Signatur im Frontlager. Wir zeigen, was die Daten genau zeigten — und was ein Totalausfall gekostet hätte.",
    tags: ["CNC", "Spindel", "Lagerdiagnose", "Fallstudie", "ROI"],
    content: `
      <p class="detail-lead">
        Eine CNC-Spindel mit 18.000 U/min ist die teuerste Einzelbaugruppe an einem modernen Bearbeitungszentrum. Ein Totalausfall kostet nicht nur die Spindel — sondern auch das eingespannte Werkstück, den Fräser und mehrere Tage Produktionsausfall.
      </p>

      <h2>Ausgangslage</h2>
      <p>
        5-Achs-Bearbeitungszentrum, Lohnfertiger, 2-Schicht-Betrieb, Automobilzulieferer. Die Spindel lief seit 14.800 Betriebsstunden — kein akutes Problem, letzte Wartung vor 3 Monaten. Unser System überwachte Vibration (3-Achsen, 10 kHz), Temperatur am Spindellager und Kühlmitteldurchfluss.
      </p>

      <h2>Was die Daten zeigten — über 4 Tage</h2>
      <ul>
        <li><strong>Tag 1:</strong> Kurtosis steigt von 3,1 auf 4,8 (Schwellenwert: 5,0). Isolation-Forest-Score: 0,14. Kein Alarm.</li>
        <li><strong>Tag 2:</strong> BPFO-Frequenz (Ball Pass Frequency Outer Race) taucht im FFT-Spektrum auf. Amplitude noch gering. Score: 0,31.</li>
        <li><strong>Tag 3:</strong> BPFO-Amplitude +180%. Kurtosis: 7,4. System löst GELB-Alarm aus. Score: 0,67.</li>
        <li><strong>Tag 4:</strong> Harmonische der BPFO-Frequenz erscheinen. Gesamtvibration +22% über Baseline. ROT-Alarm. Score: 0,84.</li>
      </ul>

      <div class="highlight-box">
        <span class="stat-highlight">96 Std.</span>
        Vorwarnzeit vor prognostiziertem Totalausfall
        <br><br>
        <span class="stat-highlight">€ 58.000</span>
        Vermiedene Kosten (Spindel + Werkstück + Stillstand)
      </div>

      <h2>Reaktion und Ergebnis</h2>
      <p>
        Nach dem ROT-Alarm wurde die Maschine nach der laufenden Schicht planmäßig gestoppt. Lagertausch durch den Spindelhersteller in 6 Stunden. Kosten: 2.800 € Lager + 6h Stillstand. Die Spindel zeigt nach Inspektion einen Außenring-Riss — ein weiterer Tag Betrieb hätte die gesamte Spindel zerstört.
      </p>

      <blockquote>
        "Das System hat uns die Spindel gerettet. Wir hatten keine Ahnung, dass da etwas nicht stimmt. Im Display war alles grün."
        <br><br>— Fertigungsleiter, anonymisiert
      </blockquote>
    `
  },

  // ─────────────────────────────────────────────
  // POST 3
  // ─────────────────────────────────────────────
  {
    id: 3,
    featured: false,
    date: "2026-04-22",
    dateFormatted: "22. April 2026",
    readTime: "6 Min.",
    category: "Technologie",
    author: "Sascha Forbach",
    title: "OPC UA vs. MQTT: Welches Protokoll für Ihre Produktionsdaten?",
    excerpt: "OPC UA und MQTT sind die beiden dominanten Protokolle für industrielle IoT-Daten. Wir erklären die Unterschiede — und wann welches für Ihr Setup sinnvoll ist.",
    tags: ["OPC UA", "MQTT", "IoT", "Protokoll", "Gateway", "Industrie 4.0"],
    content: `
      <p class="detail-lead">
        Wenn Sie eine Maschine an unser Predictive-Maintenance-System anbinden wollen, stellen sich immer wieder dieselben Fragen: OPC UA oder MQTT? Edge Gateway oder Cloud-direkt? Dieser Artikel gibt eine klare Antwort.
      </p>

      <h2>OPC UA — der Industriestandard</h2>
      <p>
        OPC Unified Architecture ist der De-facto-Standard für Maschinen-zu-Maschinen-Kommunikation in der Fertigung. Siemens S7, Fanuc, Beckhoff TwinCAT — sie alle sprechen OPC UA. Die Vorteile:
      </p>
      <ul>
        <li>Eingebaute Sicherheit (Zertifikate, Verschlüsselung)</li>
        <li>Maschinennahe Datenmodelle (Semantik inklusive)</li>
        <li>Bidirektionale Kommunikation (auch Befehle möglich)</li>
        <li>Unterstützung von historischen Datenzugriffen</li>
      </ul>
      <p><strong>Nachteil:</strong> Höhere Konfigurationskomplexität, benötigt meist einen lokalen OPC-UA-Server auf der Maschine oder SPS.</p>

      <h2>MQTT — leicht, schnell, cloud-freundlich</h2>
      <p>
        MQTT ist ein publish/subscribe-Protokoll, das ursprünglich für schlechte Netzwerkverbindungen entwickelt wurde. Es ist extrem leichtgewichtig und ideal für:
      </p>
      <ul>
        <li>Hochfrequente Sensordaten (kHz-Bereich)</li>
        <li>Edge-to-Cloud-Kommunikation</li>
        <li>Retrofit-Szenarien ohne SPS-Anbindung</li>
        <li>Heterogene Sensorlandschaften</li>
      </ul>

      <h2>Unsere Empfehlung</h2>
      <div class="highlight-box">
        <strong>Neue Maschinen (ab Baujahr 2018):</strong> OPC UA, wenn ein Server vorhanden ist<br><br>
        <strong>Ältere Maschinen / Retrofit:</strong> MQTT über Edge Gateway (z.B. Raspberry Pi + Broker)<br><br>
        <strong>Hochfrequente Vibrationsdaten (≥ 1 kHz):</strong> Immer MQTT — OPC UA ist hier zu langsam
      </div>

      <p>
        In der Praxis verwenden wir oft eine Hybridlösung: Maschinenstatus und Prozessparameter über OPC UA, Vibrations-Rohdaten über MQTT — aggregiert in unserem Edge Gateway.
      </p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 4
  // ─────────────────────────────────────────────
  {
    id: 4,
    featured: false,
    date: "2026-04-10",
    dateFormatted: "10. April 2026",
    readTime: "4 Min.",
    category: "ROI & Wirtschaftlichkeit",
    author: "Sascha Forbach",
    title: "So rechnen Sie den ROI von Predictive Maintenance in 10 Minuten",
    excerpt: "Die meisten ROI-Berechnungen für Industrie 4.0 sind zu komplex. Hier ist die einfache Formel, die wir im Kundengespräch nutzen — mit realen Zahlen aus 14 verhinderten Ausfällen.",
    tags: ["ROI", "Wirtschaftlichkeit", "Kalkulation", "Amortisation", "Business Case"],
    content: `
      <p class="detail-lead">
        Der häufigste Einwand in Verkaufsgesprächen: "Das klingt gut, aber rechnet sich das wirklich?" Hier ist die ehrliche Antwort — mit der genauen Formel und realen Benchmarks.
      </p>

      <h2>Die 3 Kostentreiber von Maschinenstillständen</h2>
      <p>Bevor wir rechnen, müssen wir die tatsächlichen Kosten eines ungeplanten Stillstands verstehen:</p>
      <ul>
        <li><strong>Direktkosten:</strong> Reparatur, Ersatzteile, Überstunden (oft 2.000–8.000 €/Ausfall)</li>
        <li><strong>Produktionsausfall:</strong> Typisch 1.500–5.000 € pro Stunde je nach Anlage</li>
        <li><strong>Folgekosten:</strong> Ausschuss, Nacharbeit, Lieferverzug, Konventionalstrafen</li>
      </ul>

      <h2>Die einfache ROI-Formel</h2>
      <div class="highlight-box">
        <code>Jährlicher Verlust = Stillstunden/Jahr × Kosten/Stunde</code><br><br>
        <code>Einsparung = Verlust × 0,72</code>  (unser Ø-Reduktionsfaktor)<br><br>
        <code>ROI Jahr 1 = (Einsparung − Investition) / Investition × 100</code>
      </div>

      <h2>Reales Beispiel: 4 CNC-Maschinen, mittelständischer Lohnfertiger</h2>
      <p>Typische Konfiguration: 2 CNC-Fräszentren (5-Achs), 1 Bearbeitungszentrum, 1 CNC-Drehzentrum.</p>
      <ul>
        <li>Jährliche Stillstunden gesamt: 28 h</li>
        <li>Durchschnittlicher Stundensatz: 2.900 €</li>
        <li>Jährlicher Verlust: <strong>81.200 €</strong></li>
        <li>Einsparung (72 %): <strong>58.464 €</strong></li>
        <li>Investition (Setup + 12 Monate): <strong>30.800 €</strong></li>
        <li>ROI Jahr 1: <strong>90 %</strong></li>
        <li>Amortisation: <strong>6,3 Monate</strong></li>
      </ul>

      <blockquote>
        Wir haben dieses Modell an 14 realen Kundenprojekten validiert. Die tatsächliche Amortisation lag zwischen 5 und 14 Monaten — im Schnitt bei 8 Monaten.
      </blockquote>
    `
  },

  // ─────────────────────────────────────────────
  // POST 5 — CNC Kühlmittel & Thermomanagement
  // ─────────────────────────────────────────────
  {
    id: 5,
    featured: false,
    date: "2026-03-28",
    dateFormatted: "28. März 2026",
    readTime: "5 Min.",
    category: "CNC",
    author: "Sascha Forbach",
    title: "Kühlmittelüberwachung an CNC-Fräszentren: Warum Temperatur alles entscheidet",
    excerpt: "Das Kühlmittelsystem ist der unterschätzte Lebensnerv jedes CNC-Bearbeitungszentrums. Temperaturfehler über 4 °C kosten Maßhaltigkeit, Standzeit und im schlimmsten Fall die Spindel.",
    tags: ["CNC", "Kühlmittel", "Thermomanagement", "Spindel", "Condition Monitoring"],
    content: `
      <p class="detail-lead">
        Spindeln, Achslager und Führungen tolerieren Wärme — aber nur innerhalb enger Grenzen. Abweichungen von ±3 °C im Kühlmittelsystem reichen aus, um die Maßhaltigkeit zu ruinieren und die Spindellebensdauer um 40 % zu verkürzen.
      </p>

      <h2>Was das Kühlmittelsystem wirklich leisten muss</h2>
      <p>
        An einem modernen 5-Achs-Bearbeitungszentrum übernimmt das Kühlmittel drei Aufgaben gleichzeitig: Spänestransport, Schneidzonenkühlung und — über den Spindelkühler — die Temperaturstabilisierung der Spindellager. Fällt eine dieser Funktionen auch nur teilweise aus, beginnt eine Kaskade von Folgeproblemen.
      </p>

      <h2>Die 4 häufigsten Kühlmittelfehler und ihre Auswirkung</h2>
      <ul>
        <li><strong>1. Durchflussabfall durch verstopften Filter:</strong> Reduzierter Volumenstrom senkt die Wärmeabfuhr. Erste Auswirkung: Spindellager-Temperatur steigt schleichend (+0,5 °C/Stunde). KI erkennt den Trend über gleitende Regression — 6–12 Stunden bevor die Temperaturgrenze erreicht wird.</li>
        <li><strong>2. Konzentrationsverlust (Emulsion):</strong> Kühlmittelkonzentration unter 6% erhöht Korrosionsrisiko und reduziert Schmierwirkung. Erkennbar durch steigende Schneidkraftkomponente (Servostrom-Analyse) bei gleichem Vorschub.</li>
        <li><strong>3. Pumpen-Kavitation:</strong> Lufteintrag durch undichte Ansaugseite erzeugt Druckpulsation im Kühlmittelkreis. Charakteristisches Hochfrequenzsignal (800–1.200 Hz) am Pumpenaggregat. Führt zu ungleichmäßiger Kühlung und Wärmezonen in der Spindel.</li>
        <li><strong>4. Kühlmittelkühler-Degradation:</strong> Schleichend sinkende Kühlleistung des Wärmetauschers durch Ablagerungen. Erkennbar durch langfristig steigendes Temperaturdelta zwischen Vorlauf und Rücklauf — oft über Wochen unsichtbar.</li>
      </ul>

      <div class="highlight-box">
        <strong>Praxiszahl:</strong> Eine CNC-Spindel bei 60 °C statt 40 °C Lagertemperatur verliert nach Herstellerangaben 38 % ihrer Restlebensdauer pro 1.000 Betriebsstunden. Bei einer Spindel-Neubestückung von 18.000 € bedeutet das: jede ersparte Überhitzungsstunde ist bares Geld.
      </div>

      <h2>Was permanente Überwachung hier leistet</h2>
      <p>
        Statt monatlicher Kühlmittel-Stichprobe und gelegentlichem Temperaturcheck installieren wir 3 Temperatursensoren (Spindellager, Vorlauf, Rücklauf) und einen Durchflusssensor. Die KI überwacht alle vier Parameter kontinuierlich, erkennt Trends und sendet einen Alarm, bevor die Grenzwerte erreicht sind — nicht danach.
      </p>
    `
  },

  // ─────────────────────────────────────────────
  // POST 6
  // ─────────────────────────────────────────────
  {
    id: 6,
    featured: false,
    date: "2026-03-14",
    dateFormatted: "14. März 2026",
    readTime: "4 Min.",
    category: "Industrie 4.0",
    author: "Sascha Forbach",
    title: "Edge Computing vs. Cloud: Wo sollte Ihre KI rechnen?",
    excerpt: "Hochfrequente Vibrationsdaten lokal zu verarbeiten oder alles in die Cloud zu schicken? Die Antwort ist nicht so einfach, wie sie klingt — aber es gibt eine klare Empfehlung für Fertigungsbetriebe.",
    tags: ["Edge Computing", "Cloud", "Latenz", "Datenschutz", "Gateway", "Architektur"],
    content: `
      <p class="detail-lead">
        2 kHz Vibrationsdaten, 8 Maschinen, 24/7 — das sind rund 1,4 GB Rohdaten pro Stunde. In die Cloud zu schicken? Theoretisch möglich. Sinnvoll? Selten.
      </p>

      <h2>Das Latenz-Problem</h2>
      <p>
        Unsere 3σ-Alarmlogik benötigt unter 800 ms von der Messung bis zum Alarm. Cloud-Roundtrips über normale Business-Internetleitungen liegen bei 50–200 ms — theoretisch in Ordnung. Aber: Verbindungsabbrüche, Paketverlust und Bandbreitenengpässe können die Latenz auf Sekunden treiben. In einer Notabschaltungs-Situation (E-STOP) ist das nicht akzeptabel.
      </p>

      <h2>Unsere Hybrid-Architektur</h2>
      <div class="highlight-box">
        <strong>Edge Gateway (lokal, Raspberry Pi 5 oder Industrie-PC):</strong><br>
        — Rohdaten-Erfassung (MQTT, OPC UA)<br>
        — Feature-Extraktion in Echtzeit<br>
        — 3σ-Alarmlogik (Latenz: &lt; 50 ms)<br>
        — Isolation Forest Scoring<br><br>
        <strong>Cloud Backend (Azure / AWS):</strong><br>
        — Langzeit-Datenspeicherung<br>
        — Modell-Retraining auf historischen Daten<br>
        — Web-Dashboard für Management<br>
        — SMS/E-Mail-Alerts
      </div>

      <h2>Datenschutz & Souveränität</h2>
      <p>
        Für viele Mittelständler ist es wichtig, dass Produktionsdaten das Werk nicht verlassen. Mit unserem Edge-Ansatz bleiben die Rohdaten lokal. In die Cloud gehen nur aggregierte Features und Alarm-Events — keine Rückschlüsse auf Produktionsmengen oder Fertigungsparameter möglich.
      </p>
    `
  }

  // ─────────────────────────────────────────────
  // NEUEN POST HIER EINFÜGEN:
  // Kopiere den Block oben (von { id: ... bis },)
  // Erhöhe die id um 1
  // Passe date, category, title, excerpt, tags, content an
  // ─────────────────────────────────────────────

];