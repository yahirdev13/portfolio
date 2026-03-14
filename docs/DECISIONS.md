# Decisions Log — Yahir Alberto Portfolio

**Version:** 1.0
**Last Updated:** March 2026

Registro de decisiones técnicas y de diseño, con justificación.

---

## ADR-001: Tailwind CSS v4 sin `tailwind.config.ts`

**Decisión:** Usar Tailwind v4 con tokens en `globals.css` mediante `@theme`.

**Justificación:**
- Tailwind v4 es el estándar actual; config JS es legacy
- Tokens en CSS son más explícitos, fáciles de leer y debuggear en DevTools
- Elimina un archivo de configuración del repositorio

**PostCSS config:**
```js
{ plugins: { '@tailwindcss/postcss': {} } }
```

---

## ADR-002: 100% SSG — Sin backend

**Decisión:** El portafolio es completamente estático. Todos los datos viven en `lib/data.ts`.

**Justificación:**
- Un portafolio no necesita datos dinámicos en el servidor
- SSG en Vercel = CDN global, TTFB <50ms desde cualquier región
- Sin costos de servidor, sin cold starts, sin timeouts
- Mantenimiento mínimo

**Trade-off aceptado:** Actualizar contenido requiere editar el código y hacer redeploy. Aceptable para un desarrollador.

---

## ADR-003: Framer Motion para animaciones

**Decisión:** Usar Framer Motion en lugar de CSS animations o GSAP.

**Justificación:**
- Integración nativa con React (declarativo)
- `whileInView` con `once: true` es exactamente lo que se necesita
- `AnimatePresence` para Navbar hide/show sin overhead
- Variantes reutilizables en `lib/animations.ts` evitan repetición
- Yahir ya usa Framer Motion en Cleany SaaS — consistencia de stack

**Trade-off:** ~80KB adicionales en bundle. Aceptable para un portafolio.

---

## ADR-004: `'use client'` solo donde es necesario

**Decisión:** `page.tsx` es Server Component. Solo los componentes con hooks o event handlers tienen `'use client'`.

**Regla aplicada:**
- ¿Usa `useEffect`, `useState`, hooks de FM, o event handlers? → `'use client'`
- ¿Solo renderiza JSX estático? → Server Component (no directiva)

**Resultado:** `page.tsx`, `layout.tsx` son Server Components. Todos los demás son Client Components porque usan Framer Motion.

---

## ADR-005: Glassmorphism solo en Navbar

**Decisión:** El efecto glassmorphism (`backdrop-blur`) se aplica únicamente al Navbar sticky.

**Justificación:**
- Overuso de glassmorphism se ve genérico y pesado
- En dark mode intenso (#0F172A), el glassmorphism solo tiene sentido cuando hay contenido debajo que desenfoca
- El Navbar es el único elemento que cumple esta condición constantemente

---

## ADR-006: Formulario con `mailto:` fallback

**Decisión:** No implementar backend para el formulario de contacto. Usar link `mailto:` con subject y body pre-populados.

**Justificación:**
- Un portafolio de desarrollador no necesita formulario back-end
- Los clientes serios prefieren email directo
- Elimina dependencia de servicios externos (Resend, EmailJS, SMTP)
- Zero cost, zero maintenance

**Upgrade path documentado en `.env.example`:** Si se requiere formulario real, usar Resend.

---

## ADR-007: Datos en TypeScript, no en JSON/MDX

**Decisión:** Los datos del portafolio viven en `lib/data.ts` como constantes TypeScript tipadas.

**Alternativas consideradas:**
- JSON files → sin type checking
- MDX → overhead para contenido no-prose
- CMS (Contentful, Sanity) → innecesario para datos que no cambian frecuentemente

**Justificación:**
- Type checking completo: si se agrega un campo a la interfaz, TypeScript obliga a actualizar los datos
- Autocomplete en el editor
- Sin build complexity adicional
- Un solo archivo a editar para actualizar todo el contenido

---

## ADR-008: Color azul #3B82F6 como primario

**Decisión:** Usar `#3B82F6` (Tailwind `blue-500`) como color primario.

**Justificación:**
- Es el azul de Tailwind CSS — reconocible por la comunidad dev como señal de identidad técnica
- Alta legibilidad sobre `#0F172A` (slate-900): contraste ~5.5:1
- Se diferencia del indigo del design system de Cleany
- Suficientemente saturado para glow effects (`box-shadow: 0 0 20px rgba(59,130,246,0.3)`)

---

## ADR-009: `viewport={{ once: true }}`

**Decisión:** Todas las animaciones scroll se disparan solo la primera vez que entran al viewport.

**Justificación:**
- Re-animar elementos al hacer scroll up/down es distractor
- Muestra más profesionalismo y subtileza
- Mejor performance (Framer Motion no recalcula en cada re-entry)

---

## Checklist de Verificación Final

- [x] `npm run build` pasa sin errores TypeScript
- [x] Build output: `○ /` (Static)
- [x] Navbar hide/show funciona correctamente
- [x] Hover glow en project cards visible
- [x] Animaciones se disparan solo `once: true`
- [x] `'use client'` solo donde es necesario
- [x] Datos reales en `lib/data.ts` (no datos de ejemplo)
- [x] SEO metadata completa en `layout.tsx`
- [x] `vercel.json` presente
- [x] `.env.example` documentado
