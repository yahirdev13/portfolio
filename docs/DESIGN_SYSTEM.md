# Design System — Yahir Alberto Portfolio
## Dark Mode Developer Portfolio Visual Identity

> Profesional, moderno, técnico — con personalidad de builder

**Version:** 1.0
**Color Palette:** Deep Slate + Primary Blue
**Last Updated:** March 2026
**Brand Personality:** Profesional, Directo, Técnico, Confiable

---

## Brand Identity

### Quién soy
Un portafolio para Yahir Alberto, Full-Stack Developer freelancer. El design system comunica competencia técnica real sin aspecto genérico: dark mode intenso, tipografía precisa, animaciones sutiles que muestran dominio de Framer Motion.

### Personalidad de Marca

**Valores:**
- **Técnico** — Código real, proyectos reales, sin demos de juguete
- **Directo** — Copy claro, sin buzzwords vacías
- **Confiable** — Proyectos completados y en producción
- **Moderno** — Stack actual, diseño dark mode de alta calidad

**Audiencia:**
- Empresas y startups buscando desarrollador freelancer
- CTOs / co-founders early-stage en LATAM y México
- Clientes con proyectos web full-stack reales

---

## Color System

### Background Layers

```css
--color-bg-base:     #0F172A;   /* slate-900 — fondo principal */
--color-bg-surface:  #1E293B;   /* slate-800 — cards, panels */
--color-bg-elevated: #334155;   /* slate-700 — dropdowns, tags */
```

**Rationale:** Tres capas crea profundidad visual. `bg-base` es el canvas. `bg-surface` eleva el contenido. `bg-elevated` son micro-elementos como pills de tecnología.

### Primary Blue — #3B82F6

```css
--color-primary-400: #60A5FA;   /* hover text, accents */
--color-primary-500: #3B82F6;   /* MAIN — botones, links, dots */
--color-primary-600: #2563EB;   /* hover state de botones */
--color-primary-700: #1D4ED8;   /* active / pressed */
```

**Rationale:** El azul #3B82F6 es el color de Tailwind CSS que la comunidad dev reconoce inmediatamente. Funciona como señal de identidad técnica sin ser genérico — es lo suficientemente saturado para destacar en dark mode.

### Text Hierarchy

```css
--color-text-primary:   #F1F5F9;  /* slate-100 — headings, nombres */
--color-text-secondary: #94A3B8;  /* slate-400 — body, descripciones */
--color-text-muted:     #64748B;  /* slate-500 — metadata, fechas */
```

### Borders

```css
--color-border-subtle:  rgba(148, 163, 184, 0.10);  /* cards normales */
--color-border-default: rgba(148, 163, 184, 0.20);  /* separadores */
--color-border-focus:   #3B82F6;                    /* inputs, active */
```

### Semantic Colors

| Token | Value | Uso |
|---|---|---|
| `--color-success` | `#34D399` | "Disponible", proyectos completados |
| `--color-warning` | `#FBBF24` | Proyectos en progreso |
| `--color-error`   | `#F87171` | Errores |
| `--color-info`    | `#38BDF8` | Información neutral |

---

## Typography

**Fuente:** Inter (Google Fonts)

| Role | Size | Weight | Color |
|---|---|---|---|
| Hero H1 | `5xl–7xl` | `700` | `text-primary` con gradient |
| Section H2 | `3xl–4xl` | `700` | `text-primary` |
| Card H3 | `xl` | `700` | `text-primary` |
| Body | `base` | `400` | `text-secondary` |
| Label/Meta | `sm` | `400–500` | `text-muted` |
| Badge | `xs` | `600` | Semántico |
| Section eyebrow | `sm` | `600` uppercase | `primary-500` |

**Gradient Text** (usado en nombre en Hero):
```css
background: linear-gradient(135deg, #F1F5F9, #3B82F6);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Glassmorphism

Usado en **Navbar** (sticky en scroll).

```css
backdrop-filter: blur(24px);
background: rgba(15, 23, 42, 0.80);
border-bottom: 1px solid rgba(148, 163, 184, 0.10);
```

**Reglas:**
- Solo en elementos que flotan sobre contenido (Navbar, modals futuras)
- Opacity del background: mínimo 0.75 para mantener legibilidad
- `backdrop-blur-xl` = `blur(24px)` — no más

---

## Gradients

```css
/* Hero background */
--gradient-hero: linear-gradient(135deg, rgba(59,130,246,0.08) 0%, #0F172A 60%);

/* Botones primarios */
--gradient-primary: linear-gradient(135deg, #3B82F6, #2563EB);

/* Gradient text */
--gradient-text: linear-gradient(135deg, #F1F5F9, #3B82F6);
```

---

## Shadows & Glow

```css
--shadow-glow-blue: 0 0 20px rgba(59, 130, 246, 0.3);
```

Usado en:
- `whileHover` en project cards
- Botón CTA principal
- Timeline dot activo: `box-shadow: 0 0 10px rgba(59,130,246,0.5)`

---

## Spacing & Grid

- **8px grid** — todos los valores de padding/margin son múltiplos de 8px
- **Max container:** `max-w-6xl` (1152px) con `px-4 sm:px-6 lg:px-8`
- **Section padding:** `py-24` (96px vertical)
- **Card padding:** `p-6` (24px) en desktop, `p-4` en mobile

---

## Border Radius

```css
--radius-md: 0.75rem;  /* 12px — botones, badges */
--radius-lg: 1rem;     /* 16px — cards estándar */
--radius-xl: 1.5rem;   /* 24px — cards featured */
```

---

## Checkpoints de Accesibilidad

- [ ] Contraste mínimo 4.5:1 para texto body (`text-secondary` sobre `bg-surface`: ✅ ~6:1)
- [ ] Focus visible en todos los interactivos (`border-focus: #3B82F6`)
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] Alt text en todas las imágenes
- [ ] Navbar con `aria-label` en toggle
