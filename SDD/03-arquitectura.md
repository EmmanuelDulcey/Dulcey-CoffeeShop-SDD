# 03 — Arquitectura

## Vista general

La landing es **una sola página** compuesta por secciones independientes. La mayoría son *server components* (estáticas). Solo lo que necesita estado es *client component*.

```
layout.tsx  (shell: fuentes, metadata, OrderProvider, CartDrawer)
│
└── page.tsx  (Home)
    ├── Navbar            (client — scroll, menú móvil, contador de carrito)
    ├── Hero              (server — markup estático + Reveal)
    ├── Marquee           (server — banda animada)
    ├── Catalog           (client — filtros + agregar al pedido)
    ├── Origin            (server)
    ├── Process           (server)
    ├── Testimonials      (server)
    ├── ContactForm       (client — estado del formulario + resumen del pedido)
    └── Footer            (server)
```

`CartDrawer` se monta a nivel de `layout.tsx` (no dentro de `page.tsx`) para que el drawer flote por encima de todo y sea accesible desde cualquier sección.

## Estado del pedido (carrito)

El pedido vive en un **React Context** cliente (`OrderContext`), que envuelve la aplicación en `layout.tsx`.

```
OrderProvider
  state: items[]
  derivados: count, total
  acciones: add, setQty, remove, clear, open, close

Consumidores:
  - Navbar      → count (badge), open (abrir drawer)
  - Catalog     → add(product)
  - CartDrawer  → items, setQty, remove, clear, total  → genera link de WhatsApp
  - ContactForm → items, total  → muestra resumen y envía al endpoint
```

**Por qué Context y no estado local**: los ítems deben compartirse entre secciones hermanas (catálogo agrega, navbar y drawer muestran, formulario resume). Context evita prop-drilling y no requiere dependencias externas.

**Persistencia**: el pedido es efímero (en memoria). Se materializa al enviarlo por WhatsApp o por el endpoint. Persistir en `localStorage` queda como mejora futura.

## Flujo de compra / pedido

```
1. Usuario filtra el catálogo (Catalog) → elige categoría.
2. Clic en "Agregar" → OrderContext.add(product) → se abre el CartDrawer.
3. En el drawer ajusta cantidades → total estimado.
4a. "Enviar pedido por WhatsApp" → armara un deep-link wa.me con el detalle.
4b. O bien va al formulario (ContactForm) → incluye el resumen del pedido.
5. ContactForm hace POST /api/order → el endpoint valida y responde { ok: true }.
```

## Endpoint `POST /api/order`

| Aspecto | Detalle |
|---------|---------|
| Archivo | `src/app/api/order/route.ts` |
| Entrada | JSON: `name`, `email`, `phone`, `topic`, `message`, `order[]`, `total` |
| Validación | Nombre, teléfono y formato de correo |
| Respuestas | `200 { ok: true }` · `422 { ok:false, errors }` · `400` JSON inválido |
| Persistencia | `console.log` (hook listo para Resend/DB) |

## Recursos y arte

| Recurso | Implementación |
|---------|----------------|
| Logo | `next/image` desde `/public/logo.png` |
| Fotografía de producto | `next/image` remota (Pexels CDN) por producto en `products.ts` |
| Fotografía de sección | Hero y Origen con `next/image` remota |
| Iconos | SVG inline (`Icons.tsx`) |
| Fondo del hero | Gradientes + blobs animados (CSS) |
| Textura | Overlay de ruido con SVG `feTurbulence` en `globals.css` |
| Curvas topográficas | SVG en `Origin.tsx` |

## Animaciones

| Animación | Técnica |
|-----------|---------|
| Aparición al scroll | `Reveal` con IntersectionObserver + clases CSS |
| Marquee | `@keyframes marquee` sobre una lista duplicada |
| Flotación de elementos | `@keyframes float` |
| Blobs orgánicos | `@keyframes blob` con `border-radius` animado |
| Respeto a accesibilidad | `prefers-reduced-motion` desactiva animaciones |

## Rendimiento

- La home se **pre-renderiza** (SSG): `○ (Static)`.
- JS compartido ≈ 102 kB; la página aporta ≈ 14 kB propios.
- El endpoint es la única ruta dinámica (`ƒ`).
