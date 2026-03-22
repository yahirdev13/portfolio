'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle, Maximize2, Lock } from 'lucide-react';
import { staggerContainer, staggerItem, cardHover, fadeInUp, viewportConfig } from '@/lib/animations';
import { projects } from '@/lib/data';
import ProjectModal from './ProjectModal';
import type { Project } from '@/types';

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

function ProjectCard({ project, onOpenModal }: { project: Project; onOpenModal: (p: Project) => void }) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={cardHover}
      onClick={() => onOpenModal(project)}
      className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer"
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
          <div className="grid grid-cols-3 gap-px mb-4 rounded-xl overflow-hidden" style={{ border: '1px solid rgba(148,163,184,0.08)' }}>
            {project.metrics.slice(0, 3).map((m) => (
              <div
                key={m.label}
                className="flex flex-col px-3 py-2.5"
                style={{ background: '#0F172A' }}
              >
                <span className="text-sm font-bold leading-tight truncate" style={{ color: '#60A5FA' }}>{m.value}</span>
                <span className="text-xs leading-tight mt-0.5 truncate" style={{ color: '#475569' }}>{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Details button */}
        <div className="mb-4">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
            style={{ color: '#64748B' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}
          >
            <Maximize2 size={13} />
            Ver detalles técnicos
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="flex items-end justify-between gap-3 pt-4 border-t" style={{ borderColor: 'rgba(148,163,184,0.08)' }}>
          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium"
                style={{ background: 'rgba(51,65,85,0.6)', color: '#94A3B8', border: '1px solid rgba(148,163,184,0.09)' }}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span
                className="px-2 py-1 rounded-md text-xs font-medium"
                style={{ background: 'rgba(59,130,246,0.06)', color: '#475569', border: '1px solid rgba(59,130,246,0.12)' }}
              >
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-1.5">
            {project.privateReason ? (
              <span
                title={project.privateReason}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(251,191,36,0.08)',
                  border: '1px solid rgba(251,191,36,0.20)',
                  color: '#FBBF24',
                }}
              >
                <Lock size={11} /> Código privado · NDA
              </span>
            ) : (
              <>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg transition-all duration-200"
                    style={{ color: '#475569', background: 'rgba(51,65,85,0.5)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#3B82F6'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; }}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
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
            <ProjectCard key={project.id} project={project} onOpenModal={setSelectedProject} />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
