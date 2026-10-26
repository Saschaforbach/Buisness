/* Forbach & Partners – gemeinsames Skript aller Seiten */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var EN = document.documentElement.lang === 'en';
  var L = EN ? {
    preview: 'Preview: the form only sends on forbachandpartners.com.', sending: 'Sending …',
    calcMsg: function (m, l, v) { return 'Result from the downtime calculator: ' + m + ' machining centres, loss from unplanned spindle failures approx. ' + l + ' per year, avoidable by our estimate approx. ' + v + ' per year. We would like to discuss the result in an introductory call.'; },
    calcSubj: 'Request from the downtime calculator – Forbach & Partners (website)',
    itMsg: 'We would like to go through the IT security sheet with our IT manager.',
    itSubj: 'Request for a technical IT call – Forbach & Partners (website)',
    good: 'Normal', warn: 'Warning'
  } : {
    preview: 'Vorschau: Das Formular sendet nur auf forbachandpartners.com.', sending: 'Wird gesendet …',
    calcMsg: function (m, l, v) { return 'Ergebnis aus dem Stillstandsrechner: ' + m + ' Bearbeitungszentren, Verlust durch ungeplante Spindelschäden ca. ' + l + ' pro Jahr, nach unserer Schätzung vermeidbar ca. ' + v + ' pro Jahr. Wir möchten das Ergebnis im Erstgespräch durchgehen.'; },
    calcSubj: 'Anfrage aus dem Stillstandsrechner – Forbach & Partners (Website)',
    itMsg: 'Wir möchten das IT-Sicherheitsblatt mit unserem IT-Verantwortlichen durchgehen.',
    itSubj: 'Anfrage technisches IT-Gespräch – Forbach & Partners (Website)',
    good: 'Normal', warn: 'Warnung'
  };
  var money = function (v) {
    return new Intl.NumberFormat(EN ? 'en-GB' : 'de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.round(v));
  };

  /* Mobiles Menü */
  var mb = $('menu-btn'), nav = $('nav');
  if (mb && nav) {
    mb.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', open);
    });
  }

  /* Einwilligung: LinkedIn Insight Tag erst nach Zustimmung laden */
  var KEY = 'fp_cookie_consent', LI_PARTNER_ID = '10395825';
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function loadLinkedIn() {
    if (window._fpLiLoaded || location.hostname.indexOf('forbachandpartners.com') === -1) return;
    window._fpLiLoaded = true;
    window._linkedin_partner_id = LI_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(LI_PARTNER_ID);
    var s = document.createElement('script');
    s.async = true; s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(s);
  }
  var box = $('consent');
  function showConsent(show) { if (box) box.hidden = !show; }
  if (box) {
    $('consent-yes').addEventListener('click', function () { store('accepted'); showConsent(false); loadLinkedIn(); });
    $('consent-no').addEventListener('click', function () { store('declined'); showConsent(false); });
  }
  var cs = $('consent-settings');
  if (cs) cs.addEventListener('click', function () { showConsent(true); });
  var state = read();
  if (state === 'accepted') loadLinkedIn(); else if (state !== 'declined') showConsent(true);

  /* Kontaktformular: Versand nur auf der echten Domain */
  var form = $('contact');
  if (form) {
    var q = new URLSearchParams(location.search);
    if (q.get('rechner')) {
      var f = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
      var num = function (k) { var x = parseInt(q.get(k), 10); return isNaN(x) ? null : Math.max(0, x); };
      var mm = num('maschinen'), vl = num('verlust'), vm = num('vermeidbar');
      if (mm !== null && vl !== null && vm !== null) {
        $('k-msg').value = L.calcMsg(mm, money(vl), money(vm));
        $('k-subject').value = L.calcSubj;
      }
    }
    if (/[?&]thema=it\b/.test(location.search)) {
      $('k-msg').value = L.itMsg;
      $('k-subject').value = L.itSubj;
    }
    form.addEventListener('submit', function (e) {
      var out = $('k-out');
      if (location.hostname.indexOf('forbachandpartners.com') === -1) {
        e.preventDefault();
        out.textContent = L.preview;
        out.className = 'formmsg';
        return;
      }
      var btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      out.textContent = L.sending;
    });
  }

  /* Lagerschnitt (nur Startseite und Leistung) */
  var g = $('brg');
  if (g) {
    var ns = 'http://www.w3.org/2000/svg';
    var circle = function (r, a) {
      var el = document.createElementNS(ns, 'circle'); el.setAttribute('r', r);
      for (var k in a) el.setAttribute(k, a[k]); g.appendChild(el); return el;
    };
    circle(128, { fill: 'var(--rule-soft)', stroke: 'var(--ink-2)', 'stroke-width': 1.2 });
    circle(104, { fill: 'var(--paper)', stroke: 'var(--ink-2)', 'stroke-width': 1.2 });
    circle(70, { fill: 'var(--rule-soft)', stroke: 'var(--ink-2)', 'stroke-width': 1.2 });
    circle(46, { fill: 'var(--paper)', stroke: 'var(--ink-2)', 'stroke-width': 1.2 });
    for (var i = 0; i < 16; i++) {
      var a = i / 16 * Math.PI * 2;
      circle(13, { cx: (87 * Math.cos(a)).toFixed(1), cy: (87 * Math.sin(a)).toFixed(1),
        fill: i === 13 ? 'var(--gold)' : 'var(--ground)', stroke: 'var(--ink-2)', 'stroke-width': 1.1 });
    }
    var d = document.createElementNS(ns, 'path');
    d.setAttribute('d', 'M78 -98 l6 -7 l5 8 l6 -6'); d.setAttribute('stroke', 'var(--alarm)');
    d.setAttribute('stroke-width', 2); d.setAttribute('fill', 'none'); g.appendChild(d);
  }

  /* Hüllkurvenspektrum (simulierte Beispieldaten) */
  var cv = $('spec');
  if (cv) {
    var ctx = cv.getContext('2d');
    var FMAX = 2200, FR = 100, BPFO = 656, YMAX = 0.12, N = 440, mode = 'defect', noise = [];
    var css = function (n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); };
    for (var j = 0; j < N; j++) noise.push(Math.random());
    var peak = function (f, f0, amp, w) { return amp * Math.exp(-Math.pow((f - f0) / w, 2)); };
    var model = function (f, i) {
      var v = 0.006 + 0.004 * noise[i] + 0.010 * Math.exp(-f / 500);
      v += peak(f, FR, 0.020, 9) + peak(f, 2 * FR, 0.008, 9);
      if (mode === 'defect') v += peak(f, BPFO, 0.082, 10) + peak(f, 2 * BPFO, 0.048, 11) + peak(f, 3 * BPFO, 0.024, 12) + 0.004 * noise[(i * 7) % N];
      return v;
    };
    var draw = function () {
      var dpr = window.devicePixelRatio || 1, W = cv.clientWidth, H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var L = 44, R = 12, T = 14, B = 30, pw = W - L - R, ph = H - T - B;
      var ink = css('--ink'), ink3 = css('--ink-3'), grid = css('--plot-grid'), bg = css('--plot-bg'),
        brass = css('--brass'), alarm = css('--alarm'), ok = css('--ok');
      var X = function (f) { return L + f / FMAX * pw; };
      var Y = function (v) { return T + ph - (Math.min(v, YMAX) / YMAX) * ph; };
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      ctx.font = '11px "IBM Plex Mono", monospace'; ctx.textBaseline = 'middle';
      ctx.strokeStyle = grid; ctx.lineWidth = 1; ctx.fillStyle = ink3;
      [0, 0.04, 0.08, 0.12].forEach(function (v) {
        ctx.beginPath(); ctx.moveTo(L, Y(v) + .5); ctx.lineTo(L + pw, Y(v) + .5); ctx.stroke();
        ctx.textAlign = 'right'; ctx.fillText(v.toFixed(2), L - 8, Y(v));
      });
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      var step = W < 420 ? 1000 : 500;
      for (var f = 0; f <= FMAX; f += step) {
        ctx.beginPath(); ctx.moveTo(X(f) + .5, T); ctx.lineTo(X(f) + .5, T + ph); ctx.stroke();
        ctx.fillText(f === 0 ? '0 Hz' : String(f), X(f), T + ph + 8);
      }
      ctx.textAlign = 'left'; ctx.fillText('g', L + 6, T + 2);
      ctx.setLineDash([4, 4]); ctx.strokeStyle = ok; ctx.beginPath(); ctx.moveTo(L, Y(0.03)); ctx.lineTo(L + pw, Y(0.03)); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = ok; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom'; ctx.fillText(EN ? 'Threshold from baseline' : 'Schwelle aus Normallage', L + pw - 4, Y(0.03) - 4);
      ctx.strokeStyle = brass; ctx.fillStyle = brass; ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      for (var k = 1; k <= 3; k++) {
        var x = X(k * BPFO); ctx.globalAlpha = mode === 'defect' ? 1 : .45;
        ctx.beginPath(); ctx.moveTo(x + .5, T); ctx.lineTo(x + .5, T + 8); ctx.stroke(); ctx.fillText(k + '× BPFO', x, T + 11);
      }
      ctx.globalAlpha = 1;
      var pts = [];
      for (var i = 0; i < N; i++) { var fr = i / (N - 1) * FMAX; pts.push([X(fr), Y(model(fr, i))]); }
      ctx.beginPath(); ctx.moveTo(L, T + ph); pts.forEach(function (p) { ctx.lineTo(p[0], p[1]); }); ctx.lineTo(L + pw, T + ph); ctx.closePath();
      ctx.fillStyle = mode === 'defect' ? alarm : ink; ctx.globalAlpha = .08; ctx.fill(); ctx.globalAlpha = 1;
      ctx.beginPath(); pts.forEach(function (p, n) { if (n) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); });
      ctx.strokeStyle = ink; ctx.lineWidth = 1.3; ctx.stroke();
      $('kv').textContent = (EN ? model(BPFO, Math.round(BPFO / FMAX * (N - 1))).toFixed(3) : model(BPFO, Math.round(BPFO / FMAX * (N - 1))).toFixed(3).replace('.', ',')) + ' g';
    };
    var setMode = function (m) {
      mode = m;
      $('st-normal').setAttribute('aria-pressed', m === 'normal');
      $('st-defect').setAttribute('aria-pressed', m === 'defect');
      $('ev').innerHTML = m === 'defect' ? '<span class="state s-warn">' + L.warn + '</span>' : '<span class="state s-ok">' + L.good + '</span>';
      draw();
    };
    $('st-normal').addEventListener('click', function () { setMode('normal'); });
    $('st-defect').addEventListener('click', function () { setMode('defect'); });
    setMode('defect');
    window.addEventListener('resize', draw);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(function () {
        if (document.hidden) return;
        for (var i = 0; i < N; i++) noise[i] = noise[i] * .6 + Math.random() * .4;
        draw();
      }, 700);
    }
  }

  /* Stillstandsrechner */
  if ($('calc')) {
    var fmt = new Intl.NumberFormat(EN ? 'en-GB' : 'de-DE', { maximumFractionDigits: 0 });
    var eur = money;
    var WORKDAYS = 250;
    var calc = function () {
      var m = +$('c-m').value, h = +$('c-h').value, s = +$('c-s').value,
        n = +$('c-n').value, r = +$('c-r').value, v = +$('c-v').value;
      $('o-m').textContent = m; $('o-h').textContent = eur(h);
      $('o-s').textContent = fmt.format(s) + ' h'; $('o-n').textContent = n;
      $('o-r').textContent = eur(r); $('o-v').textContent = v + ' %';
      var a = m * s * h, b = n * r, loss = a + b, save = loss * v / 100;
      $('r-loss').textContent = eur(loss);
      $('r-month').textContent = eur(loss / 12);
      $('r-day').textContent = eur(loss / WORKDAYS);
      $('r-a').textContent = eur(a); $('r-b').textContent = eur(b);
      $('r-bar-a').style.width = (loss ? a / loss * 100 : 50) + '%';
      $('r-bar-b').style.width = (loss ? b / loss * 100 : 50) + '%';
      $('r-save').textContent = eur(save);
      $('r-cta').href = (EN ? 'contact.html' : 'kontakt.html') + '?rechner=1&maschinen=' + m + '&verlust=' + Math.round(loss) + '&vermeidbar=' + Math.round(save);
    };
    ['c-m', 'c-h', 'c-s', 'c-n', 'c-r', 'c-v'].forEach(function (id) { $(id).addEventListener('input', calc); });
    calc();
  }
})();
