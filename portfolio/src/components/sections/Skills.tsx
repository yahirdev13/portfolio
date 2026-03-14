'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

// Tech logo slug from simpleicons.org + brand hex color
const techGroups = [
  {
    label: 'Frontend',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.06)',
    border: 'rgba(96,165,250,0.15)',
    techs: [
      { name: 'TypeScript',    slug: 'typescript',      hex: '3178C6' },
      { name: 'React',         slug: 'react',           hex: '61DAFB' },
      { name: 'Next.js',       slug: 'nextdotjs',       hex: 'ffffff' },
      { name: 'Vue.js',        slug: 'vuedotjs',        hex: '4FC08D' },
      { name: 'Tailwind CSS',  slug: 'tailwindcss',     hex: '06B6D4' },
      { name: 'Framer Motion', slug: 'framer',          hex: '0055FF' },
      { name: 'Material UI',   slug: 'mui',             hex: '007FFF' },
      { name: 'Figma',         slug: 'figma',           hex: 'F24E1E' },
    ],
  },
  {
    label: 'Backend',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.15)',
    techs: [
      { name: 'Node.js',       slug: 'nodedotjs',       hex: '5FA04E' },
      { name: 'Express',       slug: 'express',         hex: 'ffffff' },
      { name: 'Fastify',       slug: 'fastify',         hex: 'ffffff' },
      { name: 'Spring Boot',   slug: 'springboot',      hex: '6DB33F' },
      { name: 'Python',        slug: 'python',          hex: '3776AB' },
      { name: 'GraphQL',       slug: 'graphql',         hex: 'E10098' },
      { name: 'Nodemailer',    slug: 'nodemailer',      hex: '22B573' },
    ],
  },
  {
    label: 'Bases de datos',
    color: '#FBBF24',
    bg: 'rgba(251,191,36,0.06)',
    border: 'rgba(251,191,36,0.15)',
    techs: [
      { name: 'MongoDB',       slug: 'mongodb',         hex: '47A248' },
      { name: 'PostgreSQL',    slug: 'postgresql',      hex: '4169E1' },
      { name: 'MySQL',         slug: 'mysql',           hex: '4479A1' },
      { name: 'SQL Server',    slug: 'microsoftsqlserver', hex: 'CC2927' },
      { name: 'Firebase',      slug: 'firebase',        hex: 'DD2C00' },
      { name: 'Redis',         slug: 'redis',           hex: 'FF4438' },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: '#C084FC',
    bg: 'rgba(192,132,252,0.06)',
    border: 'rgba(192,132,252,0.15)',
    techs: [
      { name: 'Git',           slug: 'git',             hex: 'F05032' },
      { name: 'GitHub',        slug: 'github',          hex: 'ffffff' },
      { name: 'Docker',        slug: 'docker',          hex: '2496ED' },
      { name: 'Vercel',        slug: 'vercel',          hex: 'ffffff' },
      { name: 'Linux',         slug: 'linux',           hex: 'FCC624' },
      { name: 'Postman',       slug: 'postman',         hex: 'FF6C37' },
      { name: 'PM2',           slug: 'pm2',             hex: '2B037A' },
      { name: 'AWS',           slug: 'amazonwebservices', hex: 'FF9900' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3B82F6' }}>
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-2" style={{ color: '#F1F5F9' }}>
            Stack completo
          </h2>
          <p className="text-base" style={{ color: '#64748B' }}>
            Tecnologías que aplico en proyectos reales — de la interfaz al servidor.
          </p>
        </motion.div>

        {/* Groups */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-8"
        >
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1, y: 0,
                  transition: { delay: gi * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                },
              }}
            >
              {/* Group label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1" style={{ background: 'rgba(148,163,184,0.08)' }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    color: group.color,
                    background: group.bg,
                    border: `1px solid ${group.border}`,
                  }}
                >
                  {group.label}
                </span>
                <div className="h-px flex-1" style={{ background: 'rgba(148,163,184,0.08)' }} />
              </div>

              {/* Tech cards grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default"
                    style={{
                      background: '#1E293B',
                      border: '1px solid rgba(148,163,184,0.08)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = group.border;
                      (e.currentTarget as HTMLElement).style.background = group.bg;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148,163,184,0.08)';
                      (e.currentTarget as HTMLElement).style.background = '#1E293B';
                    }}
                  >
                    {/* Logo */}
                    <div className="w-7 h-7 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.hex}`}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                        loading="lazy"
                      />
                    </div>
                    {/* Name */}
                    <span
                      className="text-center leading-tight"
                      style={{
                        color: '#94A3B8',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        lineHeight: 1.2,
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
