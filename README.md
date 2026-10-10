# Feeding Life Coffee Shop

Landing page interactiva para una tienda de café de origen local: catálogo filtrable con carrito, historia de origen, proceso, testimonios y pedidos por WhatsApp.

Construida con **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4**, lista para desplegar en **Vercel**.

> **Demo en vivo:** https://feeding-life-coffee-shop.vercel.app

---

## Inicio rápido

Requisitos: **Node.js 18+** y **pnpm** (el proyecto exige `pnpm@10.33.4` vía `packageManager`).

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`.

### Scripts

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Servidor de desarrollo con recarga en caliente |
| `pnpm build` | Build de producción |
| `pnpm start` | Sirve el build de producción |
| `pnpm lint` | ESLint (`next lint`) |

---

## Características

- **Hero** con fotografía real, logo de marca y acentos tipográficos.
- **Catálogo** filtrable por categoría con carrito de pedido persistente.
- **Origen** con la historia de la finca, pilares y cita del productor.
- **Proceso** de tueste en 4 pasos.
- **Testimonios** de clientes.
- **Contacto / pedidos**: formulario validado + envío por WhatsApp y endpoint `POST /api/order`.
- **Diseño responsive**, con animaciones de aparición accesibles.

---

## Estructura del proyecto

```
src/
├── app/                # layout, página principal y endpoint de pedidos
│   └── api/order/      # POST /api/order — validación del pedido
├── components/
│   ├── site/           # secciones de la landing + estado del carrito
│   └── ui/             # iconografía SVG y animación de reveal
├── fonts/              # fuentes locales de la marca
└── lib/
    ├── site.ts         # configuración del sitio (contacto, navegación…)
    └── products.ts     # catálogo de productos y categorías
```

---

## Personalización

| Quiero cambiar… | Archivo |
|-----------------|---------|
| Datos de contacto, WhatsApp, redes, navegación | `src/lib/site.ts` |
| Productos, categorías, precios, imágenes | `src/lib/products.ts` |
| Colores, tipografías y utilidades de diseño | `src/app/globals.css` (`@theme`) |
| Imágenes remotas permitidas | `next.config.ts` (`images.remotePatterns`) |

Los precios son enteros en **COP** y se formatean automáticamente con `currency()`.

### Pedidos (`POST /api/order`)

Valida `name`, `phone` y `email`; responde `200` (éxito), `422` (validación) o `400` (JSON inválido). La persistencia es un *hook*: hoy solo registra en consola (`src/app/api/order/route.ts`), listo para conectar un proveedor de correo (p. ej. Resend) o una base de datos.

---

## Despliegue (Vercel)

```bash
pnpm add -g vercel   # una sola vez
vercel login         # autenticación
vercel --prod        # despliegue a producción
```

Vercel detecta Next.js automáticamente y usa `pnpm` gracias al `pnpm-lock.yaml`. Ver la guía completa en [`SDD/07-despliegue.md`](./SDD/07-despliegue.md).

---

## Marca

Paleta cálida de café con el verde de marca como **acento puntual**.

| Elemento | Detalle |
|----------|---------|
| Acento principal | `caramel` `#c98b4b` |
| Superficies claras | `cream` `#faf5ec`, `sand` `#f1e6d3` |
| Tinta / fondos oscuros | `coffee-900` `#2b1a11` → `coffee-950` `#1b0f09` |
| Acento de marca (verde) | `brand-500` `#00de45` — solo en detalles |

Tipografías: **Poppins** (títulos e interfaz), **Nunito** (cuerpo) y **Another shabby** (exclusivamente decorativa). Reglas y tokens completos en [`SDD/04-brand-guidelines.md`](./SDD/04-brand-guidelines.md).

---

## Documentación SDD

El proyecto se desarrolló bajo **Spec-Driven Development**. Toda la documentación está en la carpeta [`SDD/`](./SDD/README.md): especificación, plan técnico, arquitectura, brand guidelines, decisiones (ADR), tareas, despliegue y verificación.

---

## Estado

- [x] Build de producción (`pnpm build`) sin errores
- [x] Lint sin warnings (`pnpm lint`) y tipos verificados en el build
- [x] Desplegado en Vercel — https://feeding-life-coffee-shop.vercel.app
