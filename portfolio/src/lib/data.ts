import type { Project, SkillCategory, ExperienceItem, SocialLink, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Yahir Alberto',
  displayName: 'Yahir',
  role: 'Full-Stack Developer',
  tagline: 'Construyo productos digitales que resuelven problemas reales — de la idea al deploy.',
  bio: `Soy un desarrollador Full-Stack freelancer con experiencia construyendo plataformas reales usadas por clientes reales. Me especializo en Next.js, Node.js y arquitecturas que escalan.

He trabajado en automatización de ERPs empresariales, plataformas SaaS multi-tenant, apps de cotización con integraciones complejas y plataformas de car rental con pagos en producción.

No hago demos de juguete. Cada proyecto en este portafolio está en producción o en desarrollo activo.`,
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
    description: 'Plataforma full-stack de reserva de autos en renta construida con Next.js 15 y React 19. Integra la API TSD en tiempo real, procesa pagos con Flap y genera PDFs de confirmación con código QR.',
    longDescription: 'Cardeal es una plataforma completa de car rental que desarrollé integrando múltiples sistemas externos. El flujo de reserva va desde búsqueda de disponibilidad en tiempo real vía la API TSD (XML) hasta confirmación de pago, pasando por selección de seguro, extras y procesamiento con el gateway Flap — incluyendo webhooks para confirmaciones asíncronas.\n\nLa plataforma genera PDFs de confirmación y códigos QR de reserva automáticamente. Incluye autenticación con JWT y sesiones persistentes, además de un módulo de soluciones empresariales con formulario de contacto para clientes corporativos.',
    highlights: [
      'Flujo completo: Búsqueda → Selección → Seguro/Extras → Pago → Confirmación',
      'Integración con API TSD (XML) para disponibilidad de autos en tiempo real',
      'Pagos con Flap Gateway + webhooks para confirmaciones asíncronas',
      'Generación automática de PDFs de confirmación y códigos QR de reserva',
      'Autenticación JWT con sesiones persistentes',
      'Módulo de soluciones empresariales con formulario de contacto corporativo',
    ],
    tech: ['Next.js 15', 'React 19', 'Material-UI v6', 'Framer Motion', 'MongoDB', 'JWT', 'React Hook Form', 'React-PDF', 'QRCode', 'Nodemailer', 'Flap Payment Gateway', 'TSD XML API'],
    category: 'SaaS Platform · Car Rental',
    status: 'completed',
    featured: true,
    metrics: [
      { label: 'Flujo completo', value: 'Búsqueda → Pago' },
      { label: 'Pagos', value: 'Flap + Webhooks' },
      { label: 'Deploy', value: 'Vercel' },
    ],
  },
  {
    id: 'sageconnect',
    title: 'SageConnect',
    description: 'Sistema de automatización que sincroniza bidirecionalmente SAGE 300 con el Portal de Proveedores (Focaltec), eliminando la captura manual de CFDIs, órdenes de compra y pagos.',
    longDescription: 'SageConnect automatiza la sincronización bidireccional entre el ERP SAGE 300 y el Portal de Proveedores (portaldeproveedores.mx / Focaltec), eliminando completamente la captura manual entre ambos sistemas.\n\nGestiona el ciclo de vida completo de Órdenes de Compra — creación, actualización, cierre y cancelación — de forma sincronizada en ambas plataformas. Descarga y procesa CFDIs (facturas electrónicas fiscales mexicanas) automáticamente y los importa directo al ERP. También procesa pagos y complementos de pago.\n\nEl sistema incluye un dashboard web con visualización de logs en tiempo real y notificaciones automáticas por correo (SMTP / Gmail OAuth2). Está diseñado con arquitectura multi-tenant: cada empresa opera con credenciales independientes en paralelo, sin interferencia entre clientes.\n\nEl código se distribuye ofuscado y corre en Windows Server con PM2 y tareas programadas.',
    highlights: [
      'Sincronización bidireccional SAGE 300 ↔ Portal de Proveedores (Focaltec)',
      'Ciclo de vida completo de Órdenes de Compra: creación, actualización, cierre, cancelación',
      'Descarga y procesamiento automático de CFDIs con importación directa al ERP',
      'Dashboard web con logs en tiempo real y notificaciones por correo (Gmail OAuth2)',
      'Arquitectura multi-tenant: múltiples empresas operando en paralelo sin interferencia',
      'Deploy en Windows Server con PM2 + código distribuido ofuscado',
    ],
    tech: ['Node.js', 'Express', 'MSSQL', 'Focaltec REST API', 'Nodemailer', 'Gmail OAuth2', 'log4js', 'Winston', 'PM2', 'Windows Server'],
    category: 'ERP Automation',
    status: 'completed',
    featured: true,
    metrics: [
      { label: 'Reducción trabajo manual', value: '95%' },
      { label: 'Empresas en paralelo', value: 'Multi-tenant' },
      { label: 'Tiempo de sync', value: '<2 min' },
    ],
  },
  {
    id: 'cleany',
    title: 'Cleany SaaS',
    description: 'Plataforma SaaS multi-tenant para empresas de limpieza: booking, pagos con Stripe, gestión de empleados y dashboard analytics en tiempo real.',
    longDescription: 'Arquitectura SaaS completa que permite a múltiples empresas de limpieza operar en la misma plataforma con aislamiento total de datos. Incluye sistema de booking con disponibilidad en tiempo real, cobros automáticos con Stripe, app de seguimiento para empleados y dashboard con métricas de negocio.',
    highlights: [
      'Arquitectura multi-tenant con aislamiento de datos por empresa',
      'Sistema de booking con disponibilidad en tiempo real',
      'Pagos automáticos y suscripciones con Stripe',
      'Dashboard analytics: ingresos, ocupación, retención de clientes',
      'Notificaciones push para empleados y clientes',
    ],
    tech: ['Next.js 15', 'Fastify', 'PostgreSQL', 'Stripe', 'Docker', 'TypeScript'],
    category: 'SaaS Platform',
    status: 'in-progress',
    featured: true,
    metrics: [
      { label: 'Arquitectura', value: 'Multi-tenant' },
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'Estado', value: 'En desarrollo' },
    ],
  },
  {
    id: 'tersoft-cotizador',
    title: 'Tersoft Cotizador',
    description: 'App web que automatiza el flujo de cotizaciones integrando Odoo ERP con Google Sheets, generando PDFs y enviando emails automáticos al equipo de ventas.',
    longDescription: 'El equipo de ventas de Tersoft generaba cotizaciones manualmente en hojas de cálculo — proceso lento y propenso a errores. El cotizador conecta Odoo (catálogo de productos y precios) con Google Sheets (historial de cotizaciones) y automatiza: generación de PDF personalizado, envío de email al cliente y registro en CRM.',
    highlights: [
      'Integración bidireccional Odoo ERP ↔ Google Sheets',
      'Generación de PDFs dinámicos con template corporativo',
      'Envío automático de emails con adjunto al cliente',
      'Sincronización de catálogo de productos desde Odoo en tiempo real',
      'Dashboard de cotizaciones por vendedor y período',
    ],
    tech: ['Next.js', 'Node.js', 'Odoo API', 'Google Sheets API', 'Nodemailer', 'Puppeteer'],
    category: 'Business Tools',
    status: 'completed',
    featured: false,
    metrics: [
      { label: 'Tiempo por cotización', value: '−80%' },
      { label: 'Integración ERP', value: 'Odoo' },
      { label: 'PDFs automáticos', value: 'Sí' },
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
      'Implementé soluciones modulares en Odoo.sh y desarrollos personalizados para múltiples clientes, estandarizando procesos y acelerando deploys.',
      'Desarrollé SageConnect: sistema de automatización que sincroniza SAGE 300 con el Portal de Proveedores (Focaltec), eliminando reconciliación manual de CFDIs y órdenes de compra.',
      'Personalicé Odoo (SaaS/Odoo.sh) para varios clientes cubriendo módulos de Ventas, Contabilidad, Inventario, CRM y Proyectos con integraciones que redujeron tiempos operativos en 30%.',
      'Desarrollé cotizador interno con lógica dinámica de precios y generación automática de presupuestos, reduciendo tiempo de respuesta a solicitudes comerciales.',
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
      'Desarrollé sistema de facturación en línea con React que centralizó la generación y gestión de facturas mediante una interfaz intuitiva.',
      'Mejoré tiempos de procesamiento centralizando datos y generando reportes en tiempo real, incrementando productividad y reduciendo errores manuales.',
    ],
    tech: ['React', 'Node.js'],
  },
];

export const services = [
  {
    icon: '🏗️',
    title: 'Aplicaciones Web Full-Stack',
    description: 'De cero a producción. Next.js + Node.js + base de datos + deploy.',
  },
  {
    icon: '🔗',
    title: 'Integraciones y Automatización',
    description: 'Conecto ERPs, APIs externas y sistemas legacy. Elimino trabajo manual.',
  },
  {
    icon: '☁️',
    title: 'Arquitecturas SaaS',
    description: 'Multi-tenant, roles y permisos, pagos con Stripe, analytics en tiempo real.',
  },
  {
    icon: '🔍',
    title: 'Consultoría Técnica',
    description: 'Revisión de stack, arquitectura escalable, code review y roadmap técnico.',
  },
];

export const stats = [
  { value: '4+', label: 'Proyectos en producción' },
  { value: '2+', label: 'Años de experiencia' },
  { value: '100%', label: 'Proyectos entregados' },
  { value: '0', label: 'Proyectos abandonados' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yahirdev13', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yahirdev13', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:yahir.dev13@gmail.com', icon: 'mail' },
];
