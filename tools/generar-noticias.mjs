import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dir, "..");
const BASE = "https://coliseo-gamma.vercel.app";
const HOY = new Date().toISOString().slice(0, 10);
const ETIQUETAS = ["Torneo", "Alumno destacado", "Academia"];

const data = JSON.parse(fs.readFileSync(path.join(root, "noticias", "noticias.json"), "utf8"));
const entries = (data.noticias || []).filter((n) => n && n.slug && n.titulo);

const slugs = new Set();
for (const n of entries) {
  if (!/^[a-z0-9-]+$/.test(n.slug)) throw new Error("Slug inválido (solo minúsculas, números y guiones): " + n.slug);
  if (slugs.has(n.slug)) throw new Error("Slug duplicado: " + n.slug);
  slugs.add(n.slug);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(n.fecha || "")) throw new Error("Fecha inválida (usa AAAA-MM-DD): " + n.slug);
  if (!ETIQUETAS.includes(n.etiqueta)) throw new Error("Etiqueta inválida en " + n.slug + " (usa: " + ETIQUETAS.join(" / ") + ")");
  if (!n.resumen) throw new Error("Falta resumen: " + n.slug);
  if (!Array.isArray(n.contenido) || !n.contenido.length) throw new Error("Falta contenido: " + n.slug);
  if (n.imagen && !fs.existsSync(path.join(root, "noticias", n.imagen))) {
    console.warn("AVISO: no existe la imagen noticias/" + n.imagen + " para " + n.slug);
  }
}

const listPage = fs.readFileSync(path.join(root, "noticias.html"), "utf8");
const iHead = listPage.indexOf("<!-- HEADER / NAV BAR -->");
const iFoot = listPage.indexOf("<!-- MASTER COLISEO FOOTER -->");
if (iHead < 0 || iFoot < 0) throw new Error("No se encontró header/footer en noticias.html");
const headPart = listPage.slice(0, iHead);
const iHeaderEnd = listPage.indexOf("</header>", iHead);
if (iHeaderEnd < 0) throw new Error("No se encontró </header> en noticias.html");
const headerPart = listPage.slice(iHead, iHeaderEnd + "</header>".length);
const tailPart = listPage.slice(iFoot);

const esc = (s) =>
  String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function fmtFecha(f) {
  const p = f.split("-");
  const d = new Date(+p[0], +p[1] - 1, +p[2]);
  try {
    return d.toLocaleDateString("es-VE", { day: "2-digit", month: "long", year: "numeric" });
  } catch (e) {
    return f;
  }
}

function buildHead(n) {
  const url = `${BASE}/noticias/${n.slug}.html`;
  const img = n.imagen ? `${BASE}/noticias/${n.imagen}` : `${BASE}/og-image.jpg`;
  const desc = n.resumen;
  let h = headPart;
  h = h.replace('<meta charset="utf-8"/>', '<meta charset="utf-8"/>\n<base href="../"/>');
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${esc(n.titulo)} | Noticias | El Coliseo Valera</title>`);
  h = h.replace(/(<meta content=")[^"]*(" name="description"\/>)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<link href=")[^"]*(" rel="canonical"\/>)/, `$1${url}$2`);
  h = h.replace(/(<meta content=")[^"]*(" property="og:title"\/>)/, `$1${esc(n.titulo)}$2`);
  h = h.replace(/(<meta content=")[^"]*(" property="og:description"\/>)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta content=")[^"]*(" property="og:url"\/>)/, `$1${url}$2`);
  h = h.replace(/(<meta content=")[^"]*(" property="og:image"\/>)/, `$1${img}$2`);
  h = h.replace(/(<meta content=")[^"]*(" name="twitter:title"\/>)/, `$1${esc(n.titulo)}$2`);
  h = h.replace(/(<meta content=")[^"]*(" name="twitter:description"\/>)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta content=")[^"]*(" name="twitter:image"\/>)/, `$1${img}$2`);
  h = h.replace(
    /(<meta content=")website(" property="og:type"\/>)/,
    "$1article$2"
  );
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: n.titulo,
      description: desc,
      datePublished: n.fecha,
      dateModified: n.fecha,
      inLanguage: "es-VE",
      image: [img],
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "El Coliseo" },
      publisher: {
        "@type": "Organization",
        name: "El Coliseo",
        logo: { "@type": "ImageObject", url: `${BASE}/logo.png` }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Noticias", item: `${BASE}/noticias.html` },
        { "@type": "ListItem", position: 3, name: n.titulo, item: url }
      ]
    }
  ]
    .map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`)
    .join("\n");
  h = h.replace("</head>", ld + "\n</head>");
  return h;
}

function buildArticle(n, i) {
  const img = n.imagen
    ? `<figure class="mt-8 max-w-4xl overflow-hidden bg-surface-container">
<img src="noticias/${esc(n.imagen)}" alt="${esc(n.titulo)}" width="1200" height="675" loading="lazy" decoding="async" class="w-full h-auto"/>
</figure>`
    : "";
  const paras = n.contenido.map((p) => `<p class="font-body-md text-body-md text-secondary leading-relaxed">${esc(p)}</p>`).join("\n");
  const prev = i > 0 ? entries[i - 1] : null;
  const next = i < entries.length - 1 ? entries[i + 1] : null;
  const navBtn = (n2, dir) =>
    n2
      ? `<a class="group inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high px-5 py-4 transition-colors ${dir === "prev" ? "" : "text-right sm:flex-row-reverse"}" href="${esc(n2.slug)}.html">
<span class="material-symbols-outlined text-primary-container text-[18px] ${dir === "prev" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform">${dir === "prev" ? "arrow_back" : "arrow_forward"}</span>
<span class="flex flex-col gap-1 ${dir === "prev" ? "" : "sm:text-right"}">
<span class="font-mono text-[10px] text-secondary uppercase tracking-widest">${dir === "prev" ? "Noticia anterior" : "Noticia siguiente"}</span>
<span class="font-title text-title uppercase text-on-surface">${esc(n2.titulo)}</span>
</span></a>`
      : "<span></span>";
  return `<!-- NOTICIA -->
<main class="w-full bg-[#08080a]"><div class="flex flex-col w-full">
<article class="w-full bg-surface-container-lowest py-14 sm:py-20 relative">
<div class="w-full max-w-7xl mx-auto px-6 sm:px-10">
<nav aria-label="Migas de pan" class="font-mono text-[11px] tracking-widest uppercase text-secondary mb-8">
<a class="hover:text-primary-container transition-colors" href="index.html">Inicio</a>
<span class="text-neutral-600 mx-2">/</span>
<a class="hover:text-primary-container transition-colors" href="noticias.html">Noticias</a>
<span class="text-neutral-600 mx-2">/</span>
<span class="text-on-surface">${esc(n.titulo)}</span>
</nav>
<div class="flex flex-wrap items-center gap-3 mb-5">
<span class="px-2 py-1 bg-primary-container text-white font-mono text-[10px] tracking-widest uppercase">${esc(n.etiqueta || "Noticia")}</span>
<time class="font-mono text-[11px] text-secondary tracking-widest uppercase" datetime="${esc(n.fecha)}">${esc(fmtFecha(n.fecha))}</time>
</div>
<h1 class="font-headline-lg text-headline-lg uppercase text-on-surface max-w-4xl leading-tight">${esc(n.titulo)}</h1>
<p class="font-body-lg text-body-lg text-secondary mt-4 max-w-3xl leading-relaxed">${esc(n.resumen)}</p>
${img}
<div class="max-w-3xl mt-10 space-y-5">${paras}</div>
<div class="mt-12 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container p-6 border-l-2 border-primary-container">
<p class="font-body-md text-body-md text-secondary">¿Quieres entrenar con nosotros? Reserva tu clase de prueba y te confirmamos el horario por WhatsApp.</p>
<a class="inline-flex items-center gap-2 px-6 py-3 bg-primary-container hover:bg-crimson-neon text-white font-label-md uppercase tracking-widest transition-colors active:scale-95 shrink-0" href="contacto.html#agenda-clase">CLASE DE PRUEBA<span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
<div class="mt-8 flex flex-col sm:flex-row items-stretch gap-4 justify-between">
${navBtn(prev, "prev")}
${navBtn(next, "next")}
</div>
<div class="mt-8">
<a class="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-secondary hover:text-primary-container transition-colors" href="noticias.html"><span class="material-symbols-outlined text-[14px]">arrow_back</span>Volver a todas las noticias</a>
</div>
</div>
</article>
</div></main>`;
}

const dir = path.join(root, "noticias");
for (const f of fs.readdirSync(dir)) {
  if (f.endsWith(".html") && !slugs.has(f.replace(/\.html$/, ""))) {
    fs.unlinkSync(path.join(dir, f));
    console.log("Eliminada noticia obsoleta:", f);
  }
}

entries.sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)));

entries.forEach((n, i) => {
  const html = buildHead(n) + "\n" + headerPart + "\n" + buildArticle(n, i) + "\n" + tailPart;
  fs.writeFileSync(path.join(dir, n.slug + ".html"), html, "utf8");
  console.log("OK noticias/" + n.slug + ".html");
});

const base = [
  ["/", "1.0", "weekly", HOY],
  ["/disciplinas.html", "0.9", "monthly", HOY],
  ["/horarios.html", "0.9", "weekly", HOY],
  ["/entrenadores.html", "0.7", "monthly", HOY],
  ["/noticias.html", "0.8", "weekly", HOY],
  ["/contacto.html", "0.9", "monthly", HOY]
];
const urls = base.concat(entries.map((n) => [`/noticias/${n.slug}.html`, "0.6", "monthly", n.fecha]));
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls
    .map(
      ([loc, pri, freq, mod]) =>
        `  <url><loc>${BASE}${loc}</loc><lastmod>${mod}</lastmod><changefreq>${freq}</changefreq><priority>${pri}</priority></url>`
    )
    .join("\n") +
  "\n</urlset>\n";
fs.writeFileSync(path.join(root, "sitemap.xml"), xml, "utf8");
console.log("OK sitemap.xml con", urls.length, "URLs");
