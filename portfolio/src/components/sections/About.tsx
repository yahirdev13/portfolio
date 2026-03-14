'use client';

import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, fadeInUp, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

const stackHighlights = [
  'Next.js', 'TypeScript', 'Node.js', 'React', 'PostgreSQL',
  'MongoDB', 'Docker', 'Fastify', 'Tailwind CSS', 'REST APIs',
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto rounded-2xl p-8 sm:p-12"
        style={{
          background: '#1E293B',
          border: '1px solid rgba(148, 163, 184, 0.10)',
        }}
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: '#3B82F6' }}
          >
            Sobre mí
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: '#F1F5F9' }}>
            Desarrollador, builder, freelancer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="space-y-4">
              {personalInfo.bio.split('\n').filter(Boolean).map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '4+', label: 'Proyectos en producción' },
                { value: '2+', label: 'Años de experiencia' },
                { value: '100%', label: 'Proyectos entregados' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: 'rgba(59, 130, 246, 0.05)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: '#3B82F6' }}>
                    {value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#64748B' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stack pills */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#64748B' }}>
              Stack principal
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {stackHighlights.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{
                    background: '#334155',
                    color: '#94A3B8',
                    border: '1px solid rgba(148, 163, 184, 0.10)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Available banner */}
            {personalInfo.available && (
              <div
                className="mt-8 p-4 rounded-xl flex items-center gap-3"
                style={{
                  background: 'rgba(52, 211, 153, 0.08)',
                  border: '1px solid rgba(52, 211, 153, 0.20)',
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: '#34D399' }}
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: '#34D399' }}>
                    Disponible para nuevos proyectos
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>
                    Freelance · Tiempo parcial o completo
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
