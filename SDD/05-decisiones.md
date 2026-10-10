# 05 — Registro de decisiones (ADR)

Cada decisión incluye contexto, decisión, alternativas y consecuencias.

---

## ADR-001 — Next.js como framework

**Contexto**: se pidió "Astro o Next.js".

**Decisión**: **Next.js 15 (App Router)**.

**Alternativas**: Astro (excelente para sitios mayormente estáticos, islas de React).

**Motivo**: la landing concentra interactividad real (catálogo filtrable, carrito compartido entre secciones, formulario con estado). Con React como base única se evita la capa de islas de Astro, y el despliegue en Vercel es nativo y sin adaptador.

**Consecuencias**: bundle algo mayor que Astro, pero sigue siendo un sitio pre-renderizado ligero (~116 kB First Load JS).

---

## ADR-002 — Tailwind CSS v4 con tokens en `@theme`

**Decisión**: Tailwind v4 configurado vía CSS (`@import "tailwindcss"` + bloque `@theme` en `globals.css`). Sin `tailwind.config.js`.

**Alternativa**: Tailwind v3 con archivo de configuración JS.

**Motivo**: v4 es la versión actual; los tokens viven junto al CSS, generan utilidades (`bg-brand-500`, `font-display`) y simplifican el mantenimiento.

**Consecuencias**: el pipeline usa `@tailwindcss/postcss`. Documentar tokens en `globals.css`.

---

## ADR-003 — Estado del carrito con React Context

**Decisión**: `OrderContext` (React Context + `useState`) en `src/components/site/OrderContext.tsx`.

**Alternativas**: Zustand, Redux, estado local + prop drilling.

**Motivo**: el pedido se comparte entre secciones hermanas (navbar, catálogo, drawer, formulario). Context cubre el caso sin dependencias ni boilerplate.

**Consecuencias**: sin persistencia entre recargas (aceptable para el alcance). Migrar a `localStorage` o Zustand si crece.

---

## ADR-004 — Sin librerías externas de animación ni iconos

**Decisión**: animaciones con CSS (`@keyframes`) + `IntersectionObserver` (`Reveal`); iconos con SVG inline (`Icons.tsx`).

**Alternativas**: Framer Motion, lucide-react.

**Motivo**: menor peso, cero riesgo de incompatibilidad con React 19, y control total de la estética. Cumple el principio de "sin dependencias innecesarias".

**Consecuencias**: las animaciones complejas se escriben a mano; suficiente para esta landing.

---

## ADR-005 — Fuentes locales con `next/font/local`

**Decisión**: las tipografías del cliente se copian a `src/fonts/` (nombres limpios) y se cargan con `next/font/local`.

**Alternativas**: Google Fonts para Nunito/Poppins; CSS `@font-face`.

**Motivo**: "Another shabby" es una fuente propietaria del cliente (solo local). `next/font/local` evita el layout shift, sirve las fuentes desde el dominio propio y genera las variables CSS del tema.

**Consecuencias**: los binarios de fuente se versionan en el repo (`src/fonts/`).

---

## ADR-006 — WhatsApp como canal principal de pedido + endpoint de respaldo

**Decisión**: el pedido se envía por un deep-link `wa.me` con el detalle formateado; además existe `POST /api/order` que valida y registra.

**Alternativas**: solo correo; solo endpoint; integración de pagos.

**Motivo**: WhatsApp es el canal natural para una tienda local y funciona sin backend. El endpoint deja el hook listo para Resend/DB.

**Consecuencias**: el endpoint registra en logs; conectar un proveedor real antes de producción masiva.

---

## ADR-007 — pnpm como gestor de paquetes

**Decisión**: pnpm (obligatorio por el usuario).

**Consecuencias**: `node_modules` estricto; se agregaron peers de `eslint-config-next` explícitamente (`@next/eslint-plugin-next`, `eslint-plugin-react-hooks`, etc.) y se fijó `@next/eslint-plugin-next@15.5.27` por compatibilidad.

---

## ADR-008 — Rediseño cálido (v2): paleta café, jerarquía tipográfica y fotografía real

**Contexto**: la primera versión usaba el verde de marca como color dominante y
`Another shabby` como fuente de títulos. El cliente pidió un resultado "más
bonito", con el verde presente pero **no dominante**, una fuente principal
distinta y **imágenes reales** de producto.

**Decisión**:
1. **Paleta cálida dominante**. La escala antes llamada `forest-*` (verde profundo)
   se reemplaza por `coffee-*` (espresso/moka). Se agregan acentos cálidos
   (`caramel`, `gold`, `terracotta`) como lenguaje principal. El verde de marca
   (`brand-*`) queda como **acento puntual**.
2. **Jerarquía tipográfica invertida**. Fuente principal = **Poppins** (títulos e
   interfaz); cuerpo = **Nunito**; **Another shabby** = solo decorativo
   (flourishes rotados con la clase `.script`).
3. **Fotografía real**. Los 12 productos, el hero y la sección de origen usan
   fotografías (Pexels CDN) vía `next/image`.

**Alternativas**: mantener el verde como base y solo añadir imágenes; usar Google
Fonts; gradientes ilustrados en lugar de fotos.

**Motivo**: el café se comunica mejor con tonos cálidos; el verde de marca se
aprovecha como destello de identidad sin saturar; las fotos reales dan credibilidad
y apetito de compra.

**Consecuencias**: renombrado de tokens (`forest-* → coffee-*`) en todos los
componentes; `next.config.ts` declara `images.remotePatterns` para
`images.pexels.com`. El build sigue pre-renderizado y ligero.
