/* ═══════════════════════════════════════════════
   common.js — Forbach & Partners
   Termin-Modal + Floating Widget für alle Seiten
   ═══════════════════════════════════════════════ */

/* ── TERMIN-MODAL ── */
(function(){
  const modalHTML = `
<div id="terminModal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:1rem;">
  <div style="background:#111;border:1px solid rgba(228,177,94,0.4);border-radius:20px;max-width:520px;width:100%;padding:2.5rem;position:relative;max-height:90vh;overflow-y:auto;">
    <button onclick="closeTerminModal()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:#a0a0a0;font-size:1.5rem;cursor:pointer;line-height:1;">✕</button>
    <div style="font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:#e4b15e;letter-spacing:4px;text-transform:uppercase;margin-bottom:0.75rem;">Kostenloses Erstgespräch</div>
    <h3 style="font-family:'Oswald',sans-serif;font-size:2rem;letter-spacing:1px;margin-bottom:0.5rem;color:#fff;">TERMIN<br><span style="background:linear-gradient(135deg,#e4b15e,#f8dfa5);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">VEREINBAREN</span></h3>
    <p style="font-size:0.82rem;color:#a0a0a0;margin-bottom:1.75rem;line-height:1.6;">In 20 Minuten sehen Sie ob und wie wir Ihre Anlage überwachen können. Wählen Sie Ihr bevorzugtes Meeting-Format:</p>

    <form id="terminForm" onsubmit="submitTermin(event)">
      <input type="hidden" name="access_key" value="7f37e43d-150e-4ecd-8b4d-b0a79a4bf330">
      <input type="hidden" name="subject" value="Neuer Terminwunsch — Forbach & Partners">
      <input type="hidden" name="from_name" value="Forbach & Partners Website">
      <input type="hidden" name="redirect" value="false">

      <!-- Plattform-Auswahl -->
      <div style="margin-bottom:1.25rem;">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;margin-bottom:0.75rem;">Meeting-Plattform</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <label class="plat-btn" for="plat-teams">
            <input type="radio" id="plat-teams" name="platform" value="Microsoft Teams" style="display:none;">
            <span>🟦 Microsoft Teams</span>
          </label>
          <label class="plat-btn" for="plat-meet">
            <input type="radio" id="plat-meet" name="platform" value="Google Meet" style="display:none;">
            <span>🟩 Google Meet</span>
          </label>
          <label class="plat-btn" for="plat-zoom">
            <input type="radio" id="plat-zoom" name="platform" value="Zoom" style="display:none;">
            <span>🟦 Zoom</span>
          </label>
          <label class="plat-btn" for="plat-facetime">
            <input type="radio" id="plat-facetime" name="platform" value="FaceTime" style="display:none;">
            <span>🍏 FaceTime</span>
          </label>
          <label class="plat-btn" for="plat-phone" style="grid-column:1/-1;">
            <input type="radio" id="plat-phone" name="platform" value="Telefon" style="display:none;">
            <span>📞 Lieber per Telefon</span>
          </label>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Ihr Name *</label>
          <input type="text" name="name" required placeholder="Max Mustermann" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Unternehmen *</label>
          <input type="text" name="company" required placeholder="Musterfirma GmbH" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">E-Mail *</label>
          <input type="email" name="email" required placeholder="m.mustermann@firma.de" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;">
          <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Telefon</label>
          <input type="tel" name="phone" placeholder="+49 …" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;">
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:1.25rem;">
        <label style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:rgba(228,177,94,0.8);text-transform:uppercase;letter-spacing:2px;">Kurze Nachricht (optional)</label>
        <textarea name="message" rows="3" placeholder="Anzahl Maschinen, Maschinentyp, aktuelle Herausforderung…" style="background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.65rem 0.9rem;color:#fff;font-size:0.85rem;outline:none;font-family:inherit;resize:vertical;"></textarea>
      </div>
      <button type="submit" id="terminSubmitBtn" style="width:100%;background:linear-gradient(135deg,#e4b15e,#f8dfa5,#e4b15e);color:#000;border:none;padding:0.9rem;border-radius:8px;font-weight:700;font-size:0.875rem;cursor:pointer;letter-spacing:0.5px;">TERMIN ANFRAGEN →</button>
      <div id="terminSuccess" style="display:none;background:rgba(0,255,136,0.08);border:1px solid rgba(0,255,136,0.3);border-radius:8px;padding:1rem;text-align:center;color:#00ff88;font-family:'JetBrains Mono',monospace;font-size:0.75rem;letter-spacing:1px;margin-top:1rem;">✓ ANFRAGE ERHALTEN — Sascha Forbach meldet sich persönlich innerhalb von 24 Stunden.</div>
      <div id="terminError" style="display:none;background:rgba(255,56,96,0.08);border:1px solid rgba(255,56,96,0.3);border-radius:8px;padding:0.75rem;text-align:center;color:#ff3860;font-size:0.78rem;margin-top:0.75rem;">Fehler beim Senden — bitte direkt an info@forbachandpartners.com schreiben.</div>
    </form>
  </div>
</div>

<style>
.plat-btn{display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.04);border:1px solid rgba(228,177,94,0.2);border-radius:8px;padding:0.6rem 0.75rem;font-size:0.8rem;color:#a0a0a0;cursor:pointer;transition:all 0.2s;text-align:center;}
.plat-btn:hover{border-color:rgba(228,177,94,0.5);color:#fff;}
.plat-btn.selected{background:rgba(228,177,94,0.12);border-color:rgba(228,177,94,0.6);color:#e4b15e;}
</style>`;

  // Modal ins DOM einfügen
  document.addEventListener('DOMContentLoaded', function(){
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Plattform-Radio Styling
    document.querySelectorAll('.plat-btn').forEach(function(lbl){
      lbl.addEventListener('click', function(){
        document.querySelectorAll('.plat-btn').forEach(function(l){ l.classList.remove('selected'); });
        lbl.classList.add('selected');
      });
    });

    // Klick außerhalb schließt Modal
    document.getElementById('terminModal').addEventListener('click', function(e){
      if(e.target === this) closeTerminModal();
    });

    // Alle "Termin anfragen" / "Termin vereinbaren" Buttons verknüpfen
    document.querySelectorAll('[data-termin],[id="navCta"],.nav-cta').forEach(function(el){
      if(el.href && el.href.indexOf('mailto') !== -1){
        el.addEventListener('click', function(e){
          e.preventDefault();
          openTerminModal();
        });
      }
    });
  });
})();

function openTerminModal(){
  var m = document.getElementById('terminModal');
  if(m){ m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeTerminModal(){
  var m = document.getElementById('terminModal');
  if(m){ m.style.display = 'none'; document.body.style.overflow = ''; }
}
async function submitTermin(e){
  e.preventDefault();
  var btn = document.getElementById('terminSubmitBtn');
  btn.disabled = true; btn.textContent = 'WIRD GESENDET…';
  try {
    var res = await fetch('https://api.web3forms.com/submit', { method:'POST', body: new FormData(e.target) });
    var json = await res.json();
    if(json.success){
      document.getElementById('terminSuccess').style.display = 'block';
      btn.style.display = 'none';
    } else { throw new Error(); }
  } catch(err){
    btn.disabled = false; btn.textContent = 'TERMIN ANFRAGEN →';
    document.getElementById('terminError').style.display = 'block';
  }
}

/* ── COOKIE BANNER ── */
(function(){
  var COOKIE_KEY = 'fp_cookie_consent';

  function getCookie(name){
    try{ return localStorage.getItem(name); } catch(e){ return null; }
  }
  function setCookie(name, val){
    try{ localStorage.setItem(name, val); } catch(e){}
  }

  function removeBanner(){
    var b = document.getElementById('cookieBanner');
    if(b){ b.style.opacity='0'; b.style.transform='translateY(20px)'; setTimeout(function(){ if(b.parentNode) b.parentNode.removeChild(b); },400); }
  }

  function accept(){ setCookie(COOKIE_KEY,'accepted'); removeBanner(); }
  function reject(){ setCookie(COOKIE_KEY,'rejected'); removeBanner(); }

  window.cookieAccept = accept;
  window.cookieReject = reject;

  document.addEventListener('DOMContentLoaded', function(){
    if(getCookie(COOKIE_KEY)) return; // schon entschieden

    var banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:1rem;flex-wrap:wrap;">
        <div style="flex:1;min-width:220px;">
          <div style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:#e4b15e;letter-spacing:3px;text-transform:uppercase;margin-bottom:0.4rem;">🍪 Datenschutz</div>
          <p style="font-size:0.78rem;color:#a0a0a0;line-height:1.65;margin:0;">
            Diese Website speichert Ihre Spracheinstellung lokal in Ihrem Browser (kein Tracking, keine Weitergabe). Mehr dazu in unserer
            <a href="datenschutz.html" style="color:#e4b15e;text-decoration:none;border-bottom:1px solid rgba(228,177,94,0.3);">Datenschutzerklärung</a>.
          </p>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;flex-shrink:0;justify-content:center;">
          <button onclick="cookieAccept()" style="background:linear-gradient(135deg,#e4b15e,#f8dfa5,#e4b15e);color:#000;border:none;padding:0.55rem 1.4rem;border-radius:7px;font-weight:700;font-size:0.78rem;cursor:pointer;letter-spacing:0.5px;white-space:nowrap;transition:opacity 0.2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">Akzeptieren</button>
          <button onclick="cookieReject()" style="background:transparent;color:#555;border:1px solid rgba(255,255,255,0.1);padding:0.5rem 1.4rem;border-radius:7px;font-size:0.75rem;cursor:pointer;white-space:nowrap;transition:all 0.2s;" onmouseover="this.style.color='#a0a0a0';this.style.borderColor='rgba(255,255,255,0.2)'" onmouseout="this.style.color='#555';this.style.borderColor='rgba(255,255,255,0.1)'">Ablehnen</button>
        </div>
      </div>`;

    banner.style.cssText = [
      'position:fixed',
      'bottom:1.5rem',
      'left:50%',
      'transform:translateX(-50%) translateY(30px)',
      'z-index:10000',
      'background:#111',
      'border:1px solid rgba(228,177,94,0.3)',
      'border-radius:14px',
      'padding:1.25rem 1.5rem',
      'max-width:680px',
      'width:calc(100vw - 2rem)',
      'box-shadow:0 8px 48px rgba(0,0,0,0.7),0 0 0 1px rgba(228,177,94,0.08)',
      'opacity:0',
      'transition:opacity 0.4s ease,transform 0.4s ease'
    ].join(';');

    document.body.appendChild(banner);

    // Einblend-Animation
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        banner.style.opacity = '1';
        banner.style.transform = 'translateX(-50%) translateY(0)';
      });
    });
  });
})();

/* ── FLOATING CONTACT WIDGET — entfernt (durch goldene Buttons ersetzt) ── */

/* ── NAV CTA → Modal verdrahten (alle Seiten) ── */
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav-cta').forEach(function(el){
    if(el.tagName === 'A' && el.href && el.href.indexOf('mailto') !== -1){
      el.addEventListener('click', function(e){
        e.preventDefault();
        openTerminModal();
      });
    }
  });
});

/* ═══════════════════════════════════════════════
   SPRACH-TOGGLE — universell für alle Seiten
   Nutzt body.lang-en + .de/.en CSS-Klassen
   ═══════════════════════════════════════════════ */
function isLangEN() {
  return document.body.classList.contains('lang-en');
}

function t(de, en) {
  return isLangEN() ? en : de;
}

var MACHINE_TYPE_OPTIONS = [
  { value: '', de: 'Bitte wählen…', en: 'Please select…' },
  { value: 'CNC-Fräszentrum (3-Achs)', de: 'CNC-Fräszentrum (3-Achs)', en: 'CNC machining center (3-axis)' },
  { value: 'CNC-Fräszentrum (4-Achs)', de: 'CNC-Fräszentrum (4-Achs)', en: 'CNC machining center (4-axis)' },
  { value: 'CNC-Fräszentrum (5-Achs)', de: 'CNC-Fräszentrum (5-Achs)', en: 'CNC machining center (5-axis)' },
  { value: 'CNC-Bearbeitungszentrum', de: 'CNC-Bearbeitungszentrum', en: 'CNC machining center' },
  { value: 'CNC-Drehzentrum', de: 'CNC-Drehzentrum', en: 'CNC turning center' },
  { value: 'CNC-Dreh-Fräszentrum', de: 'CNC-Dreh-Fräszentrum', en: 'CNC turn-mill center' },
  { value: 'Mehrere CNC-Anlagen', de: 'Mehrere CNC-Anlagen', en: 'Multiple CNC machines' },
  { value: 'Sonstige Anlage', de: 'Sonstige Anlage', en: 'Other machine type' }
];

function applyDataI18n() {
  document.querySelectorAll('[data-de][data-en]').forEach(function(el) {
    var text = isLangEN() ? el.getAttribute('data-en') : el.getAttribute('data-de');
    if (text) el.textContent = text;
  });
}

function rebuildMachineSelects() {
  document.querySelectorAll('select[name="machine_type"]').forEach(function(sel) {
    var current = sel.value;
    sel.innerHTML = MACHINE_TYPE_OPTIONS.map(function(o) {
      var label = isLangEN() ? o.en : o.de;
      return '<option value="' + o.value.replace(/"/g, '&quot;') + '">' + label + '</option>';
    }).join('');
    sel.value = current;
  });
}

function updateI18nPlaceholders() {
  document.querySelectorAll('[data-placeholder-de][data-placeholder-en]').forEach(function(el) {
    el.placeholder = isLangEN()
      ? el.getAttribute('data-placeholder-en')
      : el.getAttribute('data-placeholder-de');
  });
  var ta = document.getElementById('contactTextarea');
  if (ta && !ta.getAttribute('data-placeholder-de')) {
    ta.placeholder = t(
      'Beschreiben Sie kurz Ihre Situation — wie viele Maschinen, welche Probleme, was Sie sich wünschen…',
      'Briefly describe your situation — how many machines, what issues, what you are looking for…'
    );
  }
}

function setLang(l) {
  var isEN = (l === 'en');
  document.body.classList.toggle('lang-en', isEN);
  document.documentElement.lang = isEN ? 'en' : 'de';

  document.querySelectorAll('#btnDe,.btn-de').forEach(function(b) {
    b.classList.toggle('active', !isEN);
  });
  document.querySelectorAll('#btnEn,.btn-en').forEach(function(b) {
    b.classList.toggle('active', isEN);
  });

  applyDataI18n();
  rebuildMachineSelects();
  updateI18nPlaceholders();

  try { localStorage.setItem('fp_lang', l); } catch (e) {}

  if (typeof window.refreshPageI18n === 'function') {
    window.refreshPageI18n();
  }

  document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: l } }));
}

window.t = t;
window.isLangEN = isLangEN;
window.setLang = setLang;

document.addEventListener('DOMContentLoaded', function() {
  if (!document.querySelector('#langStyle')) {
    var s = document.createElement('style');
    s.id = 'langStyle';
    s.textContent =
      '.de{display:block;}.en{display:none;}' +
      'span.de{display:inline;}span.en{display:none;}' +
      'body.lang-en .de{display:none!important;}' +
      'body.lang-en .en{display:block!important;}' +
      'body.lang-en span.en{display:inline!important;}' +
      'body.lang-en span.de{display:none!important;}' +
      '.lang-toggle-nav{display:flex;gap:3px;align-items:center;}' +
      '.lang-btn-nav{background:none;border:1px solid rgba(228,177,94,0.25);color:#a0a0a0;font-family:"JetBrains Mono",monospace;font-size:0.62rem;padding:3px 8px;border-radius:4px;cursor:pointer;transition:all 0.2s;letter-spacing:1px;}' +
      '.lang-btn-nav:hover{color:#e4b15e;border-color:rgba(228,177,94,0.5);}' +
      '.lang-btn-nav.active{color:#000;background:#e4b15e;border-color:#e4b15e;}';
    document.head.appendChild(s);
  }

  setTimeout(function() {
    try {
      var saved = localStorage.getItem('fp_lang');
      setLang(saved === 'en' ? 'en' : 'de');
    } catch (e) {
      setLang('de');
    }
  }, 0);
});
