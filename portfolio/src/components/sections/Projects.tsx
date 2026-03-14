'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import { staggerContainer, staggerItem, cardHover, fadeInUp, viewportConfig } from '@/lib/animations';
import { projects } from '@/lib/data';

const statusConfig = {
  completed: {
    label: 'En producción',
    icon: CheckCircle,
    color: '#34D399',
    bg: 'rgba(52, 211, 153, 0.08)',
    border: 'rgba(52, 211, 153, 0.22)',
  },
  'in-progress': {
    label: 'En desarrollo',
    icon: Clock,
    color: '#FBBF24',
    bg: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.22)',
  },
  planned: {
    label: 'Planeado',
    icon: Clock,
    color: '#64748B',
    bg: 'rgba(100, 116, 139, 0.08)',
    border: 'rgba(100, 116, 139, 0.22)',
  },
};

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={cardHover}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: '#1E293B',
        border: '1px solid rgba(148, 163, 184, 0.10)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-0.5 w-full"
        style={{
          background: project.status === 'completed'
            ? 'linear-gradient(90deg, #3B82F6, transparent)'
            : 'linear-gradient(90deg, #FBBF24, transparent)',
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            {project.category && (
              <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: '#3B82F6' }}>
                {project.category}
              </p>
            )}
            <h3 className="text-xl font-bold" style={{ color: '#F1F5F9' }}>
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
              style={{ background: status.bg, border: `1px solid ${status.border}`, color: status.color }}
            >
              <StatusIcon size={10} />
              {status.label}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="px-2.5 py-1.5 rounded-lg flex items-center gap-1.5"
                style={{
                  background: 'rgba(59, 130, 246, 0.06)',
                  border: '1px solid rgba(59, 130, 246, 0.14)',
                }}
              >
                <TrendingUp size={10} style={{ color: '#3B82F6' }} />
                <span className="text-xs font-semibold" style={{ color: '#60A5FA' }}>{m.value}</span>
                <span className="text-xs" style={{ color: '#475569' }}>{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Expandable highlights */}
        {project.highlights && (
          <div className="mb-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
              style={{ color: expanded ? '#60A5FA' : '#64748B' }}
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Ocultar detalles' : 'Ver detalles técnicos'}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 space-y-1.5 overflow-hidden"
                >
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#94A3B8' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />
                      {h}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="flex items-end justify-between gap-3 pt-4 border-t" style={{ borderColor: 'rgba(148,163,184,0.08)' }}>
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-xs"
                style={{ background: '#334155', color: '#94A3B8' }}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-xs" style={{ background: '#334155', color: '#64748B' }}>
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-200"
                style={{ color: '#475569', background: 'rgba(51,65,85,0.5)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; }}
              >
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-200"
                style={{ color: '#475569', background: 'rgba(51,65,85,0.5)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; }}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3B82F6' }}>
              Proyectos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: '#F1F5F9' }}>
              Lo que he construido
            </h2>
            <p className="mt-2 text-base" style={{ color: '#64748B' }}>
              Código real. Clientes reales. Problemas reales resueltos.
            </p>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
            style={{
              background: 'rgba(52, 211, 153, 0.06)',
              border: '1px solid rgba(52, 211, 153, 0.15)',
              color: '#34D399',
            }}
          >
            <CheckCircle size={14} />
            {projects.filter(p => p.status === 'completed').length} completados · {projects.filter(p => p.status === 'in-progress').length} en curso
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
