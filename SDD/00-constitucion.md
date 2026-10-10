# 00 — Constitución del proyecto

Reglas no negociables que guían todas las decisiones de este proyecto.

## Principios

1. **La marca manda.** Todo elemento visual respeta los colores, tipografías y el logo oficiales definidos en [`04-brand-guidelines.md`](./04-brand-guidelines.md).
2. **Responsive primero.** El diseño debe verse impecable desde 320 px hasta pantallas grandes. Mobile-first con Tailwind.
3. **Interactivo y moderno.** Animaciones sutiles, transiciones suaves y microinteracciones; nunca en detrimento del rendimiento o la accesibilidad.
4. **Rendimiento.** Página estática donde sea posible; JavaScript de cliente solo para lo interactivo (islas).
5. **Accesibilidad.** Contraste suficiente, navegación por teclado, `aria-label` en controles, respeto a `prefers-reduced-motion`.
6. **Contenido en español.** La interfaz y el copy están en español (mercado local). Los identificadores de código, en inglés.
7. **Documentación como producto.** El flujo SDD se materializa en `.md`; la documentación debe bastar para replicar el proyecto.
8. **Sin dependencias innecesarias.** Preferir CSS e inline SVG antes que librerías pesadas de animación o iconos.

## Restricciones

| Restricción | Valor |
|-------------|-------|
| Gestor de paquetes | **pnpm** (obligatorio) |
| Framework | Next.js (App Router) + TypeScript |
| Estilos | Tailwind CSS v4 |
| Despliegue | Vercel |
| Fuentes | Locales (provistas por el cliente) |
| Assets de imagen | Solo logo + SVG generados; sin imágenes de stock |

## Definición de "terminado"

- [x] Build de producción sin errores.
- [x] Lint y type-check sin errores.
- [x] Todas las secciones de la especificación implementadas.
- [x] Responsive verificado en móvil, tablet y escritorio.
- [x] Desplegado y accesible por URL pública de Vercel: https://feeding-life-coffee-shop.vercel.app
