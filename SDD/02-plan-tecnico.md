# 02 — Plan técnico

## Stack

| Capa | Tecnología | Versión | Motivo |
|------|-----------|---------|--------|
| Framework | Next.js (App Router) | 15.x | SSG, server components, despliegue nativo en Vercel |
| Lenguaje | TypeScript | 5.x (strict) | Seguridad de tipos |
| UI | React | 19.x | Base del framework |
| Estilos | Tailwind CSS | 4.x | Utilidades, tokens de tema, responsive |
| Build de CSS | `@tailwindcss/postcss` | 4.x | Pipeline oficial de Tailwind v4 |
| Lint | ESLint + `eslint-config-next` | 9.x / 15.x | Convenciones Next.js |
| Paquetes | pnpm | 10.x | Preferencia del proyecto (rápido, estricto) |
| Hosting | Vercel | — | Integración con Next.js |

> **Sin dependencias extra de UI**: animaciones con CSS (`@keyframes` + IntersectionObserver) e iconos con SVG inline.

## Estructura de carpetas

```
Dulcey-CoffeeShop-SDD/
├── Brand/                    # Assets originales del cliente (logo + fuentes)
├── SDD/                      # Esta documentación
├── public/
│   └── logo.png              # Logo (copia con nombre limpio)
├── src/
│   ├── app/
│   │   ├── api/order/route.ts   # Endpoint de recepción de pedidos
│   │   ├── globals.css          # Design tokens + estilos base
│   │   ├── layout.tsx           # Shell, fuentes, metadata, OrderProvider
│   │   └── page.tsx             # Composición de secciones
│   ├── components/
│   │   ├── site/                # Secciones de la landing + estado de pedido
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── Catalog.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── OrderContext.tsx
│   │   │   ├── Origin.tsx
│   │   │   ├── Process.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui/
│   │       ├── Icons.tsx        # Iconos SVG inline
│   │       └── Reveal.tsx       # Animación de aparición al hacer scroll
│   ├── fonts/                   # Fuentes locales (copias con nombres limpios)
│   └── lib/
│       ├── products.ts          # Catálogo (datos + URL de foto por producto)
│       └── site.ts              # Config del sitio + formato de moneda
├── next.config.ts               # reactStrictMode + images.remotePatterns (Pexels)
├── postcss.config.mjs
├── tailwind (vía @theme en globals.css)
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Scripts

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Servidor de desarrollo (`http://localhost:3000`) |
| `pnpm build` | Build de producción |
| `pnpm start` | Servir el build de producción |
| `pnpm lint` | Linter |

## Convenciones

- **Idioma del código**: inglés (identificadores, nombres de archivos, comentarios solo si aportan).
- **Idioma del contenido**: español (copy visible).
- **Componentes**: server components por defecto; `"use client"` solo cuando hay estado/efectos.
- **Rutas de importación**: alias `@/*` → `src/*`.
- **Estilos**: utilidades de Tailwind + tokens de tema; clases de marca personalizadas en `globals.css`.

## Variables de entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | URL pública para `metadataBase` (Open Graph). En Vercel se puede omitir. |
| `RESEND_API_KEY` | No | Reservada para conectar el envío de correos en `api/order`. |
