import type { Project, SkillCategory, ExperienceItem, SocialLink, PersonalInfo, EducationItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Yahir Alberto',
  displayName: 'Yahir',
  role: 'Full-Stack Developer',
  tagline: 'Construyo productos digitales que resuelven problemas reales — de la idea al deploy.',
  bio: `Soy un desarrollador Full-Stack freelancer con 3+ años de experiencia profesional construyendo plataformas reales para clientes reales. Me especializo en Next.js, Node.js y arquitecturas que escalan.

He automatizado ERPs empresariales, construido plataformas SaaS multi-tenant, integrado sistemas de pago y desarrollado herramientas que eliminan trabajo manual.

Trabajo con código que llega a producción y resuelve problemas concretos.`,
  // TODO: Actualizar email a dominio propio (ej: yahir@yahirdiaz.dev)
  // cuando el dominio esté configurado — cambiar aquí actualiza todo el portfolio
  email: 'yahir.dev13@gmail.com',
  github: 'https://github.com/yahirdev13',
  linkedin: 'https://linkedin.com/in/yahirdev13',
  location: 'México',
  available: true,
};

export const projects: Project[] = [
  {
    id: 'cardeal',
    title: 'Cardeal',
    description: 'Plataforma de car rental end-to-end en Next.js 15 + React 19 que conecta tres APIs externas en paralelo: disponibilidad de vehículos vía TSD XML, cobros con Flap Gateway (webhooks incluidos) y confirmación automática por PDF + QR único por reserva.',
    fullDescription: {
      problem: 'La renta de autos operaba completamente offline: disponibilidad consultada por teléfono, cobros manuales y confirmaciones en papel. No existía ningún sistema que conectara en un solo flujo la disponibilidad en tiempo real del inventario, el procesamiento de pagos y la emisión automática de documentos.',
      solution: 'Plataforma full-stack construida sobre Next.js 15 API Routes + MongoDB que orquesta tres integraciones en paralelo: TSD XML API (disponibilidad y precios en tiempo real, parseada con xml2js), Flap Payment Gateway (cobro online con webhook /api/webhook-success para confirmaciones asíncronas) y opción de pago en mostrador. El flujo cubre búsqueda → selección de vehículo → planes de seguro con pricing dinámico por categoría → extras (GPS, sillas, coberturas) → cálculo de IVA → pago → confirmación con PDF generado con @react-pdf/renderer y QR único por reserva con qrcode. Autenticación con JWT + bcryptjs y cifrado de datos sensibles con crypto-js.',
      impact: 'El proceso de reserva que antes requería múltiples llamadas telefónicas y papeles opera completamente en línea en minutos. El cliente recibe su PDF de confirmación con QR descargable de forma inmediata. La operación manual de reservas, cobros y documentos quedó eliminada.',
    },
    highlights: [
      'TSD XML API: disponibilidad y precios de vehículos en tiempo real, respuesta XML parseada con xml2js',
      'Flap Gateway: cobro online + webhook /api/webhook-success para confirmaciones asíncronas; opción de pago en mostrador',
      'Seguros con pricing dinámico por categoría de vehículo; extras configurables (GPS, sillas, coberturas adicionales)',
      'PDFs generados server-side con @react-pdf/renderer; QR únicos por reserva con qrcode + qrcode.react',
      'JWT + bcryptjs para autenticación; crypto-js para cifrado de datos sensibles; uuid para IDs únicos de reserva',
      'Validación de formularios con React Hook Form + Yup; notificaciones por email con Nodemailer',
      'Código entregado con webpack-obfuscator; deploy en Vercel con variables de entorno por entorno',
    ],
    tech: ['Next.js 15', 'React 19', 'Material-UI v6', 'MongoDB', 'TSD XML API', 'xml2js', 'Flap Gateway', 'JWT', 'bcryptjs', 'crypto-js', '@react-pdf/renderer', 'QRCode', 'Nodemailer', 'React Hook Form', 'Yup', 'Framer Motion'],
    category: 'Car Rental Platform',
    status: 'completed',
    featured: true,
    privateReason: 'Código privado por NDA — demo disponible en entrevista',
    role: 'Desarrollador Full-Stack',
    date: '2024 — 2025',
    images: [
      'https://placehold.co/800x450/1E293B/3B82F6?text=Cardeal+-+Búsqueda+de+vehículos',
      'https://placehold.co/800x450/0F172A/3B82F6?text=Cardeal+-+Flujo+de+reserva',
    ],
    metrics: [
      { label: 'Disponibilidad', value: 'TSD en vivo' },
      { label: 'Pagos', value: 'Flap + Webhook' },
      { label: 'Confirmación', value: 'PDF + QR' },
      { label: 'Seguros', value: 'Precio dinámico' },
      { label: 'Autenticación', value: 'JWT + bcrypt' },
      { label: 'Deploy', value: 'Vercel' },
    ],
  },
  {
    id: 'sageconnect',
    title: 'SageConnect',
    description: 'Motor de sincronización bidireccional entre SAGE 300 ERP y el Portal de Proveedores (Focaltec) que automatiza el ciclo completo de CFDIs, órdenes de compra, pagos y complementos — con arquitectura multi-tenant para operar múltiples empresas en paralelo.',
    longDescription: 'SageConnect es un sistema de automatización Node.js que elimina por completo la captura manual entre SAGE 300 y portaldeproveedores.mx (Focaltec). Cada empresa cliente opera con un juego independiente de credenciales (TENANT_ID, API_KEY, API_SECRET, RFC, base de datos SQL Server) configuradas como arrays paralelos, garantizando aislamiento total de datos entre tenants.\n\nEl motor de sincronización cubre cuatro módulos: Órdenes de Compra (creación, actualización, cierre y cancelación), descarga y procesamiento de CFDIs con invocación directa al ejecutable ImportaFacturasFocaltec.exe de SAGE 300, procesamiento de pagos y complementos de pago. La atomicidad bidireccional garantiza que cualquier cambio en un sistema se refleje en el otro sin intervención humana.\n\nEl sistema corre como tarea programada en Windows Server cada 15 minutos vía RunSageconnect.bat (Task Scheduler), usando AUTO_TERMINATE=true para que el proceso termine limpiamente y no genere conflictos de puerto con la siguiente ejecución. En modo servidor continuo se despliega con PM2 y pm2-startup para persistir entre reinicios.\n\nIncluye un dashboard web con visualización de logs en tiempo real y notificaciones por correo configurable: Gmail OAuth2 (Google Cloud Console) o servidor SMTP propio, con listas de destinatarios independientes por tenant. El logging se gestiona con log4js + Winston en rutas configurables por variable de entorno. El código se entrega ofuscado al cliente final.',
    fullDescription: {
      problem: 'El equipo de compras tenía que capturar manualmente cada CFDI, orden de compra y pago en SAGE 300 y en el Portal de Proveedores por separado. El proceso consumía horas diarias, los errores de doble captura afectaban directamente la contabilidad y cualquier desincronización entre sistemas generaba problemas con proveedores y auditorías fiscales.',
      solution: 'Motor de sincronización bidireccional SAGE 300 ↔ Focaltec que corre cada 15 minutos vía Windows Task Scheduler. Gestiona el ciclo completo de Órdenes de Compra, descarga CFDIs del portal e invoca directamente al ejecutable ImportaFacturasFocaltec.exe para importarlos al ERP, procesa pagos y complementos. Arquitectura multi-tenant: cada empresa se configura con su propio juego de credenciales Focaltec (TENANT_ID, API_KEY, API_SECRET, RFC) y base de datos SQL Server independiente — todo en paralelo en la misma instancia.',
      impact: 'La sincronización que antes tomaba horas de trabajo manual ocurre ahora cada 15 minutos sin intervención humana. Cero capturas duplicadas. Múltiples empresas operan en paralelo con datos completamente aislados. El equipo de compras eliminó por completo la reconciliación manual entre sistemas, reduciendo errores contables y mejorando la relación con proveedores.',
    },
    highlights: [
      'Sincronización bidireccional SAGE 300 ↔ Portal de Proveedores (Focaltec) con atomicidad garantizada',
      'Ciclo de vida completo de Órdenes de Compra: creación, actualización, cierre y cancelación propagados automáticamente',
      'Descarga de CFDIs del portal e importación directa al ERP invocando ImportaFacturasFocaltec.exe vía child_process',
      'Procesamiento de pagos y complementos de pago con validación de RFC y régimen fiscal (CFDI 4.0)',
      'Multi-tenant real: cada empresa opera con TENANT_ID, API_KEY, API_SECRET, RFC y SQL Server independientes como arrays paralelos',
      'Scheduler cada 15 min vía Windows Task Scheduler + RunSageconnect.bat con AUTO_TERMINATE para exit limpio',
      'Notificaciones por correo configurable: Gmail OAuth2 (Google Cloud) o SMTP propio, listas de destinatarios por tenant',
      'Logging estructurado con log4js + Winston, rutas de logs y descargas configurables por variable de entorno',
      'Dashboard web con visualización de logs en tiempo real; código entregado ofuscado al cliente final',
    ],
    tech: ['Node.js 18', 'Express', 'MSSQL (SQL Server)', 'Focaltec REST API', 'Gmail OAuth2', 'SMTP', 'log4js', 'Winston', 'PM2', 'Windows Server', 'Windows Task Scheduler'],
    category: 'ERP Automation · Multi-tenant',
    status: 'completed',
    featured: true,
    privateReason: 'Código privado por NDA — demo disponible en entrevista',
    role: 'Desarrollador Full-Stack',
    date: '2024 — 2025',
    images: [
      'https://placehold.co/800x450/1E293B/3B82F6?text=SageConnect+-+Dashboard',
      'https://placehold.co/800x450/0F172A/3B82F6?text=SageConnect+-+Sync+Engine',
    ],
    metrics: [
      { label: 'Ciclo de sync', value: 'Cada 15 min' },
      { label: 'Capturas manuales', value: '0' },
      { label: 'Módulos', value: 'OC + CFDI + Pagos' },
      { label: 'Arquitectura', value: 'Multi-tenant' },
      { label: 'Notificaciones', value: 'OAuth2 + SMTP' },
      { label: 'Deploy', value: 'PM2 + Task Scheduler' },
    ],
  },
  {
    id: 'cleany',
    title: 'Cleany SaaS',
    description: 'SaaS multi-tenant en construcción para empresas de limpieza: arquitectura de aislamiento total por tenant, booking en tiempo real, suscripciones y pagos únicos con Stripe Webhooks, gestión de empleados y dashboard analytics — stack Next.js 15 + Fastify + PostgreSQL + Docker.',
    fullDescription: {
      problem: 'Las empresas del sector gestionaban reservas por WhatsApp y hojas de Excel: sin visibilidad de ingresos, sin control de ocupación ni retención de clientes. Escalar implicaba contratar más personal administrativo. Una solución SaaS propia era económicamente inaccesible para la mayoría de estas empresas.',
      solution: 'Plataforma SaaS con arquitectura multi-tenant donde cada empresa opera con base de datos PostgreSQL aislada bajo la misma infraestructura Docker. Backend en Fastify por su rendimiento superior a Express para alta concurrencia. Stripe Webhooks gestiona suscripciones recurrentes y pagos únicos. El sistema de booking calcula disponibilidad en tiempo real cruzando agenda de empleados, zonas de servicio y tipo de limpieza. Dashboard analytics con métricas de ingresos, ocupación y retención actualizadas en tiempo real.',
      impact: 'Arquitectura diseñada para incorporar nuevos tenants sin costo adicional de infraestructura. Cada empresa opera con sus datos completamente aislados, pagos automatizados vía Stripe y visibilidad total de su negocio desde el dashboard desde el primer día.',
    },
    highlights: [
      'Multi-tenant con aislamiento de base de datos por empresa (PostgreSQL schema per tenant)',
      'Backend Fastify: rendimiento de alta concurrencia para múltiples tenants simultáneos',
      'Stripe Webhooks: suscripciones recurrentes, pagos únicos y manejo de fallos de cobro',
      'Booking engine: disponibilidad en tiempo real cruzando empleados, zonas y tipo de servicio',
      'Dashboard analytics: ingresos, ocupación, retención de clientes — datos en tiempo real',
      'Gestión de empleados: asignación automática por zona y disponibilidad; notificaciones push',
      'Infraestructura containerizada con Docker Compose; TypeScript en todo el stack',
    ],
    tech: ['Next.js 15', 'TypeScript', 'Fastify', 'PostgreSQL', 'Stripe', 'Docker', 'Docker Compose'],
    category: 'SaaS Platform',
    status: 'in-progress',
    featured: true,
    role: 'Desarrollador Full-Stack',
    date: '2025 — Presente',
    images: [
      'https://placehold.co/800x450/1E293B/FBBF24?text=Cleany+-+Dashboard+Analytics',
      'https://placehold.co/800x450/0F172A/FBBF24?text=Cleany+-+Sistema+de+Booking',
    ],
    metrics: [
      { label: 'Aislamiento', value: 'DB por tenant' },
      { label: 'Backend', value: 'Fastify' },
      { label: 'Pagos', value: 'Stripe Webhooks' },
      { label: 'Booking', value: 'Tiempo real' },
      { label: 'Infra', value: 'Docker Compose' },
      { label: 'Estado', value: 'En desarrollo' },
    ],
  },
  {
    id: 'tersoft-cotizador',
    title: 'Tersoft Cotizador',
    description: 'Herramienta interna de cotización con IA: conecta Odoo via XML-RPC para precios en tiempo real, integra Gemini AI para asistir la generación, produce PDFs con jsPDF, registra en Google Sheets y envía al cliente con Nodemailer — de 45 min a menos de 5 por cotización.',
    fullDescription: {
      problem: 'Cada cotización: abrir Odoo, copiar precios a Excel, formatear PDF manualmente, adjuntar y enviar correo. 30-45 min por vendedor, errores de precio frecuentes y sin historial centralizado.',
      solution: 'Next.js 15 (Pages Router) con cuatro integraciones: Odoo vía odoo-xmlrpc (catálogo actualizado en tiempo real), Gemini AI (@google/generative-ai) para asistir la redacción y análisis de PDFs recibidos (pdf-parse), jsPDF para generación de PDF con template corporativo en cliente, Google Sheets API (googleapis) como historial auditable, y Nodemailer para envío con adjunto. NextAuth gestiona la autenticación del equipo de ventas.',
      impact: 'Tiempo por cotización: de 45 min a menos de 5. Catálogo siempre actualizado desde Odoo — errores de precio eliminados. Historial centralizado en Google Sheets con filtros por vendedor, período y estatus.',
    },
    highlights: [
      'Odoo XML-RPC (odoo-xmlrpc): catálogo de productos y precios en tiempo real',
      'Gemini AI: asiste redacción de cotizaciones y analiza PDFs de requerimientos (pdf-parse)',
      'jsPDF: generación de PDF con template corporativo en el cliente; descarga con file-saver',
      'Google Sheets API: historial auditable por vendedor, fecha, total y estatus',
      'Nodemailer: envío automático con PDF adjunto; copia al vendedor',
      'NextAuth: autenticación del equipo de ventas con sesiones gestionadas',
    ],
    tech: ['Next.js 15', 'React 19', 'JavaScript', 'Material-UI v7', 'Odoo XML-RPC', 'Gemini AI', 'Google Sheets API', 'jsPDF', 'pdf-parse', 'NextAuth', 'Nodemailer', 'file-saver'],
    category: 'Business Tools · ERP · AI',
    status: 'completed',
    featured: true,
    role: 'Desarrollador Full-Stack',
    date: '2025',
    images: [
      'https://placehold.co/800x450/1E293B/3B82F6?text=Tersoft+Cotizador+-+Interfaz',
      'https://placehold.co/800x450/0F172A/3B82F6?text=Tersoft+Cotizador+-+PDF+Preview',
    ],
    metrics: [
      { label: 'Tiempo por cotización', value: '−80%' },
      { label: 'De 45 min a', value: '<5 min' },
      { label: 'IA integrada', value: 'Gemini AI' },
      { label: 'Odoo vía', value: 'XML-RPC' },
      { label: 'PDF', value: 'jsPDF' },
      { label: 'Historial', value: 'Google Sheets' },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'TypeScript', level: 'advanced' },
      { name: 'React', level: 'advanced' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Vue.js', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Framer Motion', level: 'intermediate' },
      { name: 'Material UI', level: 'intermediate' },
      { name: 'Figma', level: 'intermediate' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express', level: 'advanced' },
      { name: 'Fastify', level: 'intermediate' },
      { name: 'Java / Spring Boot', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'GraphQL', level: 'beginner' },
    ],
  },
  {
    category: 'Bases de datos',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 'advanced' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' },
      { name: 'MSSQL', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate' },
      { name: 'Redis', level: 'beginner' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'PM2', level: 'intermediate' },
      { name: 'Linux', level: 'intermediate' },
      { name: 'Postman', level: 'advanced' },
      { name: 'CI/CD', level: 'intermediate' },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'tersoft-dev',
    role: 'Desarrollador Full-Stack',
    company: 'Tersoft',
    period: 'Diciembre 2024 — Presente',
    current: true,
    description: [
      '15+ desarrollos a medida para clientes de giros como manufactura, distribución, servicios profesionales, retail, construcción, agropecuario, logística y salud.',
      'Desarrollé SageConnect: automatización SAGE 300 ↔ Focaltec que eliminó la reconciliación manual de CFDIs y órdenes de compra (95% reducción de trabajo operativo).',
      'Personalicé Odoo (SaaS/Odoo.sh) cubriendo módulos de Ventas, Contabilidad, Inventario, CRM y Proyectos con integraciones que redujeron tiempos operativos hasta 30% por cliente.',
      'Implementé cotizador interno con lógica dinámica de precios multi-moneda y generación automática de presupuestos en PDF, reduciendo tiempos de respuesta comercial.',
      'Estandaricé procesos de deploy en Odoo.sh para onboarding de nuevos clientes, reduciendo tiempo de implementación de semanas a días.',
    ],
    tech: ['Node.js', 'MSSQL', 'Odoo', 'Python', 'REST APIs', 'PM2', 'Windows Server'],
  },
  {
    id: 'jardines',
    role: 'Desarrollador Web',
    company: 'Jardines de México',
    period: 'Mayo 2023 — Septiembre 2023',
    current: false,
    description: [
      'Sistema de facturación electrónica (CFDI) construido con React, reduciendo errores de facturación manual al centralizar la generación y gestión de facturas en una interfaz web.',
      'Centralización de datos de facturación que permitió generar reportes en tiempo real para el equipo administrativo.',
      'Migración de procesos manuales en Excel a una interfaz web, mejorando la velocidad de procesamiento del equipo de contabilidad.',
    ],
    tech: ['React', 'Node.js', 'JavaScript'],
  },
];

export const services = [
  {
    icon: 'RefreshCw',
    title: 'Automatización ERP',
    description: 'Sincronizo SAGE 300 y Odoo con portales externos. CFDIs, órdenes de compra y pagos propagados automáticamente — sin que el equipo toque dos sistemas.',
    tags: ['SAGE 300', 'Odoo', 'CFDI 4.0', 'XML-RPC'],
    proof: 'SageConnect · Tersoft Cotizador',
  },
  {
    icon: 'Layers',
    title: 'Plataformas SaaS multi-tenant',
    description: 'Arquitecturas donde N empresas operan con datos completamente aislados. Stripe Webhooks, booking en tiempo real, roles y analytics desde el primer tenant.',
    tags: ['PostgreSQL', 'Stripe', 'Docker', 'Next.js'],
    proof: 'Cleany · Cardeal',
  },
  {
    icon: 'Plug',
    title: 'Integración de APIs complejas',
    description: 'Conecto sistemas que hablan lenguajes distintos — XML, REST, OAuth2, XML-RPC — en un flujo sin fricciones. Tres APIs externas activas en paralelo, sin que fallen entre sí.',
    tags: ['TSD XML', 'Focaltec REST', 'Gmail OAuth2', 'Webhooks'],
    proof: 'Cardeal · SageConnect · Cotizador',
  },
  {
    icon: 'Sparkles',
    title: 'Herramientas internas con IA',
    description: 'Apps que eliminan trabajo repetitivo: cotizadores con Gemini AI que leen PDFs de requerimientos, generan documentos y sincronizan datos — de horas a minutos.',
    tags: ['Gemini AI', 'pdf-parse', 'jsPDF', 'Google Sheets'],
    proof: 'Tersoft Cotizador',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Aplicaciones web a medida',
    description: 'Dashboards, paneles de administración, portales y sistemas de gestión internos — adaptados al proceso exacto del negocio, desde diseño hasta deploy.',
    tags: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
    proof: 'Jardines de México · Cardeal',
  },
];

export const stats = [
  { value: '6+', label: 'Proyectos en producción' },
  { value: '3+', label: 'Años de experiencia profesional' },
  { value: '100%', label: 'Proyectos entregados' },
];

export const education: EducationItem[] = [
  {
    id: 'utez',
    degree: 'Ingeniería en Desarrollo y Gestión de Software',
    institution: 'Universidad Tecnológica Emiliano Zapata (UTEZ)',
    location: 'Morelos, México',
    period: '2021 — Abril 2025',
    description: 'Programa de ingeniería orientado al desarrollo de software profesional, cubriendo el ciclo completo: análisis, diseño, implementación, pruebas y despliegue de sistemas.',
    highlights: [
      'Formación full-stack completa: del algoritmo al deploy, cubriendo frontend, backend, bases de datos, DevOps y seguridad.',
      'Proyectos integradores en equipo aplicando metodologías ágiles (Scrum), control de versiones colaborativo y entregas iterativas.',
      'Énfasis en arquitectura de sistemas, patrones de diseño, modelado de datos y construcción de APIs REST escalables.',
      'Desarrollo de competencias en ciberseguridad: análisis de vulnerabilidades, principios OWASP y hardening de aplicaciones web.',
    ],
    topics: [
      {
        category: 'Fundamentos',
        items: ['Algoritmos y Estructuras de Datos', 'Programación Orientada a Objetos', 'Lógica de Programación', 'Matemáticas Discretas', 'Patrones de Diseño'],
      },
      {
        category: 'Frontend & UI/UX',
        items: ['HTML / CSS / JavaScript', 'React', 'Diseño UI/UX', 'Figma', 'Accesibilidad Web', 'Responsive Design'],
      },
      {
        category: 'Backend & APIs',
        items: ['Node.js', 'Java / Spring Boot', 'Python', 'REST APIs', 'Arquitectura de Software', 'Microservicios'],
      },
      {
        category: 'Bases de Datos',
        items: ['MySQL', 'SQL Server', 'MongoDB', 'Modelado Entidad-Relación', 'Administración de BD', 'Optimización de consultas'],
      },
      {
        category: 'DevOps & Cloud',
        items: ['Git / GitHub', 'Linux', 'Docker', 'AWS (fundamentos)', 'CI/CD', 'Redes y Protocolos'],
      },
      {
        category: 'Seguridad',
        items: ['Ciberseguridad', 'OWASP Top 10', 'Análisis de Vulnerabilidades', 'Criptografía', 'Seguridad en APIs'],
      },
    ],
    stack: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'Python', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Linux', 'Git', 'Figma'],
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Fluido / Profesional' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yahirdev13', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yahirdev13', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:yahir.dev13@gmail.com', icon: 'mail' },
];
