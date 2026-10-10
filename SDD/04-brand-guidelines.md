# 04 — Brand guidelines

Identidad visual de **Feeding Life Coffee Shop** y su implementación técnica.

> **v2 (rediseño cálido).** Se mantienen los dos colores núcleo de marca como
> **acento**, pero el lenguaje visual dominante pasa a ser una paleta cálida de
> café (cremas, caramelo, moka y espresso). Se invierte la jerarquía tipográfica:
> **Poppins** lidera títulos e interfaz, **Nunito** el cuerpo, y **Another shabby**
> queda reservada a destellos decorativos. Los productos usan **fotografía real**.

## Logo

| Aspecto | Regla |
|---------|-------|
| Archivo original | `Brand/Logo/Logo.png` |
| Copia en el sitio | `public/logo.png` |
| Usos | Navbar (44 px), hero (badge circular sobre la foto), footer (48 px), favicon |
| Fondo recomendado | Sobre círculo claro (`bg-cream`) o sobre moka oscuro |
| No hacer | Deformar, recolorear fuera de los tonos de marca, aplicar sombras duras |

## Color

### Colores núcleo (ahora como **acento**)

| Token | Hex | Rol |
|-------|-----|-----|
| `brand-500` | `#00de45` | **Verde brillante** — acento puntual (badges, detalles, energía) |
| `brand-950` / `brand-900` | `#003c25` / `#00501f` | **Verde profundo** — reservado; aparece de forma sutil |

> Regla v2: el verde **no** domina superficies. Se usa en detalles pequeños
> (punto del acento de suscripción, glows sutiles, indicadores), nunca como color
> principal de secciones ni de botones primarios.

### Superficies (neutros cálidos)

| Token | Hex | Uso |
|-------|-----|-----|
| `cream` | `#faf5ec` | Fondo base claro, texto sobre oscuro |
| `sand` | `#f1e6d3` | Fondos de sección alternos |
| `latte` | `#e8d5b5` | Detalles suaves |

### Café (tinta oscura — reemplaza a la antigua escala "forest")

| Token | Hex | Uso |
|-------|-----|-----|
| `coffee-50..950` | `#f8f2ec` → `#1b0f09` | Texto, fondos oscuros, botones, bordes |
| `coffee-900` | `#2b1a11` | Tinta principal sobre fondo claro |
| `coffee-800` | `#3f281c` | Superficies café |
| `coffee-950` | `#1b0f09` | Fondos oscuros (hero, origen, contacto, footer) |

### Acentos cálidos (protagonistas v2)

| Token | Hex | Uso sugerido |
|-------|-----|--------------|
| `caramel` | `#c98b4b` | **Acento principal** — CTAs, iconos, marquee, subrayados |
| `caramel-dark` | `#9a5a24` | Eyebrows / texto de acento sobre claro |
| `gold` | `#e8b44a` | Brillo, degradados, valores destacados |
| `terracotta` | `#c5663f` | Acento secundario cálido |

Escalas completas disponibles como utilidades Tailwind: `brand-50..950`,
`coffee-50..950` (definidas en `src/app/globals.css` con `@theme`).

### Reglas de contraste

- Texto oscuro (`coffee-900`) sobre `cream`/`sand`.
- Texto claro (`cream`) sobre `coffee-900`/`coffee-950`.
- Botones primarios: `caramel` con texto `coffee-950` (contraste AA).
- `brand-500` solo como micro-acento; si se usa como relleno, llevar texto `coffee-950`.

## Tipografía

| Familia | Archivo(s) | Rol (v2) | Variable CSS |
|---------|-----------|----------|--------------|
| **Poppins** | `Brand/Fuentes/Poppins/*` (estática) | **Fuente principal** — títulos y UI | `--font-poppins` |
| **Nunito** | `Brand/Fuentes/Nunito/*` (variable) | Texto de cuerpo | `--font-nunito` |
| **Another shabby** | `Brand/Fuentes/Another shabby light/*` | Decorativo **solamente** | `--font-shabby` |

Copias en el proyecto: `src/fonts/` con nombres limpios (sin espacios).

Mapeo de variables del tema (`@theme`):

| Variable | Familias que la consumen |
|----------|--------------------------|
| `--font-display` | Poppins (títulos `.font-display`) |
| `--font-ui` | Poppins (etiquetas, botones, eyebrows) |
| `--font-body` | Nunito (párrafos `.font-body`) |
| `--font-script` | Another shabby (clase `.script`) |

### Regla clave — shabby **solo** decorativo

`Another shabby` aparece únicamente como **flourish** (palabras sueltas rotadas,
acentos manuscritos), con la clase `.script`:

```css
.script {
  font-family: var(--font-script);
  font-weight: 400;
  line-height: 0.95;
}
```

La variante heredada `.shabby` (contorno grueso de 2.5 pt, `paint-order: stroke fill`)
se conserva como recurso de marca disponible, pero **ya no se usa en títulos**:

| Clase | Resultado |
|-------|-----------|
| `.stroke-coffee` | Contorno café oscuro (por defecto de `.shabby`) |
| `.stroke-cream` | Contorno claro (sobre fondos oscuros) |
| `.stroke-caramel` | Contorno caramelo |
| `.stroke-brand` | Contorno verde brillante |

### Jerarquía tipográfica

| Nivel | Fuente | Tamaño (clamp) |
|-------|--------|----------------|
| H1 (hero) | Poppins `font-extrabold` | `clamp(2.75rem, 7.5vw, 6rem)` |
| H2 (secciones) | Poppins `font-extrabold` | `clamp(2.25rem, 5vw, 4rem)` |
| H3 (tarjetas) | Poppins `font-bold` | `1.25rem`–`1.5rem` |
| Cuerpo | Nunito | `1rem`–`1.125rem` |
| Etiquetas / botones | Poppins | `0.75rem`–`0.875rem`, mayúsculas, `tracking` amplio |
| Acentos decorativos | Another shabby (`.script`) | `2rem`–`2.5rem` |

## Fotografía de producto

- Productos, hero y origen usan **fotografía real** (Pexels CDN).
- Origen permitido en `next.config.ts` → `images.remotePatterns` para
  `images.pexels.com` (`/photos/**`).
- Formatos servidos mediante `next/image` (optimización, `srcset`, `sizes`).
- Tratamiento: `object-cover`, esquinas `rounded-3xl`, degradado sutil
  `from-coffee-950/35` para legibilidad de badges.

## Tono visual

- **Moderno y cálido**: glassmorphism sutil, esquinas redondeadas (`rounded-3xl`),
  sombras suaves.
- **Orgánico**: blobs animados, curvas topográficas, formas redondeadas.
- **Con textura**: overlay de ruido muy leve para dar profundidad.
- **Cálido, no verde**: la energía viene del caramelo/oro; el verde de marca es
  un destello, no la base.

## Iconografía

- SVG inline, trazo `1.8`, esquinas redondeadas.
- Colección en `src/components/ui/Icons.tsx`.

## Tono de voz (copy)

- Cercano, artesanal, honesto. Español neutro.
- Habla de origen, familias productoras, frescura y comunidad.
- Evita superlativos vacíos; prefiere lo concreto (altitud, proceso, notas de cata).
