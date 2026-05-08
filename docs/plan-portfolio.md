# Plan Completo: Mejora del Portfolio — Instrucciones para Claude Code

## Contexto del proyecto

Este es un portfolio web de un Full-Stack Developer construido con **Next.js**. Tiene problemas críticos de contenido, credibilidad y UX que necesitan resolverse. El objetivo es que el portfolio sea profesional, honesto y efectivo para conseguir clientes freelance y empleo remoto.

**Stack del portfolio:** Next.js, React, TypeScript, Tailwind CSS (confirmar en package.json).

---

## FASE 1 — CORRECCIONES CRÍTICAS DE CREDIBILIDAD (Prioridad máxima)

### 1.1 Corregir "4+ años de experiencia"

**Problema:** El historial laboral documentado muestra ~2 años de experiencia en empresas. Los "4+ años" incluyen freelance desde la universidad, pero no está explicado y genera desconfianza inmediata.

**Acción:**
- Buscar en todo el proyecto donde aparezca "4+" o "4 años" o cualquier referencia a años de experiencia.
- Reemplazar con una redacción honesta y estratégica. Opciones:
  - `"2+ años de experiencia profesional en empresas + proyectos freelance desde 2021"` 
  - `"Desarrollador Full-Stack con experiencia en producción desde 2021"`
  - `"2+ años construyendo soluciones web para empresas y clientes independientes"`
- La clave: NO mentir, pero tampoco minimizar. La palabra "freelance" es experiencia real.
- Si hay un componente Hero o About que muestre este número, actualizarlo ahí.

### 1.2 Corregir "12+ proyectos en producción"

**Problema:** Solo hay 4 proyectos listados (uno en desarrollo). "12+" sin evidencia se ve inflado.

**Acción:**
- Buscar donde aparezca "12+" o el número de proyectos.
- Si realmente hay más proyectos freelance que no están listados, agregarlos a la data de proyectos (ver Fase 3).
- Si no hay 12 proyectos reales, cambiar a un número veraz: `"6+ proyectos entregados"` o quitar el número y usar `"Múltiples proyectos en producción para clientes reales"`.
- NUNCA inflar números. Un recruiter que detecte inconsistencia descarta todo el portfolio.

### 1.3 Eliminar o reencuadrar "Auditorías de Seguridad"

**Problema:** Aparece como servicio ofrecido pero no hay experiencia ni proyecto que lo respalde. Un pentester real lo detecta inmediatamente.

**Acción:**
- Buscar "Auditorías de Seguridad" o "Security Audit" en todo el proyecto.
- Reemplazar con algo que SÍ refleje la experiencia real:
  - `"Seguridad en APIs y autenticación"` 
  - `"Buenas prácticas de seguridad web"`
  - `"Implementación de autenticación segura (JWT, OAuth)"`
- O eliminarlo completamente si no hay ninguna experiencia relevante.

### 1.4 Reemplazar TODOS los placeholders de imágenes

**Problema:** Las imágenes de proyectos usan URLs de `placehold.co`. Esto es lo más anti-profesional posible en un portfolio de 2025.

**Acción:**
- Buscar todas las URLs que contengan `placehold.co` o `placeholder` en el proyecto.
- Para cada proyecto, hay dos opciones:
  
  **Opción A (recomendada):** Preparar el componente para que acepte screenshots reales. Crear un componente `ProjectImage` que:
  - Muestre la imagen real si existe
  - Muestre un fallback elegante si no (NO un placeholder genérico, sino un diseño con el logo/nombre del proyecto, colores del brand, y un texto como "Vista previa próximamente")
  - Use `next/image` con optimización
  
  **Opción B (temporal mientras se consiguen screenshots):** Crear fallbacks de diseño generados con código (gradientes con el nombre del proyecto, mockup de browser/móvil con wireframe estilizado, etc.) que se vean intencionales, no como placeholders olvidados.

- Archivos a revisar: probablemente en `/data/projects.ts` o similar, y en los componentes de galería de proyectos.
- Los fallbacks deben usar los colores del tema del portfolio, no genéricos.

### 1.5 Links de GitHub y Demo en proyectos

**Problema:** Los campos `github` y `live` están `undefined` en todos los proyectos. Los botones no se renderizan.

**Acción:**
- En la data de proyectos, para cada proyecto:
  - Si el código es privado por contrato/NDA: agregar un campo `privateReason` con el texto `"Código privado por NDA — demo disponible en entrevista"`
  - Si hay demo live: agregar la URL real
  - Si hay repo público: agregar la URL real
- En el componente de ProjectCard, manejar estos estados:
  ```
  Si github existe → mostrar botón "Ver código" con ícono de GitHub
  Si live existe → mostrar botón "Demo live" con ícono ExternalLink  
  Si privateReason existe → mostrar badge/texto discreto con el motivo
  Si ninguno existe → NO mostrar botones vacíos
  ```
- Esto es CRÍTICO: un portfolio que dice "código real" pero no muestra ni código ni justifica por qué no lo muestra, pierde toda credibilidad.

---

## FASE 2 — CONTENIDO FALTANTE (Prioridad alta)

### 2.1 Agregar sección de Educación

**Problema:** No hay sección de educación. Con poca experiencia laboral, la educación ayuda a llenar gaps.

**Acción:**
- Crear una sección de Educación en la página (puede ir después de Experiencia o antes de Skills).
- Datos a incluir:
  ```
  Universidad Tecnológica Emiliano Zapata (UTEZ)
  Ingeniería en Desarrollo y Gestión de Software
  Morelos, México
  Graduado: Abril 2025
  ```
- Diseño: mantener consistencia con las demás secciones. Puede ser compacto (no necesita ser tan prominente como Experiencia).
- Si hay logros académicos (promedio alto, tesis relevante, proyecto final interesante), incluirlos como sub-items.

### 2.2 Declarar idiomas

**Problema:** No hay mención de idiomas. En el mercado freelance internacional, no declarar inglés = asumir que no lo habla.

**Acción:**
- Agregar idiomas en la sección de Skills o crear una sub-sección:
  ```
  Español — Nativo
  Inglés — Fluido / Profesional
  ```
- Si el portfolio está en inglés, esto ya implica competencia, pero debe ser explícito.
- Ubicación recomendada: en la sección de Skills/About, o como badges en el header/footer.

### 2.3 Propuesta de valor única en el Hero

**Problema:** El Hero rota entre 4 roles (Full-Stack Developer / ERP Automation Specialist / SaaS Builder / Integrations Engineer). Esto diluye el mensaje y no es memorable.

**Acción:**
- Buscar el componente Hero (probablemente `Hero.tsx` o similar).
- Encontrar el array/config de roles que rotan.
- Reemplazar la rotación múltiple con UNA línea clara y memorable:
  - Propuesta recomendada: `"Full-Stack Developer — Automatización empresarial e integraciones ERP"`
  - Alternativa: `"Full-Stack Developer especializado en soluciones empresariales y ERP"`
- Si se quiere mantener algo de dinamismo, máximo 2 alternativas muy alineadas:
  - `"Full-Stack Developer"` alternando con `"Especialista en automatización ERP"`
- La regla: si alguien ve el portfolio 3 segundos, debe poder decir exactamente qué haces. Con 4 roles distintos, no puede.

### 2.4 Agregar botón de CV descargable

**Problema:** No hay forma de descargar el CV. Todo recruiter o cliente busca un PDF.

**Acción:**
- Crear un botón "Descargar CV" prominente en:
  - El Hero section (botón primario o secundario junto al CTA principal)
  - La sección de About/Contact
- El botón debe:
  - Linkar a un archivo PDF en `/public/cv/Yahir_Diaz_CV.pdf` (o similar)
  - Tener atributo `download` en el `<a>` tag
  - Usar un ícono de descarga (Download icon de Lucide/Heroicons)
- Crear el directorio `/public/cv/` si no existe
- Por ahora, puede apuntar a un placeholder path — el usuario subirá el PDF real después
- Estilo: debe ser visible pero no competir con el CTA principal. Botón outline/secondary.

### 2.5 Agregar nota de NDA en proyectos sin código público

**Problema:** Los proyectos no tienen links y no explican por qué. Se ve como portfolio vacío.

**Acción:**
- Para CADA proyecto que no tenga GitHub público, agregar un badge o texto:
  - `"🔒 Código bajo NDA — disponible para revisión en entrevista"`
  - O un tooltip/hover que explique
- Implementar como un componente reutilizable `<NDABadge />` que se pueda poner en cualquier ProjectCard.
- Esto convierte una debilidad (no hay código público) en una señal de profesionalismo (trabaja con clientes reales que requieren confidencialidad).

---

## FASE 3 — MEJORAS DE PROYECTOS Y DATA (Prioridad alta)

### 3.1 Mejorar descripción de Jardines de México

**Problema:** "Centralicé la generación y gestión de facturas mediante una interfaz intuitiva" es genérico.

**Acción:**
- Buscar la data del proyecto Jardines de México.
- Mejorar la descripción con más especificidad técnica:
  ```
  - Sistema de facturación en línea construido con React
  - Integración con servicios de facturación electrónica (CFDI) mexicana
  - Centralización de datos que redujo errores de facturación manual
  - Informes en tiempo real para el equipo administrativo
  ```
- Si hay métricas: agregarlas (facturas/mes, reducción de errores en %, tiempo ahorrado).
- Agregar las tecnologías usadas como tags: React, Node.js, etc.

### 3.2 Hacer featured el Cotizador de Tersoft

**Problema:** El proyecto Tersoft Cotizador tiene `featured: false` pero es el proyecto con más impacto medible (−80% tiempo por cotización).

**Acción:**
- Buscar en la data de proyectos el cotizador de Tersoft.
- Cambiar `featured: false` a `featured: true`.
- Asegurarse de que aparezca en la grilla principal de proyectos.
- La métrica del 80% debe estar prominente en la card del proyecto.

### 3.3 Limpiar skills: quitar GraphQL beginner y AWS sin respaldo

**Problema:** Listar GraphQL como "beginner" genera dudas. AWS aparece en skills pero en ningún proyecto.

**Acción:**
- Buscar la data/config de skills/tecnologías.
- **Quitar GraphQL** si está en nivel beginner. Solo listar skills en los que se tenga competencia funcional.
- **Para AWS:** o quitarlo, o agregar contexto en algún proyecto donde se haya usado (aunque sea deployment básico). Si solo se conoce a nivel tutorial, quitarlo.
- **Regla general:** cada skill listada debe poder ser respaldada en una entrevista con al menos un ejemplo real de uso.

---

## FASE 4 — SEO Y DETALLES TÉCNICOS (Prioridad media)

### 4.1 SEO básico en layout.tsx

**Problema:** No hay meta tags, og:image, og:title, ni description.

**Acción:**
- Buscar `layout.tsx` (probablemente en `/app/layout.tsx`).
- Agregar metadata completa usando la API de metadata de Next.js:
  ```typescript
  export const metadata: Metadata = {
    title: 'Yahir Díaz — Full-Stack Developer',
    description: 'Full-Stack Developer especializado en automatización empresarial, integraciones ERP y desarrollo web. React, Next.js, Node.js, Odoo.',
    keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Odoo', 'ERP', 'México', 'Freelance Developer'],
    authors: [{ name: 'Yahir Alberto Díaz González' }],
    openGraph: {
      title: 'Yahir Díaz — Full-Stack Developer',
      description: 'Full-Stack Developer especializado en automatización empresarial e integraciones ERP.',
      url: 'https://yahirdev.com', // URL real del portfolio
      siteName: 'Yahir Díaz Portfolio',
      locale: 'es_MX',
      type: 'website',
      // images: [{ url: '/og-image.png', width: 1200, height: 630 }], // Crear OG image después
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Yahir Díaz — Full-Stack Developer',
      description: 'Full-Stack Developer especializado en automatización empresarial e integraciones ERP.',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
  ```
- Ajustar la URL y datos reales del usuario.
- La OG image se puede crear después como tarea separada (una imagen 1200x630 con nombre, título y colores del portfolio).

### 4.2 Favicon personalizado

**Problema:** Usa el favicon por defecto de Next.js (triángulo). Dice "no terminé esto".

**Acción:**
- Crear un favicon simple y profesional:
  - Opción 1: Las iniciales "YD" con la tipografía y colores del portfolio
  - Opción 2: Un ícono simple que represente código/desarrollo
- Generar los archivos necesarios:
  - `/app/favicon.ico` (32x32)
  - `/app/icon.png` (para manifest, 192x192 y 512x512)
  - `/app/apple-icon.png` (180x180)
- Si Next.js usa el `app/` directory, puede ser tan simple como reemplazar el archivo `favicon.ico`.
- Se puede generar con SVG inline convertido a ICO, o con un canvas en un script de build.
- **Enfoque pragmático:** crear un SVG simple con las iniciales "YD" en un cuadrado redondeado con el color primario del portfolio, y convertirlo a los formatos necesarios.

---

## FASE 5 — MEJORAS DE HANDLE/EMAIL (Prioridad media-baja)

### 5.1 Email profesional (solo documentar, no cambiar en código ahora)

**Problema:** `yahir.dev13@gmail.com` — el "13" da impresión de cuenta de adolescente.

**Acción para el código:**
- **NO cambiar el email en el portfolio todavía.** Esto requiere que el usuario primero:
  1. Compre un dominio (ej: `yahirdiaz.dev` o `yahir.dev`)
  2. Configure email forwarding o use un servicio como Zoho Mail gratuito
  3. Luego actualice el email en el portfolio
- Lo que SÍ se puede hacer ahora: agregar un comentario `// TODO: Actualizar a email con dominio propio` en la data de contacto.
- Si el email aparece hardcodeado en múltiples lugares, centralizarlo en un archivo de config (`/data/contact.ts` o similar) para que sea fácil de cambiar después.

---

## FASE 6 — MEJORAS DE UX/DISEÑO (Si queda tiempo)

### 6.1 Fallback elegante para imágenes de proyectos

Si no hay screenshots reales disponibles aún, crear un componente de fallback visual que NO sea un placeholder genérico:

```
Componente: ProjectImageFallback
Props: projectName, primaryColor, techStack[]

Diseño:
- Fondo con gradiente sutil usando el color primario del proyecto
- Nombre del proyecto centrado en tipografía bold
- Tags de tecnologías debajo
- Borde sutil o pattern de fondo que lo haga ver intencional
- Opcional: ícono representativo del tipo de proyecto (📊 para dashboard, 🛒 para e-commerce, etc.)
```

Esto es 100x mejor que un placeholder de `placehold.co`.

### 6.2 Mejora de la sección de contacto

- Asegurarse de que haya un formulario de contacto funcional O un CTA claro (email + LinkedIn).
- Agregar un texto persuasivo: "¿Tienes un proyecto en mente? Platiquemos." en lugar de un genérico "Contáctame".
- Si hay formulario, que envíe a algún servicio (Formspree, EmailJS, o API route de Next.js).

---

## NOTAS IMPORTANTES PARA LA EJECUCIÓN

1. **No eliminar contenido sin reemplazo.** Cada cosa que se quite debe ser sustituida por algo mejor.
2. **Mantener el estilo visual existente.** No rediseñar el portfolio — solo corregir contenido y agregar lo que falta.
3. **Testear en móvil.** Cualquier componente nuevo debe ser responsivo.
4. **Commits descriptivos.** Un commit por cada fase o sub-tarea significativa.
5. **No romper lo que funciona.** Antes de cualquier cambio grande, verificar que el build pasa (`npm run build`).
6. **Orden de ejecución:** Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 → Fase 6.
7. **Las Fases 1-3 son obligatorias.** Las Fases 4-6 son mejoras adicionales que suman pero no son blockers.

---

## CHECKLIST FINAL

Antes de considerar terminado, verificar:

- [ ] No hay ninguna referencia a "4+ años" sin contexto
- [ ] No hay números de proyectos inflados sin respaldo
- [ ] "Auditorías de Seguridad" eliminado o reencuadrado
- [ ] Cero URLs de `placehold.co` en todo el proyecto
- [ ] Cada proyecto tiene: GitHub link, Demo link, O nota de NDA explicando por qué no
- [ ] Sección de Educación existe y es visible
- [ ] Idiomas declarados (Español nativo, Inglés fluido)
- [ ] Hero tiene UNA propuesta de valor clara, no 4 rotando
- [ ] Botón de "Descargar CV" presente y funcional (puede ser placeholder path)
- [ ] Cotizador de Tersoft es `featured: true`
- [ ] No hay skills "beginner" listadas
- [ ] AWS removido o justificado con un proyecto real
- [ ] Meta tags de SEO en layout.tsx
- [ ] Favicon personalizado (no el triángulo de Next.js)
- [ ] Build de Next.js pasa sin errores (`npm run build`)
- [ ] Responsivo en móvil verificado
