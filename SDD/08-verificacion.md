# 08 — Verificación

Evidencia de que el proyecto compila, pasa lint y cumple los criterios de aceptación.

## Comandos ejecutados

| Comando | Resultado |
|---------|-----------|
| `pnpm install` | ✅ 319 paquetes instalados |
| `pnpm build` | ✅ Compiló en ~8 s, 5 páginas generadas |
| `pnpm lint` | ✅ Sin warnings ni errores |

## Salida del build

```
▲ Next.js 15.5.27

Creating an optimized production build ...
 ✓ Compiled successfully
  Linting and checking validity of types ...
 ✓ Generating static pages (5/5)

Route (app)                                 Size  First Load JS
┌ ○ /                                    13.7 kB         116 kB
├ ○ /_not-found                            993 B         103 kB
└ ƒ /api/order                             122 B         102 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

**Lectura**: la home es estática (rápida, cacheable). El único endpoint dinámico es `/api/order`.

## Type-check

Ejecutado automáticamente dentro de `pnpm build` ("Linting and checking validity of types"). Sin errores de TypeScript.

## Checklist de aceptación

| Criterio | Estado |
|----------|--------|
| Filtrado del catálogo por categoría | ✅ `Catalog.tsx` |
| Agregar productos y contador | ✅ `OrderContext` + `Catalog` |
| Drawer con ítems, cantidades y total | ✅ `CartDrawer.tsx` |
| Envío por WhatsApp con detalle | ✅ `CartDrawer` / `ContactForm` |
| Validación del formulario | ✅ cliente + `POST /api/order` |
| Resumen del pedido en el formulario | ✅ `ContactForm` |
| Responsive móvil/escritorio | ✅ Tailwind mobile-first |
| Tipografía de marca | ✅ Poppins (títulos/UI) · Nunito (cuerpo) · Another shabby decorativo |
| Paleta cálida con verde como acento | ✅ `coffee-*` + `caramel`/`gold`; `brand-*` puntual |
| Fotografía real de producto | ✅ 12 productos + hero + origen vía `next/image` |
| Logo integrado | ✅ navbar, hero, footer, favicon |

## Verificación en producción

Tras desplegar en Vercel (`https://feeding-life-coffee-shop.vercel.app`):

| Prueba | Comando | Resultado |
|--------|---------|-----------|
| Home carga | `GET /` | ✅ 200 · HTML 150.7 KB |
| Título correcto | `GET /` | ✅ `Feeding Life Coffee Shop - Café de origen local` |
| Logo servido | `GET /logo.png` | ✅ 200 · 52.1 KB |
| Endpoint de pedidos | `POST /api/order` | ✅ 200 · `{"ok":true,"received":true}` |
| Imágenes remotas (v2) | `GET /_next/image?url=<pexels>` | ✅ 200 · `image/jpeg` |
| Fotografía en el HTML (v2) | `GET /` | ✅ referencia a `images.pexels.com` presente |

## Pruebas manuales recomendadas

1. `pnpm dev` y abrir `http://localhost:3000`.
2. Filtrar por "Filtrado" y "Cold Brew".
3. Agregar 2 productos → verificar badge y total en el drawer.
4. Abrir el link de WhatsApp y comprobar el mensaje.
5. Enviar el formulario → verificar estado de éxito.
6. Reducir la ventana a 320 px → comprobar el menú móvil.
7. Activar "reducir movimiento" en el SO → verificar que las animaciones se desactivan.

## Notas

- El endpoint `POST /api/order` registra el pedido en consola; no envía correos aún (hook documentado en `ADR-006`).
- El proyecto usa pnpm; no mezclar con npm/yarn para evitar lockfiles en conflicto.
