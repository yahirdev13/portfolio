# Tech Spec — Yahir Alberto Portfolio

**Version:** 1.0
**Stack:** Next.js 15 + Tailwind v4 + Framer Motion
**Deploy Target:** Vercel
**Last Updated:** March 2026

---

## Stack Overview

| Capa | Tecnología | Versión | Justificación |
|---|---|---|---|
| Framework | Next.js | 16.x | App Router, SSG, optimización de imágenes, SEO |
| Lenguaje | TypeScript | 5.x | Type safety en props, data shapes |
| Estilos | Tailwind CSS | v4 | `@theme` tokens en CSS, sin config JS |
| Animaciones | Framer Motion | 12.x | Scroll animations, hover effects, Navbar hide/show |
| Iconos | lucide-react | latest | Tree-shakeable, consistent stroke icons |
| Deploy | Vercel | — | Zero-config para Next.js, CDN global |
| Tipografía | Inter (Google Fonts) | — | `next/font/google` con `display: swap` |

---

## Arquitectura

```
portfolio/
├── src/
│   ├── app/                 # App Router (Next.js)
│   │   ├── layout.tsx       # Root layout: Inter font, metadata, html/body
│   │   ├── page.tsx         # Server Component — orquesta secciones
│   │   └── globals.css      # @theme tokens + @import tailwindcss
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # 'use client' — scroll logic
│   │   │   └── Footer.tsx   # 'use client' — hover handlers
│   │   └── sections/        # 'use client' — Framer Motion
│   ├── lib/
│   │   ├── data.ts          # Fuente única de datos (no fetches)
│   │   └── animations.ts    # Variantes Framer Motion exportadas
│   └── types/
│       └── index.ts         # Interfaces TypeScript globales
```

---

## Decisiones de Arquitectura

### Tailwind v4 sin `tailwind.config.ts`
Tailwind v4 usa `@theme` en CSS en lugar de un archivo de configuración JS. Todos los tokens van en `globals.css`. PostCSS config: `{ plugins: { '@tailwindcss/postcss': {} } }`.

### Server vs Client Components

| Componente | Tipo | Razón |
|---|---|---|
| `page.tsx` | Server | Solo importa y ensambla |
| `Navbar.tsx` | Client | `useEffect`, `useState` para scroll |
| `Footer.tsx` | Client | Event handlers (`onMouseEnter`) |
| `Hero.tsx` | Client | Framer Motion `motion.*` |
| `About.tsx` | Client | Framer Motion animations |
| `Projects.tsx` | Client | `whileHover`, scroll animations |
| `Skills.tsx` | Client | Stagger animations |
| `Experience.tsx` | Client | Stagger animations |
| `Contact.tsx` | Client | `whileHover`, handlers |

### Fuente única de datos
`src/lib/data.ts` contiene **todos** los datos del portafolio como constantes TypeScript. No hay CMS, no hay API calls, no hay fetch. Actualizar contenido = editar ese archivo y hacer deploy.

### Sin formulario backend
El formulario de contacto usa `mailto:` con subject y body pre-populados. Si en el futuro se necesita un formulario real, usar Resend o EmailJS (ver `.env.example`).

---

## SEO

- `metadata` en `layout.tsx`: title, description, keywords, openGraph, twitter card
- `lang="es"` en `<html>`
- Headings semánticos: H1 en Hero, H2 en cada sección, H3 en cards
- `robots: { index: true, follow: true }`

---

## Performance

- **Fuentes:** `next/font/google` con `display: swap` — sin FOUT
- **Imágenes:** `next/image` cuando se agreguen (no usadas actualmente)
- **Animaciones:** `viewport={{ once: true }}` — no re-animan en scroll up
- **Bundle:** Tree-shaking automático de lucide-react
- **Build output:** Static (`○`) — 100% SSG, sin runtime Node.js

---

## Deploy

```bash
# Local dev
npm run dev          # http://localhost:3000

# Build check
npm run build        # Verifica TypeScript + genera estáticos

# Vercel
# Conectar repo en vercel.com → deploy automático en push a main
```

`vercel.json` define `buildCommand`, `outputDirectory` y `framework`.

---

## Variables de Entorno

Ver `.env.example`. Actualmente no se usa ninguna variable de entorno en producción.

---

## Actualizaciones Futuras

- [ ] Añadir foto de perfil en sección About (`next/image`)
- [ ] Integrar formulario real con Resend
- [ ] Agregar página `/blog` con MDX
- [ ] Analytics con Vercel Analytics (privacy-first)
- [ ] Open Graph image dinámica con `next/og`
