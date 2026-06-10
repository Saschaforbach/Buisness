#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════
// FORBACH & PARTNERS — STATISCHE BLOG-SEITEN GENERATOR
// ═══════════════════════════════════════════════════════════════════
//
// Erzeugt aus blog-posts.js für jeden Artikel eine eigene SEO-Seite
// (blog-<slug>.html) + aktualisierte sitemap.xml.
//
// Verwendung:  node generate-blog-pages.js [ausgabe-ordner]
// Ohne Argument wird in den aktuellen Ordner geschrieben.
//
// Nach jedem neuen Artikel in blog-posts.js einfach erneut ausführen
// und die erzeugten Dateien mit auf GitHub hochladen.
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const SITE = 'https://forbachandpartners.com';
const SRC_DIR = __dirname;
const OUT_DIR = process.argv[2] ? path.resolve(process.argv[2]) : SRC_DIR;

// blog-posts.js laden (Browser-Datei, daher via Function-Wrapper)
const src = fs.readFileSync(path.join(SRC_DIR, 'blog-posts.js'), 'utf8');
const POSTS = new Function(src + '; return POSTS;')();

const slugify = s => s.toLowerCase()
  .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const fileFor = p => `blog-${p.slug || slugify(p.title)}.html`;

function relatedLinks(post) {
  const others = POSTS.filter(p => p.id !== post.id);
  const sameCat = others.filter(p => p.category === post.category);
  const rest = others.filter(p => p.category !== post.category);
  return [...sameCat, ...rest].slice(0, 3);
}

function pageHtml(p) {
  const url = `${SITE}/${fileFor(p)}`;
  const related = relatedLinks(p);

  const ld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "datePublished": p.date,
    "dateModified": p.date,
    "inLanguage": "de",
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "author": { "@type": "Person", "name": p.author, "url": `${SITE}/ueber-uns.html` },
    "publisher": { "@type": "Organization", "name": "Forbach and Partners Ltd", "url": SITE },
    "keywords": p.tags.join(', '),
    "articleSection": p.category,
    "url": url
  }, null, 2);

  const breadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE}/blog.html` },
      { "@type": "ListItem", "position": 3, "name": p.title, "item": url }
    ]
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.title)} | Forbach &amp; Partners</title>
<meta name="description" content="${esc(p.excerpt)}">
<meta name="keywords" content="${esc(p.tags.join(', '))}">
<meta name="author" content="${esc(p.author)}, Forbach and Partners Ltd">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="${url}">

<meta property="og:type" content="article">
<meta property="og:site_name" content="Forbach &amp; Partners">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.excerpt)}">
<meta property="og:url" content="${url}">
<meta property="article:published_time" content="${p.date}">
<meta property="article:author" content="${esc(p.author)}">
<meta property="article:section" content="${esc(p.category)}">
${p.tags.map(t => `<meta property="article:tag" content="${esc(t)}">`).join('\n')}

<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.excerpt)}">

<link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800&family=JetBrains+Mono:wght@300;400;500;600&family=Oswald:wght@300;400;500;600;700&display=swap">

<script type="application/ld+json">
${ld}
</script>
<script type="application/ld+json">
${breadcrumb}
</script>

<style>
:root {
  --gold: #e4b15e; --gold-light: #f8dfa5; --gold-dark: #c49040;
  --black: #000; --dark-2: #0e0e0e; --dark-3: #141414; --dark-card: #111;
  --border: rgba(228,177,94,0.15); --border-strong: rgba(228,177,94,0.38);
  --text: #fff; --text-dim: #a0a0a0; --text-muted: #555;
  --font-d: 'Oswald', sans-serif; --font-b: 'Raleway', sans-serif; --font-m: 'JetBrains Mono', monospace;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: var(--black); color: var(--text); font-family: var(--font-b); line-height: 1.6; overflow-x: hidden; }
a { color: var(--gold); }

nav { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; gap: 1.5rem;
  padding: 1rem 2rem; background: rgba(0,0,0,0.92); backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border); }
.nav-logo { font-family: var(--font-d); font-size: 1.05rem; letter-spacing: 2px; color: var(--text);
  text-decoration: none; margin-right: auto; }
.nav-link { color: var(--text-dim); text-decoration: none; font-size: 0.8rem; letter-spacing: 0.5px; transition: color .2s; }
.nav-link:hover, .nav-link.active { color: var(--gold); }
.nav-cta { background: linear-gradient(135deg, #e4b15e, #c49040); color: #000; text-decoration: none;
  font-size: 0.75rem; font-weight: 700; padding: 9px 18px; border-radius: 6px; white-space: nowrap; }
@media (max-width: 760px) { .nav-link { display: none; } }

.article-wrap { max-width: 800px; margin: 0 auto; padding: 3.5rem 1.5rem 4rem; }
.back-link { display: inline-block; font-family: var(--font-m); font-size: 0.65rem; letter-spacing: 1.5px;
  text-transform: uppercase; color: var(--text-muted); text-decoration: none; margin-bottom: 2rem; transition: color .2s; }
.back-link:hover { color: var(--gold); }

.detail-eyebrow { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
.detail-cat { display: inline-flex; align-items: center; gap: 5px;
  background: rgba(228,177,94,0.1); border: 1px solid var(--border-strong);
  border-radius: 5px; padding: 4px 12px;
  font-family: var(--font-m); font-size: 0.58rem; color: var(--gold);
  letter-spacing: 1.5px; text-transform: uppercase; }
.detail-date, .detail-read-time { font-family: var(--font-m); font-size: 0.58rem; color: var(--text-muted); letter-spacing: 1px; }

h1.detail-title { font-family: var(--font-d); font-size: clamp(2rem, 5vw, 3.4rem);
  letter-spacing: 1.5px; line-height: 1.05; margin-bottom: 1.5rem; }
.detail-lead { font-size: 1.1rem; color: var(--text-dim); line-height: 1.8;
  border-left: 3px solid var(--gold); padding-left: 1.25rem; margin-bottom: 2.5rem; }

.detail-body { font-size: 0.95rem; color: var(--text-dim); line-height: 1.85; }
.detail-body h2 { font-family: var(--font-d); font-size: 1.8rem; color: var(--text);
  letter-spacing: 1px; margin: 2.5rem 0 0.85rem; }
.detail-body h3 { font-family: var(--font-d); font-size: 1.3rem; color: var(--gold-light);
  letter-spacing: 1px; margin: 1.75rem 0 0.6rem; }
.detail-body p { margin-bottom: 1.25rem; }
.detail-body ul, .detail-body ol { margin: 0.5rem 0 1.25rem 1.5rem; }
.detail-body li { margin-bottom: 0.4rem; }
.detail-body strong { color: var(--text); font-weight: 700; }
.detail-body code { background: rgba(228,177,94,0.1); border: 1px solid var(--border);
  border-radius: 4px; padding: 2px 7px; font-family: var(--font-m); font-size: 0.82em; color: var(--gold-light); }
.detail-body pre { background: var(--dark-3); border: 1px solid var(--border);
  border-radius: 10px; padding: 1.25rem; overflow-x: auto;
  font-family: var(--font-m); font-size: 0.8rem; color: #a8e6cf; margin: 1.25rem 0; line-height: 1.6; }
.detail-body blockquote { background: rgba(228,177,94,0.05); border-left: 3px solid var(--gold);
  border-radius: 0 10px 10px 0; padding: 1rem 1.5rem; margin: 1.5rem 0; font-style: italic; color: var(--text-dim); }
.detail-body .highlight-box { background: linear-gradient(135deg, rgba(228,177,94,0.08), rgba(228,177,94,0.03));
  border: 1px solid var(--border-strong); border-radius: 12px; padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
.detail-body .stat-highlight { font-family: var(--font-d); font-size: 2.5rem; color: var(--gold);
  display: block; margin-bottom: 0.25rem; }

.detail-tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 2.5rem 0 1rem; }
.detail-tag { font-family: var(--font-m); font-size: 0.55rem; color: var(--text-muted);
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px; padding: 3px 9px; letter-spacing: 0.8px; text-transform: uppercase; }
.detail-author { background: var(--dark-card); border: 1px solid var(--border);
  border-radius: 14px; padding: 1.25rem 1.5rem; display: flex; align-items: center; gap: 1rem; margin-top: 2.5rem; }
.author-avatar { width: 48px; height: 48px; border-radius: 50%;
  background: linear-gradient(135deg, #e4b15e, #c49040);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-d); font-size: 1.2rem; color: #000; flex-shrink: 0; }
.author-name { font-weight: 700; font-size: 0.95rem; }
.author-role { font-family: var(--font-m); font-size: 0.55rem; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }

.related { margin-top: 3.5rem; border-top: 1px solid var(--border); padding-top: 2rem; }
.related h2 { font-family: var(--font-d); font-size: 1.4rem; letter-spacing: 1px; margin-bottom: 1.25rem; }
.related-card { display: block; background: var(--dark-card); border: 1px solid var(--border);
  border-radius: 12px; padding: 1.1rem 1.35rem; margin-bottom: 0.8rem; text-decoration: none; transition: border-color .2s; }
.related-card:hover { border-color: var(--border-strong); }
.related-card .rc-cat { font-family: var(--font-m); font-size: 0.55rem; color: var(--gold);
  letter-spacing: 1.5px; text-transform: uppercase; }
.related-card .rc-title { color: var(--text); font-weight: 600; font-size: 0.95rem; margin-top: 4px; }

.cta-box { margin-top: 3rem; background: linear-gradient(135deg, rgba(228,177,94,0.1), rgba(228,177,94,0.04));
  border: 1px solid var(--border-strong); border-radius: 14px; padding: 1.75rem; text-align: center; }
.cta-box h2 { font-family: var(--font-d); font-size: 1.5rem; letter-spacing: 1px; margin-bottom: 0.5rem; }
.cta-box p { color: var(--text-dim); font-size: 0.9rem; margin-bottom: 1.25rem; }
.cta-btn { display: inline-block; background: linear-gradient(135deg, #e4b15e, #c49040); color: #000;
  text-decoration: none; font-weight: 700; font-size: 0.85rem; padding: 12px 26px; border-radius: 8px; }

footer { background: var(--dark-2); border-top: 1px solid var(--border); padding: 3rem 2rem 2rem; text-align: center; }
.f-logo { font-family: var(--font-d); font-size: 1.6rem; letter-spacing: 2px;
  background: linear-gradient(135deg, #e4b15e, #f8dfa5, #e4b15e);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 0.35rem; }
.f-tag { font-family: var(--font-m); font-size: 0.6rem; color: var(--text-muted); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 1.5rem; }
.f-links { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }
.f-link { color: var(--text-muted); text-decoration: none; font-size: 0.75rem; font-family: var(--font-m); letter-spacing: 1px; transition: color 0.2s; }
.f-link:hover { color: var(--gold); }
.f-copy { font-size: 0.65rem; color: var(--text-muted); font-family: var(--font-m); border-top: 1px solid var(--border); padding-top: 1.25rem; }
</style>
</head>
<body>

<nav>
  <a href="index.html" class="nav-logo">FORBACH &amp; PARTNERS</a>
  <a href="index.html" class="nav-link">Home</a>
  <a href="ueber-uns.html" class="nav-link">Über uns</a>
  <a href="cnc-fraeszentren.html" class="nav-link">CNC-Anlagen</a>
  <a href="blog.html" class="nav-link active">Blog</a>
  <a href="kontakt.html" class="nav-link">Kontakt</a>
  <a href="kontakt.html" class="nav-cta">Termin vereinbaren</a>
</nav>

<div class="article-wrap">
  <a href="blog.html" class="back-link">← Alle Artikel</a>

  <article itemscope itemtype="https://schema.org/BlogPosting">
    <div class="detail-eyebrow">
      <span class="detail-cat">${esc(p.category)}</span>
      <span class="detail-date" itemprop="datePublished" content="${p.date}">${esc(p.dateFormatted)}</span>
      <span class="detail-read-time">· ${esc(p.readTime)} Lesezeit</span>
    </div>
    <h1 class="detail-title" itemprop="headline">${esc(p.title)}</h1>
    <div class="detail-body" itemprop="articleBody">
${p.content.trim()}
    </div>
    <div class="detail-tags">
      ${p.tags.map(t => `<span class="detail-tag">${esc(t)}</span>`).join('\n      ')}
    </div>
    <div class="detail-author">
      <div class="author-avatar">${p.author.split(' ').map(n => n[0]).join('')}</div>
      <div>
        <div class="author-name" itemprop="author">${esc(p.author)}</div>
        <div class="author-role">Forbach &amp; Partners · Gründer &amp; Experte</div>
      </div>
    </div>
  </article>

  <div class="cta-box">
    <h2>UNGEPLANTE STILLSTÄNDE VERMEIDEN?</h2>
    <p>Wir überwachen Ihre CNC-Maschinen mit KI-gestützter Sensorik — und melden Schäden Tage vor dem Ausfall.</p>
    <a href="kontakt.html" class="cta-btn">Kostenloses Erstgespräch →</a>
  </div>

  <div class="related">
    <h2>WEITERE ARTIKEL</h2>
    ${related.map(r => `<a class="related-card" href="${fileFor(r)}">
      <span class="rc-cat">${esc(r.category)}</span>
      <div class="rc-title">${esc(r.title)}</div>
    </a>`).join('\n    ')}
  </div>
</div>

<footer>
  <div class="f-logo">FORBACH &amp; PARTNERS</div>
  <div class="f-tag">Predictive Intelligence · CNC-Fräszentren · Industry 4.0</div>
  <div class="f-links">
    <a class="f-link" href="index.html">Home</a>
    <a class="f-link" href="ueber-uns.html">Über uns</a>
    <a class="f-link" href="cnc-fraeszentren.html">CNC-Anlagen</a>
    <a class="f-link" href="blog.html">Blog</a>
    <a class="f-link" href="kontakt.html">Kontakt</a>
    <a class="f-link" href="impressum.html">Impressum</a>
    <a class="f-link" href="datenschutz.html">Datenschutz</a>
  </div>
  <div class="f-copy">© 2026 Forbach and Partners Ltd · Reg. Cyprus HE 483586 · Alle Rechte vorbehalten</div>
</footer>

</body>
</html>
`;
}

// ── Sitemap ──
function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const staticPages = [
    { loc: `${SITE}/`, lastmod: today, freq: 'weekly', prio: '1.0' },
    { loc: `${SITE}/ueber-uns.html`, lastmod: today, freq: 'monthly', prio: '0.8' },
    { loc: `${SITE}/cnc-fraeszentren.html`, lastmod: today, freq: 'monthly', prio: '0.9' },
    { loc: `${SITE}/kontakt.html`, lastmod: today, freq: 'monthly', prio: '0.8' },
    { loc: `${SITE}/blog.html`, lastmod: today, freq: 'weekly', prio: '0.7' },
    { loc: `${SITE}/maschine-3d.html`, lastmod: today, freq: 'monthly', prio: '0.6' },
    { loc: `${SITE}/impressum.html`, lastmod: today, freq: 'yearly', prio: '0.2' },
    { loc: `${SITE}/datenschutz.html`, lastmod: today, freq: 'yearly', prio: '0.2' },
  ];
  const articlePages = POSTS.map(p => ({
    loc: `${SITE}/${fileFor(p)}`, lastmod: p.date, freq: 'monthly', prio: '0.8'
  }));
  const urls = [...staticPages, ...articlePages].map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.prio}</priority>
  </url>`).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>
`;
}

// ── Ausführen ──
fs.mkdirSync(OUT_DIR, { recursive: true });
let count = 0;
for (const p of POSTS) {
  const file = fileFor(p);
  fs.writeFileSync(path.join(OUT_DIR, file), pageHtml(p));
  console.log('✓', file);
  count++;
}
fs.writeFileSync(path.join(OUT_DIR, 'sitemap.xml'), sitemapXml());
console.log('✓ sitemap.xml (' + (count + 8) + ' URLs)');
console.log(`\nFertig: ${count} Artikelseiten + Sitemap → ${OUT_DIR}`);
