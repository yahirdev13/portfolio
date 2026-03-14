# Animations — Yahir Alberto Portfolio

**Version:** 1.0
**Library:** Framer Motion 12.x
**Last Updated:** March 2026

---

## Principios

1. **`once: true`** — Todas las animaciones scroll se disparan solo la primera vez
2. **`margin: "-80px"`** — Las animaciones inician antes de que el elemento entre al viewport completo
3. **Stagger** — Las listas de cards/skills entran de forma escalonada (0.1s entre elementos)
4. **No autoplay** — Hero usa `initial="hidden" animate="visible"`, el resto usa `whileInView`
5. **Durations** — 0.5–0.6s para apariciones, 0.2–0.3s para hovers

---

## Variantes (`src/lib/animations.ts`)

### `fadeInUp`
**Uso:** Elemento individual entrando al viewport
```typescript
hidden: { opacity: 0, y: 30 }
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
```
**Aplicación:** Headers de sección (eyebrow + H2 + subtitle)

---

### `staggerContainer`
**Uso:** Padre de una lista de elementos que entran escalonados
```typescript
hidden: {}
visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
```
**Aplicación:** Grids de proyectos, skills, cards de contacto, experiencia

---

### `staggerItem`
**Uso:** Hijo directo de `staggerContainer`
```typescript
hidden: { opacity: 0, y: 20 }
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
```
**Aplicación:** Cards individuales en todos los grids

---

### `slideInLeft` / `slideInRight`
**Uso:** Dos columnas que entran desde lados opuestos
```typescript
hidden: { opacity: 0, x: -40 }  // slideInLeft
visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }

hidden: { opacity: 0, x: 40 }   // slideInRight
visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
```
**Aplicación:** Sección About (bio izq / stack der)

---

### `heroEntrance`
**Uso:** Elementos del Hero con delays incrementales (no scroll, se dispara al cargar)
```typescript
hidden: { opacity: 0, y: 20 }
visible: (delay: number) => ({
  opacity: 1, y: 0,
  transition: { duration: 0.6, ease: 'easeOut', delay }
})
```
**Uso con `custom`:**
```tsx
<motion.div custom={0.1} variants={heroEntrance} initial="hidden" animate="visible">
  {/* Badge */}
</motion.div>
<motion.h1 custom={0.2} ...>
  {/* Nombre */}
</motion.h1>
```

**Delays asignados en Hero:**
| Elemento | Delay |
|---|---|
| Badge "Disponible" | 0.1s |
| H1 Nombre | 0.2s |
| H2 Rol | 0.3s |
| Tagline | 0.4s |
| CTAs | 0.5s |
| Social links | 0.6s |
| Scroll indicator | 0.7s |

---

### `navbarVariants`
**Uso:** Navbar hide/show con `AnimatePresence`
```typescript
hidden: { y: -80, opacity: 0 }
visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
```

---

### `cardHover`
**Uso:** `whileHover` en project cards
```typescript
{
  y: -6,
  boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
}
```

---

### `viewportConfig`
**Uso:** Spread en la prop `viewport` de todos los `whileInView`
```typescript
{ once: true, margin: '-80px' }
```

---

## Patrón de Uso en Secciones

```tsx
// Patrón estándar para secciones con lista de items
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportConfig}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {/* Card content */}
    </motion.div>
  ))}
</motion.div>
```

```tsx
// Patrón para header de sección
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewportConfig}
>
  <span>{/* Eyebrow */}</span>
  <h2>{/* Título */}</h2>
</motion.div>
```

---

## Performance

- Todas las animaciones usan `transform` (y, x) y `opacity` — no hay layout thrashing
- `once: true` evita re-render de animaciones en scroll up
- `whileHover` usa CSS `transform` via GPU
- `AnimatePresence` en Navbar solo monta/desmonta un elemento
