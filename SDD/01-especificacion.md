# 01 — Especificación

## Resumen

Landing page interactiva y moderna para **Feeding Life Coffee Shop**, una tienda de café de origen local. Debe presentar el catálogo de productos, contar la historia de origen y permitir enviar pedidos o contactar a la tienda.

**Resultado esperado**: una página única (one-page) publicada en Vercel, funcional y visualmente atractiva.

## Alcance

### Dentro del alcance

- One-page con secciones: navegación, hero, catálogo, origen, proceso, testimonios, contacto/pedidos y footer.
- Catálogo filtrable por categorías con carrito de pedido.
- Formulario de contacto/pedidos con validación y endpoint de recepción.
- Identidad de marca aplicada (colores, tipografías, logo).
- Diseño responsive e interactivo.
- Documentación SDD completa.

### Fuera del alcance (por ahora)

- Pasarela de pagos real.
- Base de datos y autenticación.
- Panel de administración.
- Envío de correos transaccionales (queda como hook documentado).

## Requisitos funcionales

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RF-01 | Mostrar logo y navegación sticky con enlaces a secciones | Alta |
| RF-02 | Hero con nombre de marca, propuesta de valor y CTAs | Alta |
| RF-03 | Catálogo de productos con filtro por categoría | Alta |
| RF-04 | Agregar productos a un pedido (carrito) con cantidades y total | Alta |
| RF-05 | Enviar el pedido por WhatsApp con el detalle formateado | Alta |
| RF-06 | Sección de origen con historia y datos de la finca | Media |
| RF-07 | Sección de proceso (4 pasos) | Media |
| RF-08 | Testimonios de clientes | Baja |
| RF-09 | Formulario de contacto/pedidos con validación | Alta |
| RF-10 | Persistir/recibir el pedido vía endpoint `POST /api/order` | Media |
| RF-11 | Footer con contacto y redes | Media |
| RF-12 | Menú móvil y drawer de carrito accesibles | Media |

## Requisitos no funcionales

| ID | Requisito |
|----|-----------|
| RNF-01 | Responsive de 320 px a 2560 px |
| RNF-02 | Carga rápida: página pre-renderizada (SSG), JS de cliente mínimo |
| RNF-03 | Accesibilidad: foco visible, `aria-*`, contraste AA, `prefers-reduced-motion` |
| RNF-04 | Tipografía de marca con contorno grueso (2.5 pt) legible |
| RNF-05 | Sin dependencias de animación/iconos externas |
| RNF-06 | Código tipado (TypeScript estricto) |

## Criterios de aceptación

- [ ] El usuario puede filtrar el catálogo por categoría y ver solo esos productos.
- [ ] El usuario puede agregar productos; el contador del carrito se actualiza.
- [ ] El drawer muestra ítems, cantidades, subtotales y total estimado.
- [ ] El botón de WhatsApp abre `wa.me` con el pedido formateado.
- [ ] El formulario valida nombre, teléfono y correo; muestra estado de éxito/error.
- [ ] Incluye el resumen del pedido actual si hay productos en el carrito.
- [ ] La página se ve correctamente en móvil y escritorio.

## Contenido de ejemplo a reemplazar

Los datos comerciales están centralizados en `src/lib/site.ts` y `src/lib/products.ts`. Antes de publicar en producción, reemplazar:

- Teléfono de WhatsApp (`whatsappNumber`, `whatsappDisplay`).
- Correo, dirección, horario y redes sociales.
- Catálogo real de productos (nombres, precios, orígenes, notas).
