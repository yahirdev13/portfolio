'use client';

import { motion } from 'framer-motion';
import { Layers, LayoutDashboard, Plug, RefreshCw, Sparkles } from 'lucide-react';
import { slideInLeft, slideInRight, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '@/lib/animations';
import { personalInfo, services, stats, languages } from '@/lib/data';

const serviceIcons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  RefreshCw,
  Layers,
  Plug,
  Sparkles,
  LayoutDashboard,
};

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3B82F6' }}>
            Sobre mí
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: '#F1F5F9' }}>
            Builder. Freelancer. Solucionador.
          </h2>
        </motion.div>

        {/* Bio + Stack — 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Bio */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4"
          >
            {personalInfo.bio.split('\n\n').filter(Boolean).map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
                {paragraph.trim()}
              </p>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl gradient-border"
                  style={{ background: 'rgba(59, 130, 246, 0.04)' }}
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: '#3B82F6' }}>
                    {value}
                  </div>
                  <div className="text-xs leading-tight" style={{ color: '#64748B' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right col — stack + availability */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#64748B' }}>
              Stack principal
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                'Next.js', 'TypeScript', 'React', 'Node.js',
                'Fastify', 'PostgreSQL', 'MongoDB', 'Docker',
                'Tailwind CSS', 'REST APIs', 'MSSQL', 'Stripe',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: '#1E293B',
                    border: '1px solid rgba(148, 163, 184, 0.10)',
                    color: '#94A3B8',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.30)';
                    e.currentTarget.style.color = '#60A5FA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.10)';
                    e.currentTarget.style.color = '#94A3B8';
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Availability card */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(52, 211, 153, 0.06)',
                border: '1px solid rgba(52, 211, 153, 0.18)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 animate-pulse" style={{ background: '#34D399' }} />
                <div className="flex-1">
                  <p className="text-sm font-semibold mb-1" style={{ color: '#34D399' }}>
                    Disponible para nuevos proyectos
                  </p>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748B' }}>
                    Acepto proyectos freelance de alcance definido o colaboraciones de largo plazo.
                    Tiempo parcial y completo disponible.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: 'rgba(52, 211, 153, 0.08)',
                          border: '1px solid rgba(52, 211, 153, 0.18)',
                          color: '#6EE7B7',
                        }}
                      >
                        {lang.name} · <span style={{ color: '#34D399' }}>{lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-6"
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#64748B' }}>
            En qué puedo ayudarte
          </h3>
          <p className="text-sm" style={{ color: '#334155' }}>
            Especialidades con proyectos reales que lo respaldan.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="flex flex-col p-5 rounded-xl transition-all duration-200"
                style={{
                  background: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148, 163, 184, 0.08)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 flex-shrink-0"
                  style={{
                    background: 'rgba(59, 130, 246, 0.10)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                  }}
                >
                  {Icon && <Icon size={15} style={{ color: '#3B82F6' }} />}
                </div>

                {/* Title + description */}
                <h4 className="text-sm font-semibold mb-1.5" style={{ color: '#F1F5F9' }}>
                  {service.title}
                </h4>
                <p className="text-xs leading-relaxed flex-1" style={{ color: '#64748B' }}>
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-xs"
                      style={{
                        background: 'rgba(59,130,246,0.07)',
                        color: '#475569',
                        border: '1px solid rgba(59,130,246,0.10)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Proof line */}
                <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(148,163,184,0.07)' }}>
                  <span className="text-xs" style={{ color: '#334155' }}>
                    → <span style={{ color: '#475569' }}>{service.proof}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
