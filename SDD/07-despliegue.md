# 07 — Despliegue en Vercel

Guía para publicar la landing y obtener una URL funcional.

> **Estado: desplegado y en producción** ✅
> - **URL de producción**: https://feeding-life-coffee-shop.vercel.app
> - **Proyecto Vercel**: `emmanuel-team1/feeding-life-coffee-shop`
> - **Deployment ID**: `dpl_nCGiNq4oXKU5aaC81dkgSiACQVPi` (READY)
> - **Build en Vercel**: 51 s · Next.js 15.5.27 · pnpm@10.x

## Requisitos previos

- Cuenta en [vercel.com](https://vercel.com) (plan Hobby es suficiente).
- Repositorio en Git (GitHub/GitLab/Bitbucket) **o** la Vercel CLI.
- pnpm instalado.

## Opción A — Vercel CLI (rápida)

```bash
# 1. Instalar la CLI (una sola vez)
pnpm add -g vercel

# 2. Autenticarse (abre el navegador)
vercel login

# 3. Desde la raíz del proyecto, previsualización
vercel

# 4. Producción
vercel --prod
```

En la primera ejecución, acepta los valores por defecto:

| Pregunta | Respuesta |
|----------|-----------|
| Set up and deploy? | `Y` |
| Which scope? | tu cuenta |
| Link to existing project? | `N` |
| Project name? | `feeding-life-coffee-shop` |
| Directory? | `./` |
| Override settings? | `N` |

Vercel detecta Next.js automáticamente y usa `pnpm` (por el `pnpm-lock.yaml`). No se requiere configuración adicional.

## Opción B — Dashboard + Git

1. Sube el repositorio a GitHub.
2. En Vercel: **Add New → Project → Import** del repositorio.
3. Framework preset: **Next.js** (autodetectado).
4. Build command: `pnpm build` · Install: `pnpm install` · Output: `.next` (por defecto).
5. **Deploy**.

Cada push a `main` despliega a producción; las ramas generan *previews*.

## Variables de entorno (opcionales)

| Variable | Valor | Efecto |
|----------|-------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://<tu-dominio>` | URLs absolutas en Open Graph |

## Verificación post-despliegue

- [ ] La URL `.vercel.app` carga la landing.
- [ ] Los títulos usan la tipografía con contorno.
- [ ] El filtro de catálogo y el carrito funcionan.
- [ ] El botón de WhatsApp abre `wa.me` con el pedido.
- [ ] El formulario responde con éxito.
- [ ] Se ve bien en móvil.

## Replicar el proyecto desde cero

```bash
pnpm install
pnpm dev        # desarrollo en http://localhost:3000
pnpm build      # build de producción
pnpm start      # servir el build
```

Los assets de marca ya están copiados en `public/` y `src/fonts/`; no se necesitan descargas adicionales.
