import type { Project, SkillCategory, ExperienceItem, SocialLink, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Yahir Alberto',
  displayName: 'Yahir',
  role: 'Full-Stack Developer',
  tagline: 'Construyo productos digitales que resuelven problemas reales — de la idea al deploy.',
  bio: `Soy un desarrollador Full-Stack freelancer con experiencia construyendo plataformas reales usadas por clientes reales. Me especializo en Next.js, Node.js y arquitecturas que escalan.

He trabajado en automatización de ERPs empresariales, plataformas SaaS multi-tenant, apps de cotización con integraciones complejas y marketplaces de vehículos nacionales.

No hago demos de juguete. Cada proyecto en este portafolio está en producción o en desarrollo activo.`,
  email: 'yahir.dev13@gmail.com',
  github: 'https://github.com/yahirdev13',
  linkedin: 'https://linkedin.com/in/yahirdev13',
  location: 'México',
  available: true,
};

export const projects: Project[] = [
  {
    id: 'sageconnect',
    title: 'SageConnect',
    description: 'Sistema de automatización ERP que sincroniza SAGE 300 con un portal de proveedores, procesando CFDIs y eliminando la reconciliación manual.',
    longDescription: 'Empresa manufacturera procesaba facturas manualmente entre SAGE 300 y su portal de proveedores — 4+ horas diarias de trabajo operativo. SageConnect automatiza la sincronización bidireccional: recibe CFDIs del SAT, los valida, los concilia contra órdenes de compra en SAGE 300 y actualiza el estado en el portal en tiempo real.',
    highlights: [
      'Reduce 4h diarias de trabajo manual a proceso automático',
      'Procesamiento de CFDIs con validación contra SAT',
      'Sincronización bidireccional SAGE 300 ↔ Portal',
      'Reportes de conciliación automáticos por proveedor',
      'Sistema de alertas para discrepancias y errores',
    ],
    tech: ['Node.js', 'TypeScript', 'MSSQL', 'Express', 'SAGE 300 API', 'SAT API'],
    category: 'ERP Automation',
    status: 'completed',
    featured: true,
    metrics: [
      { label: 'Reducción trabajo manual', value: '95%' },
      { label: 'CFDIs procesados/día', value: '200+' },
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
      'Dashboard analytics: ingresos, ocupación, retención',
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
    id: 'qardeal',
    title: 'QarDeal',
    description: 'Marketplace nacional de renta de vehículos en México con búsqueda geolocalizada, reservas en tiempo real y panel de administración completo.',
    longDescription: 'Plataforma full-stack para conectar renters con propietarios de vehículos en México. Búsqueda por ubicación y fecha con disponibilidad en tiempo real, flujo de reserva completo, panel de admin para gestión de flota y sistema de reseñas.',
    highlights: [
      'Búsqueda geolocalizada por ciudad y rango de fechas',
      'Reservas en tiempo real con verificación de disponibilidad',
      'Panel de administración para gestión de flota',
      'Sistema de reseñas y verificación de usuarios',
      'Integración de pagos y gestión de contratos digitales',
    ],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS', 'JWT'],
    category: 'Marketplace',
    status: 'completed',
    featured: true,
    metrics: [
      { label: 'Cobertura', value: 'Nacional MX' },
      { label: 'Tipo', value: 'Marketplace' },
      { label: 'Auth', value: 'JWT + OAuth' },
    ],
  },
  {
    id: 'tersoft',
    title: 'Tersoft Cotizador',
    description: 'App web que automatiza el flujo de cotizaciones integrando Odoo ERP con Google Sheets, generando PDFs y enviando emails automáticos al equipo de ventas.',
    longDescription: 'El equipo de ventas de Tersoft generaba cotizaciones manualmente en hojas de cálculo — proceso lento y propenso a errores. El cotizador conecta Odoo (catálogo de productos y precios) con Google Sheets (historial de cotizaciones) y automatiza: generación de PDF personalizado, envío de email al cliente y registro en CRM.',
    highlights: [
      'Integración bidireccional Odoo ERP ↔ Google Sheets',
      'Generación de PDFs dinámicos con template corporativo',
      'Envío automático de emails con adjunto al cliente',
      'Sincronización de catálogo de productos desde Odoo',
      'Dashboard de cotizaciones por vendedor y período',
    ],
    tech: ['Next.js', 'Node.js', 'Odoo API', 'Google Sheets API', 'Nodemailer', 'Puppeteer'],
    category: 'Business Tools',
    status: 'completed',
    featured: false,
    metrics: [
      { label: 'Tiempo por cotización', value: '−80%' },
      { label: 'Integración ERP', value: 'Odoo' },
      { label: 'PDFs auto', value: 'Sí' },
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
      { name: 'AWS', level: 'beginner' },
      { name: 'Linux', level: 'intermediate' },
      { name: 'Postman', level: 'advanced' },
      { name: 'CI/CD', level: 'intermediate' },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'freelance',
    role: 'Full-Stack Developer — Freelancer',
    company: 'Independiente',
    period: '2023 — Presente',
    current: true,
    description: [
      'Desarrollo de plataformas web completas: desde arquitectura hasta deploy en producción.',
      'Automatización de procesos empresariales e integraciones con ERPs (SAGE 300, Odoo) que eliminan trabajo manual operativo.',
      'Construcción de arquitecturas SaaS multi-tenant con Next.js 15, Fastify y PostgreSQL.',
      'Consultoría técnica para startups: definición de stack, arquitectura y roadmap técnico.',
    ],
    tech: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    id: 'tersoft-dev',
    role: 'Desarrollador Web',
    company: 'Tersoft',
    period: '2023',
    current: false,
    description: [
      'Desarrollé el módulo de cotizaciones integrado con Odoo ERP para el equipo de ventas.',
      'Reduje el tiempo de generación de cotizaciones en ~80% mediante automatización del flujo completo.',
      'Implementé generación de PDFs dinámicos y envío automático de correos con Nodemailer.',
      'Sincronicé catálogo de productos desde Odoo con Google Sheets en tiempo real.',
    ],
    tech: ['Next.js', 'Node.js', 'Odoo API', 'Google Sheets API', 'Nodemailer', 'Puppeteer'],
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
  {
    label: 'GitHub',
    href: 'https://github.com/yahirdev13',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yahirdev13',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:yahir.dev13@gmail.com',
    icon: 'mail',
  },
];
