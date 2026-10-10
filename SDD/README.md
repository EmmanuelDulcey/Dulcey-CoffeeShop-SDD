# SDD — Feeding Life Coffee Shop

Documentación completa bajo el flujo **Spec-Driven Development (SDD)** para la landing page interactiva de la tienda de café de origen local.

> **Objetivo**: que cualquier persona pueda **entender, mantener y replicar** el proyecto solo con esta carpeta.

## Ruta rápida

1. Lee [`01-especificacion.md`](./01-especificacion.md) para saber **qué** se construyó y por qué.
2. Lee [`02-plan-tecnico.md`](./02-plan-tecnico.md) y [`03-arquitectura.md`](./03-arquitectura.md) para saber **cómo**.
3. Sigue [`07-despliegue.md`](./07-despliegue.md) para publicarlo en Vercel.
4. Verifica con [`08-verificacion.md`](./08-verificacion.md).

## Índice de documentos

| # | Documento | Contenido |
|---|-----------|-----------|
| 00 | [Constitución](./00-constitucion.md) | Principios y reglas del proyecto |
| 01 | [Especificación](./01-especificacion.md) | Requisitos funcionales y no funcionales, alcance |
| 02 | [Plan técnico](./02-plan-tecnico.md) | Stack, dependencias, estructura de carpetas |
| 03 | [Arquitectura](./03-arquitectura.md) | Componentes, flujo de datos, interactividad |
| 04 | [Brand guidelines](./04-brand-guidelines.md) | Colores, tipografías, logo, tono visual |
| 05 | [Decisiones (ADR)](./05-decisiones.md) | Registro de decisiones de arquitectura |
| 06 | [Tareas](./06-tareas.md) | Desglose de trabajo ejecutado |
| 07 | [Despliegue](./07-despliegue.md) | Guía de despliegue en Vercel |
| 08 | [Verificación](./08-verificacion.md) | Evidencia de build, lint y pruebas manuales |

## Flujo SDD seguido

```
Constitución → Especificación → Plan → Arquitectura → Tareas → Implementación → Verificación → Despliegue
   00              01            02        03           06          (código)         08           07
```

## Estado del proyecto

| Aspecto | Estado |
|---------|--------|
| Build de producción (`pnpm build`) | ✅ Exitoso |
| Lint (`pnpm lint`) | ✅ Sin warnings ni errores |
| Type checking | ✅ Incluido en el build |
| Despliegue Vercel | ✅ **https://feeding-life-coffee-shop.vercel.app** |
