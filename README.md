# EL COLISEO — Academia de Artes Marciales Mixtas

Landing page oficial de **El Coliseo**, academia de artes marciales mixtas ubicada en el **C.C. Murachi, final del pasillo central, locales 11 y 12, Sector Las Acacias, Valera (Venezuela)**.

Deportes de combate moderno que combinan técnicas de diversas disciplinas — **Boxeo, Kickboxing, Jiu-Jitsu Brasileño, MMA y defensa personal** — para **niños, jóvenes y adultos** en diferentes horarios.

> Sitio estático (HTML + CSS + JavaScript), sin backend: se puede abrir directamente en el navegador o desplegar en cualquier hosting.

## Contenido

| Sección | Descripción |
|---|---|
| **Hero** | Vídeo de las clases, propuesta de valor y acceso rápido a reservar |
| **El Coliseo en cifras** | Disciplinas, grupos de edad, palmarés del Sensei y credenciales |
| **Disciplinas de combate** | 4 tarjetas con vídeo propio: Jiu-Jitsu, Kickboxing, Boxeo y MMA |
| **El código del guerrero** | Manifiesto: *Familia, Honor, Fuerza y Disciplina* |
| **Testimonios** | Reseñas de practicantes y competidores |
| **Horarios** | Parrilla semanal con grupos por edad y nivel |
| **Entrenadores & Dojo** | Ficha del **Sensei Marcos Castellanos** y su palmarés |
| **Clase de prueba** | Formulario validado que envía la solicitud a WhatsApp |
| **Contacto & Ubicación** | WhatsApp, teléfono, dirección y mapa (OpenStreetMap) |

## Sensei

**Marcos Castellanos** — Director técnico:

- Atleta de alto rendimiento
- Campeón Nacional en Kickboxing 2021
- Subcampeón Panamericano en Kickboxing (Brasil, 2022)
- Medallista Internacional y Cinturón Morado en Jiu-Jitsu Brasileño, con más de 10 medallas de oro obtenidas en Río de Janeiro (Brasil, 2023)
- Cinturón Amarillo en la disciplina Capoeira (Brasil)
- Instructor de entrenamiento físico

## Características

- **Responsive** (móvil, tableta y escritorio), probado a 375 px sin scroll horizontal.
- Formulario con validación en línea, confirmación con referencia (`COL-xxxx`) y **envío automático a WhatsApp** (`+58 414-7308002`) con todos los datos de la solicitud.
- Las solicitudes también se guardan en `localStorage` (`coliseo_reservas`) como respaldo local.
- Vídeos de las disciplinas en loop, pausados automáticamente cuando están fuera de pantalla (`IntersectionObserver`).
- Navegación con menú móvil, scrollspy, contadores animados, ticker horizontal y modal legal (términos y privacidad).
- SEO básico: `title`, `meta description` y favicon con el logo.
- Sin dependencias de build: Tailwind se carga por CDN con la configuración del proyecto *inline*.

## Estructura

```
coliseo/
├── index.html      # página lista para publicar
├── code.html       # copia de trabajo (mismo contenido que index.html)
├── logo.png        # logo y favicon
├── marcos.png      # foto del Sensei
├── academy.mp4     # vídeo de clases (hero)
├── jiujitsu.mp4    # vídeo de la disciplina
├── kickboxing.mp4
├── boxeo.mp4
├── mma.mp4
├── screen.png      # captura del sitio
├── DESIGN.md       # tokens de diseño (colores/tipografía)
└── README.md
```

## Ejecutar localmente

Abrir `index.html` en el navegador, o con el servidor local de XAMPP/Apache:

```bash
# Apache de XAMPP apuntando a C:\xampp\htdocs\webs-negocios\coliseo
http://localhost/coliseo/index.html
```

## Despliegue

El sitio se publica estáticamente en **Vercel**: **https://coliseo-gamma.vercel.app**

Repositorio: **https://github.com/Salvaberticci/landing-page-coliseo**

```bash
vercel --prod
```

## Contacto

- **WhatsApp / Teléfono:** +58 414-7308002
- **Dirección:** C.C. Murachi, final del pasillo central, locales 11 y 12, Sector Las Acacias, Valera
- **Horario:** Lun–Vie 06:30–22:00 · Sáb 08:30–15:00 · Dom 10:00–13:00 (VET, UTC-4)
