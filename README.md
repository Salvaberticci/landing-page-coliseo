# EL COLISEO — Academia de Artes Marciales Mixtas

Web oficial de **El Coliseo**, academia de artes marciales mixtas ubicada en el **C.C. Murachi, final del pasillo central, locales 11 y 12, Sector Las Acacias, Valera (Venezuela)**.

Deportes de combate moderno que combinan técnicas de diversas disciplinas — **Boxeo, Kickboxing, Jiu-Jitsu Brasileño, MMA y defensa personal** — para **niños, jóvenes y adultos** en diferentes horarios.

> Sitio estático multipágina (HTML + CSS + JavaScript), sin backend: se despliega en cualquier hosting estático (Vercel).

## Páginas

| Página | Archivo | Contenido |
|---|---|---|
| **Inicio** | `index.html` | Hero con vídeo, cifras, resumen de disciplinas, testimonios, FAQ y CTA |
| **Disciplinas** | `disciplinas.html` | Las 5 disciplinas en detalle: vídeo, descripción y métricas |
| **Horarios** | `horarios.html` | Parrilla semanal con grupos por edad y cupos limitados |
| **Entrenadores** | `entrenadores.html` | El código del guerrero + ficha del **Sensei Marcos Castellanos** y su palmarés |
| **Noticias** | `noticias.html` | Torneos ganados, alumnos destacados y novedades (desde `noticias/noticias.json`) |
| **Contacto** | `contacto.html` | Formulario de clase de prueba, WhatsApp, teléfono, dirección y mapa |

Cada noticia además tiene su propia página estática en `noticias/<slug>.html` con `NewsArticle`, breadcrumb y miniaturas.

## Sensei

**Marcos Castellanos** — Director técnico:

- Atleta de alto rendimiento
- Campeón Nacional en Kickboxing 2021
- Subcampeón Panamericano en Kickboxing (Brasil, 2022)
- Medallista Internacional y Cinturón Morado en Jiu-Jitsu Brasileño, con más de 10 medallas de oro obtenidas en Río de Janeiro (Brasil, 2023)
- Cinturón Amarillo en la disciplina Capoeira (Brasil)
- Instructor de entrenamiento físico

## Cómo publicar una noticia

1. Coloca la foto en `noticias/img/` (recomendado: JPG ~1200 px de ancho).
2. Edita `noticias/noticias.json` y añade una entrada dentro de `"noticias"` copiando la `_plantilla` (claves: `slug`, `titulo`, `fecha` `AAAA-MM-DD`, `etiqueta` — `Torneo` | `Alumno destacado` | `Academia` —, `resumen`, `contenido` (párrafos), `imagen`, `destacada`).
3. Genera la página de la noticia y el sitemap:

```bash
node tools/generar-noticias.mjs
```

4. Commit + push (Vercel despliega automáticamente).

> El listado de `noticias.html` lee el JSON en tiempo real; el script solo hace las páginas de detalle y el `sitemap.xml`. Si borras una entrada del JSON, vuelve a ejecutar el script para limpiar su página.

## Características

- **Responsive** (móvil, tableta y escritorio), probado a 375 px sin scroll horizontal; navegación real entre 6 páginas con estado activo (`aria-current`).
- Formulario con validación en línea, confirmación con referencia (`COL-xxxx`) y **envío automático a WhatsApp** (`+58 414-7308002`); las solicitudes se guardan también en `localStorage` (`coliseo_reservas`).
- Vídeos con póster y `preload="none"`, pausados automáticamente fuera de pantalla (`IntersectionObserver`).
- Contadores animados, ticker horizontal, menú móvil y modal legal (términos, privacidad y código de honor).
- **SEO**: `title`/`meta description`/`canonical`/Open Graph/Twitter únicos por página, `og-image` (1200×630), JSON-LD (`SportsActivityLocation` + `LocalBusiness`, `FAQPage` en inicio, `NewsArticle` + `BreadcrumbList` en cada noticia), `robots.txt` y `sitemap.xml` generado.
- Sin dependencias de build: Tailwind por CDN con la configuración del proyecto *inline*.

## Estructura

```
coliseo/
├── index.html               # inicio
├── disciplinas.html
├── horarios.html
├── entrenadores.html
├── noticias.html            # listado (renderiza noticias/noticias.json)
├── contacto.html            # formulario + mapa
├── noticias/
│   ├── noticias.json        # fuente de verdad de las noticias
│   └── img/                 # fotos de las noticias
├── tools/
│   └── generar-noticias.mjs # genera noticias/<slug>.html + sitemap.xml
├── robots.txt
├── sitemap.xml
├── og-image.jpg             # imagen social 1200×630
├── posters/                 # pósteres de los vídeos (LCP)
├── logo.png                 # logo y favicon
├── marcos.png / marcos.webp # foto del Sensei
├── academy.mp4, jiujitsu.mp4, kickboxing.mp4, boxeo.mp4, mma.mp4
├── DESIGN.md                # tokens de diseño (colores/tipografía)
└── README.md
```

## Ejecutar localmente

Servir por HTTP (el listado de noticias usa `fetch`):

```bash
# Apache de XAMPP apuntando a C:\xampp\htdocs\webs-negocios\coliseo
http://localhost/coliseo/index.html
```

Abrir con `file://` funciona para todo excepto el listado de noticias.

## Despliegue

El sitio se publica estáticamente en **Vercel**: **https://coliseo-gamma.vercel.app**

Repositorio: **https://github.com/Salvaberticci/landing-page-coliseo**

```bash
vercel --prod
```

## Contacto

- **WhatsApp / Teléfono:** +58 414-7308002
- **Dirección:** C.C. Murachi, final del pasillo central, locales 11 y 12, Sector Las Acacias, Valera
- **Horarios:** Lun–Vie Kickboxing/Boxeo 7:30 AM · 9:00 AM · 10:00 AM · 4:00 PM · 6:00 PM · Kickboxing niños 5:00 PM · Jiu-Jitsu 7:30–9:00 PM — Sáb MMA 11:00 AM–1:00 PM
