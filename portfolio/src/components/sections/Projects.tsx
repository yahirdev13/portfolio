'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';
import { staggerContainer, staggerItem, cardHover, fadeInUp, viewportConfig } from '@/lib/animations';
import { projects } from '@/lib/data';

const statusConfig = {
  completed: {
    label: 'Completado',
    icon: CheckCircle,
    color: '#34D399',
    bg: 'rgba(52, 211, 153, 0.10)',
    border: 'rgba(52, 211, 153, 0.25)',
  },
  'in-progress': {
    label: 'En desarrollo',
    icon: Clock,
    color: '#FBBF24',
    bg: 'rgba(251, 191, 36, 0.10)',
    border: 'rgba(251, 191, 36, 0.25)',
  },
  planned: {
    label: 'Planeado',
    icon: Clock,
    color: '#64748B',
    bg: 'rgba(100, 116, 139, 0.10)',
    border: 'rgba(100, 116, 139, 0.25)',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: '#3B82F6' }}
          >
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#F1F5F9' }}>
            Lo que he construido
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Proyectos reales con código en producción y clientes satisfechos.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const status = statusConfig[project.status];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={cardHover}
                className="relative rounded-xl p-6 cursor-default group"
                style={{
                  background: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.10)',
                }}
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: status.bg,
                      border: `1px solid ${status.border}`,
                      color: status.color,
                    }}
                  >
                    <StatusIcon size={12} />
                    {status.label}
                  </span>

                  {/* Links */}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-colors duration-200"
                        style={{ color: '#64748B' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-colors duration-200"
                        style={{ color: '#64748B' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F1F5F9' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: '#334155',
                        color: '#94A3B8',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
