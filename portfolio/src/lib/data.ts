import type { Project, ExperienceItem, SocialLink, PersonalInfo, EducationItem } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Yahir Alberto',
  displayName: 'Yahir',
  email: 'yahir.dev13@gmail.com',
  github: 'https://github.com/yahirdev13',
  linkedin: 'https://linkedin.com/in/yahirdev13',
  location: 'México',
  available: true,
};

export const projects: Project[] = [
  {
    id: 'cardeal',
    tech: ['Next.js 15', 'React 19', 'Material-UI v6', 'MongoDB', 'TSD XML API', 'xml2js', 'Flap Gateway', 'JWT', 'bcryptjs', 'crypto-js', '@react-pdf/renderer', 'QRCode', 'Nodemailer', 'React Hook Form', 'Yup', 'Framer Motion'],
    status: 'completed',
    featured: true,
    privateReason: 'nda',
    date: '2024 — 2025',
    images: [
      'https://placehold.co/800x450/1E293B/3B82F6?text=Cardeal+-+Search',
      'https://placehold.co/800x450/0F172A/3B82F6?text=Cardeal+-+Booking',
    ],
  },
  {
    id: 'sageconnect',
    tech: ['Node.js 18', 'Express', 'MSSQL (SQL Server)', 'Focaltec REST API', 'Gmail OAuth2', 'SMTP', 'log4js', 'Winston', 'PM2', 'Windows Server', 'Windows Task Scheduler'],
    status: 'completed',
    featured: true,
    privateReason: 'nda',
    date: '2024 — 2025',
    images: [
      'https://placehold.co/800x450/1E293B/3B82F6?text=SageConnect+-+Dashboard',
      'https://placehold.co/800x450/0F172A/3B82F6?text=SageConnect+-+Sync',
    ],
  },
  {
    id: 'cleany',
    tech: ['Next.js 15', 'TypeScript', 'Fastify', 'PostgreSQL', 'Stripe', 'Docker', 'Docker Compose'],
    status: 'in-progress',
    featured: true,
    date: '2025 — Presente',
    images: [
      'https://placehold.co/800x450/1E293B/FBBF24?text=Cleany+-+Analytics',
      'https://placehold.co/800x450/0F172A/FBBF24?text=Cleany+-+Booking',
    ],
  },
  {
    id: 'tersoft-cotizador',
    tech: ['Next.js 15', 'React 19', 'JavaScript', 'Material-UI v7', 'Odoo XML-RPC', 'Gemini AI', 'Google Sheets API', 'jsPDF', 'pdf-parse', 'NextAuth', 'Nodemailer', 'file-saver'],
    status: 'completed',
    featured: true,
    date: '2025',
    images: [
      'https://placehold.co/800x450/1E293B/3B82F6?text=Tersoft+Quoter',
      'https://placehold.co/800x450/0F172A/3B82F6?text=Tersoft+Quoter+-+PDF',
    ],
  },
  {
    id: 'innova',
    tech: ['Odoo', 'Python', 'XML', 'PostgreSQL', 'OWL', 'REST APIs'],
    status: 'completed',
    featured: false,
    privateReason: 'nda',
    date: '2025',
  },
  {
    id: 'belle-health',
    tech: ['Odoo', 'Python', 'XML', 'PostgreSQL', 'OWL'],
    status: 'completed',
    featured: false,
    privateReason: 'nda',
    date: '2025',
  },
  {
    id: 'biomotion-dashboard',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Vercel'],
    status: 'in-progress',
    featured: false,
    privateReason: 'no-nda',
    date: '2026 — Presente',
  },
  {
    id: 'biomotion-landing',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    status: 'in-progress',
    featured: false,
    privateReason: 'no-nda',
    date: '2026 — Presente',
  },
  {
    id: 'ad-fitness',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'in-progress',
    featured: false,
    privateReason: 'no-nda',
    date: '2026 — Presente',
  },
  {
    id: 'pegasus',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'react-hook-form', 'Zod', '@react-pdf/renderer', 'Recharts', 'Vitest', 'Playwright'],
    status: 'in-progress',
    featured: true,
    privateReason: 'no-nda',
    date: '2026 — Presente',
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'tersoft-dev',
    current: true,
    tech: ['Node.js', 'MSSQL', 'Odoo', 'Python', 'REST APIs', 'PM2', 'Windows Server'],
  },
  {
    id: 'jardines',
    current: false,
    tech: ['React', 'Node.js', 'JavaScript'],
  },
];

export const education: EducationItem[] = [
  {
    id: 'utez',
    stack: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'Python', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Linux', 'Git', 'Figma'],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/yahirdev13', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yahirdev13', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:yahir.dev13@gmail.com', icon: 'mail' },
];
