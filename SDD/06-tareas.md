# 06 — Tareas

Desglose del trabajo, con estado. Todas completadas salvo el despliegue.

## Fase 0 — Preparación

- [x] T-01 Explorar el repositorio y los assets de marca.
- [x] T-02 Verificar tooling (Node 24, pnpm 10).
- [x] T-03 Copiar logo a `public/logo.png` y fuentes a `src/fonts/` con nombres limpios.

## Fase 1 — Scaffold

- [x] T-04 Crear `package.json`, `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `.gitignore`.
- [x] T-05 Instalar dependencias con pnpm.
- [x] T-06 Resolver peers de ESLint para pnpm estricto.

## Fase 2 — Design system

- [x] T-07 Definir tokens de color, tipografía y animación en `globals.css` (`@theme`).
- [x] T-08 Cargar fuentes locales en `layout.tsx` (`next/font/local`) + metadata.
- [x] T-09 Clases de marca: `.shabby` (contorno 2.5 pt), `.glass`, `.noise`, `.blob`, `.card-soft`, `.reveal`.

## Fase 3 — Componentes UI

- [x] T-10 `Icons.tsx` — set de iconos SVG inline.
- [x] T-11 `Reveal.tsx` — animación de aparición con IntersectionObserver.

## Fase 4 — Secciones

- [x] T-12 `Navbar` — sticky, glass al scroll, menú móvil, badge de carrito.
- [x] T-13 `Hero` — título con contorno, blobs, medallón del logo, texto circular giratorio, stats.
- [x] T-14 `Marquee` — banda animada de beneficios.
- [x] T-15 `Catalog` — grilla filtrable + arte SVG por producto + agregar al pedido.
- [x] T-16 `Origin` — historia, cita, pilares, curvas topográficas.
- [x] T-17 `Process` — timeline de 4 pasos.
- [x] T-18 `Testimonials` — reseñas con rating.
- [x] T-19 `ContactForm` — validación, resumen del pedido, estados.
- [x] T-20 `Footer` — contacto, redes, copyright.

## Fase 5 — Interactividad

- [x] T-21 `OrderContext` — carrito compartido (add, setQty, remove, clear, open/close).
- [x] T-22 `CartDrawer` — panel lateral con totales y envío por WhatsApp.
- [x] T-23 `POST /api/order` — validación del formulario.

## Fase 6 — Verificación

- [x] T-24 `pnpm build` sin errores.
- [x] T-25 `pnpm lint` sin warnings.
- [x] T-26 Type-check (incluido en el build).

## Fase 7 — Despliegue

- [x] T-27 Desplegar en Vercel y verificar la URL pública.
- [ ] T-28 Reemplazar datos de contacto y catálogo reales.

## Fase 8 — Rediseño v2 (cálido)

- [x] T-29 Declarar `images.remotePatterns` para `images.pexels.com` en `next.config.ts`.
- [x] T-30 Reemplazar la escala `forest-*` por `coffee-*` (espresso/moka) en tokens y componentes.
- [x] T-31 Acentos cálidos protagonistas (`caramel`, `gold`, `terracotta`); verde de marca como acento puntual.
- [x] T-32 Invertir jerarquía tipográfica: Poppins (títulos/UI), Nunito (cuerpo), Another shabby decorativo (`.script`).
- [x] T-33 Añadir fotografía real a los 12 productos (`products.ts`) y mostrar con `next/image`.
- [x] T-34 Rediseñar Hero (foto + badge de logo) y Origin (foto de finca).
- [x] T-35 Miniaturas de producto reales en `CartDrawer` (`OrderItem.image`).
- [x] T-36 Retirar `ProductBag.tsx` (arte SVG) al no usarse.
- [x] T-37 `pnpm build` y `pnpm lint` limpios; redeploy a producción.
