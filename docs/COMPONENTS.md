# Components — Yahir Alberto Portfolio

**Version:** 1.0
**Last Updated:** March 2026

Documentación de todos los componentes del portafolio.

---

## Layout

### `Navbar`
**File:** `src/components/layout/Navbar.tsx`
**Type:** `'use client'`

Barra de navegación sticky con glassmorphism. Se oculta al scrollear hacia abajo y reaparece al scrollear hacia arriba.

**Comportamiento de scroll:**
```
scrollY < 80px   → siempre visible
scrollY > 80px   → visible si currentY < lastScrollY (scroll up)
                 → hidden si currentY > lastScrollY (scroll down)
```

**Props:** Ninguna.

**Elementos:**
- Logo (`Yahir.`) — link a `#home`
- Links desktop: Sobre mí, Proyectos, Skills, Experiencia, Contacto
- CTA button: "Hablemos" → `#contact`
- Hamburger menu para mobile con animación `height: 0 → auto`

**Animación:** `navbarVariants` de `lib/animations.ts` — entrada/salida con `AnimatePresence`.

---

### `Footer`
**File:** `src/components/layout/Footer.tsx`
**Type:** `'use client'`

Footer simple con copyright y links sociales.

**Elementos:**
- Copyright con año dinámico
- GitHub, LinkedIn, Email con hover color transition

---

## Sections

### `Hero`
**File:** `src/components/sections/Hero.tsx`
**Type:** `'use client'`

Sección principal full-height. Primera impresión del portafolio.

**Elementos:**
- Background: grid decorativo + glow orb azul
- Badge "Disponible para proyectos" con dot verde animado
- H1 con nombre en gradient text
- Subtítulo de rol y tagline
- 2 CTAs: "Ver proyectos" (primary) + "Hablemos" (outlined)
- Social links (GitHub, LinkedIn, Email)
- Scroll indicator animado (bounce)

**Animación:** `heroEntrance` con `custom={delay}` incremental (0.1 → 0.7)

---

### `About`
**File:** `src/components/sections/About.tsx`
**Type:** `'use client'`

Layout 2 columnas: bio a la izquierda, stack pills a la derecha.

**Elementos:**
- Bio (párrafos del `personalInfo.bio`)
- Stats row: proyectos, años, porcentaje de entrega
- Stack pills (10 tecnologías principales)
- Banner de disponibilidad con dot verde

**Animación:** `slideInLeft` (bio) + `slideInRight` (stack)

---

### `Projects`
**File:** `src/components/sections/Projects.tsx`
**Type:** `'use client'`

Grid 2 columnas con todas las tarjetas de proyecto.

**Props de card:**
- Badge de status (`completed` / `in-progress` / `planned`)
- Links a GitHub y live (aparecen en hover)
- Tech stack como pills `bg-elevated`
- `whileHover={cardHover}` — glow azul + elevación

**Status config:**
| Status | Color | Ícono |
|---|---|---|
| `completed` | `#34D399` (green) | `CheckCircle` |
| `in-progress` | `#FBBF24` (amber) | `Clock` |
| `planned` | `#64748B` (slate) | `Clock` |

**Animación:** `staggerContainer` + `staggerItem` en grid

---

### `Skills`
**File:** `src/components/sections/Skills.tsx`
**Type:** `'use client'`

Grid 4 columnas (1 por categoría). Cada card lista las skills con dot azul.

**Estructura por card:**
- Emoji + nombre de categoría
- Lista de skills con dot `#3B82F6`

**Categorías:** Frontend, Backend, Bases de Datos, DevOps & Tools

**Animación:** `staggerContainer` + `staggerItem`

---

### `Experience`
**File:** `src/components/sections/Experience.tsx`
**Type:** `'use client'`

Timeline vertical. Cada item tiene dot azul (activo) o slate (anterior).

**Estructura por item:**
- Línea vertical `#1E293B`
- Dot: azul con glow si `current: true`, slate si no
- Card: rol, empresa (en azul), período, descripción (lista), tech pills
- Border del card: azul tenue si actual

**Animación:** `staggerContainer` + `staggerItem`

---

### `Contact`
**File:** `src/components/sections/Contact.tsx`
**Type:** `'use client'`

3 cards de contacto + CTA de email.

**Cards:** Email, GitHub, LinkedIn — cada una con ícono, valor y descripción.

**CTA:** Link `mailto:` con subject y body pre-populados.

**Animación:** `staggerContainer` en cards + `fadeInUp` en CTA

---

## Lib

### `src/lib/data.ts`
Fuente única de todos los datos del portafolio. Exporta:

| Exportación | Tipo | Descripción |
|---|---|---|
| `personalInfo` | `PersonalInfo` | Nombre, bio, contacto, disponibilidad |
| `projects` | `Project[]` | 4 proyectos reales |
| `skillCategories` | `SkillCategory[]` | 4 categorías con skills |
| `experience` | `ExperienceItem[]` | 2 experiencias laborales |
| `socialLinks` | `SocialLink[]` | GitHub, LinkedIn, Email |

### `src/lib/animations.ts`
Variantes Framer Motion reutilizables. Ver `ANIMATIONS.md` para detalle.

---

## Types

### `src/types/index.ts`

```typescript
interface Project          // Proyecto con status, tech, links
interface Skill            // Skill individual con nivel opcional
interface SkillCategory    // Categoría agrupadora de skills
interface ExperienceItem   // Ítem del timeline de experiencia
interface SocialLink       // Link social con icon identifier
interface PersonalInfo     // Info personal completa
```
