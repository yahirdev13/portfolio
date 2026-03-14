import type { Project, SkillCategory, ExperienceItem, SocialLink, PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Yahir Alberto',
  displayName: 'Yahir',
  role: 'Full-Stack Developer',
  tagline: 'Building real-world products from idea to production.',
  bio: `Soy un desarrollador Full-Stack freelancer especializado en construir productos digitales que resuelven problemas reales.
  Con experiencia en startups y proyectos empresariales, diseño y desarrollo soluciones escalables desde el frontend hasta la automatización de sistemas ERP.
  Me apasiona escribir código limpio, diseñar arquitecturas sólidas y entregar valor de forma consistente.`,
  email: 'yahir.dev13@gmail.com',
  github: 'https://github.com/yahirdev13',
  linkedin: 'https://linkedin.com/in/yahirdev13',
  location: 'México',
  available: true,
};

export const projects: Project[] = [
  {
    id: 'qardeal',
    title: 'QarDeal',
    description: 'Plataforma nacional de renta de vehículos en México con búsqueda avanzada, pagos y gestión de reservas.',
    longDescription: 'Plataforma full-stack para renta de vehículos a nivel nacional en México. Incluye panel de administración, búsqueda por ubicación/fecha, integración de pagos y sistema de reservas en tiempo real.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    status: 'completed',
    featured: true,
  },
  {
    id: 'tersoft',
    title: 'Tersoft Cotizador',
    description: 'App de cotizaciones integrada con Odoo, Google Sheets y envío automatizado de emails para equipo de ventas.',
    longDescription: 'Aplicación web que automatiza el proceso de cotización conectando Odoo ERP con Google Sheets. Genera PDFs, envía correos automáticos y sincroniza datos en tiempo real.',
    tech: ['Next.js', 'Node.js', 'Google Sheets API', 'Nodemailer', 'Odoo API'],
    status: 'completed',
    featured: true,
  },
  {
    id: 'sageconnect',
    title: 'SageConnect',
    description: 'Automatización ERP: sincronización bidireccional entre SAGE 300 y Portal de Proveedores con procesamiento de CFDIs.',
    longDescription: 'Sistema de automatización que conecta SAGE 300 ERP con un portal de proveedores. Procesa CFDIs, sincroniza facturas y pedidos, y genera reportes de conciliación automáticos.',
    tech: ['Node.js', 'MSSQL', 'Express', 'TypeScript', 'SAGE 300 API'],
    status: 'completed',
    featured: true,
  },
  {
    id: 'cleany',
    title: 'Cleany SaaS',
    description: 'Arquitectura SaaS multi-tenant para gestión de servicios de limpieza: booking, pagos, roles y dashboard analytics.',
    longDescription: 'Plataforma SaaS multi-tenant para empresas de limpieza de casas. Incluye sistema de booking, gestión de empleados, pagos con Stripe, dashboard analytics y app mobile.',
    tech: ['Next.js 15', 'Fastify', 'PostgreSQL', 'Stripe', 'Docker'],
    status: 'in-progress',
    featured: true,
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
      { name: 'Material UI', level: 'intermediate' },
      { name: 'Framer Motion', level: 'intermediate' },
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
    ],
  },
  {
    category: 'Bases de Datos',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 'advanced' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' },
      { name: 'MSSQL', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Docker', level: 'intermediate' },
      { name: 'AWS', level: 'beginner' },
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'Linux', level: 'intermediate' },
      { name: 'Postman', level: 'advanced' },
      { name: 'Vercel', level: 'advanced' },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'freelance',
    role: 'Full-Stack Developer Freelancer',
    company: 'Independiente',
    period: '2023 — Presente',
    current: true,
    description: [
      'Desarrollo de plataformas web completas para clientes en México y LATAM.',
      'Diseño de arquitecturas escalables con Next.js, Node.js y bases de datos relacionales/NoSQL.',
      'Automatización de procesos empresariales e integraciones con ERPs (SAGE 300, Odoo).',
      'Consultoría técnica y definición de stack tecnológico para startups early-stage.',
    ],
    tech: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 'tersoft-dev',
    role: 'Desarrollador Web',
    company: 'Tersoft',
    period: '2023',
    current: false,
    description: [
      'Desarrollo del módulo de cotizaciones integrado con Odoo ERP.',
      'Automatización de reportes y sincronización de datos con Google Sheets.',
      'Implementación de sistema de envío de correos automáticos con PDFs dinámicos.',
    ],
    tech: ['Next.js', 'Node.js', 'Odoo API', 'Google Sheets API'],
  },
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
