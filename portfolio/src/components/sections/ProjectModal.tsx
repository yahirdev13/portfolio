'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Clock, Lock } from 'lucide-react';
import type { Project } from '@/types';

const statusConfig = {
  completed: {
    label: 'En producción',
    Icon: CheckCircle,
    color: '#34D399',
    bg: 'rgba(52, 211, 153, 0.08)',
    border: 'rgba(52, 211, 153, 0.22)',
  },
  'in-progress': {
    label: 'En desarrollo',
    Icon: Clock,
    color: '#FBBF24',
    bg: 'rgba(251, 191, 36, 0.08)',
    border: 'rgba(251, 191, 36, 0.22)',
  },
  planned: {
    label: 'Planeado',
    Icon: Clock,
    color: '#64748B',
    bg: 'rgba(100, 116, 139, 0.08)',
    border: 'rgba(100, 116, 139, 0.22)',
  },
};

const fade = (i: number) => ({
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.22 } },
});

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (project) {
      triggerRef.current = document.activeElement as HTMLElement;
      const id = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(id);
    } else {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }
  }, [project]);

  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [project, onClose]);

  if (!mounted) return null;

  const modal = (
    <AnimatePresence>
      {project && (() => {
        const status = statusConfig[project.status];
        const { Icon: StatusIcon } = status;

        return (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6"
            style={{ background: 'rgba(0, 0, 0, 0.82)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
              style={{
                background: '#1E293B',
                border: '1px solid rgba(148, 163, 184, 0.12)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.72)',
              }}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 340, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Accent line */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: project.status === 'completed'
                    ? 'linear-gradient(90deg, #3B82F6, transparent)'
                    : project.status === 'in-progress'
                    ? 'linear-gradient(90deg, #FBBF24, transparent)'
                    : 'linear-gradient(90deg, #64748B, transparent)',
                }}
              />

              {/* Close */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Cerrar modal"
                className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-lg transition-all duration-200"
                style={{ color: '#64748B', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(148,163,184,0.10)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F1F5F9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}
              >
                <X size={16} />
              </button>

              <div className="p-5 sm:p-6 space-y-4">

                {/* ── Header ── */}
                <motion.div variants={fade(0)} initial="hidden" animate="visible" className="pr-8">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    {project.category && (
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6', border: '1px solid rgba(59,130,246,0.2)' }}
                      >
                        {project.category}
                      </span>
                    )}
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: status.bg, border: `1px solid ${status.border}`, color: status.color }}
                    >
                      <StatusIcon size={9} />
                      {status.label}
                    </span>
                    {project.privateReason && (
                      <span
                        title={project.privateReason}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.20)', color: '#FBBF24' }}
                      >
                        <Lock size={9} /> NDA
                      </span>
                    )}
                    {project.date && (
                      <span className="text-xs" style={{ color: '#475569' }}>{project.date}</span>
                    )}
                  </div>
                  <h2 id="modal-title" className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: '#F1F5F9' }}>
                    {project.title}
                  </h2>
                  {project.role && (
                    <p className="mt-0.5 text-xs" style={{ color: '#475569' }}>{project.role}</p>
                  )}
                </motion.div>

                {/* ── Description ── */}
                <motion.div variants={fade(1)} initial="hidden" animate="visible">
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                    {project.description}
                  </p>
                </motion.div>

                {/* ── Tech stack — full width ── */}
                <motion.div variants={fade(2)} initial="hidden" animate="visible">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#334155' }}>
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{
                          background: 'rgba(15,23,42,0.7)',
                          color: '#94A3B8',
                          border: '1px solid rgba(148,163,184,0.10)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* ── Highlights — 2-col compact ── */}
                {project.highlights && project.highlights.length > 0 && (
                  <motion.div variants={fade(3)} initial="hidden" animate="visible">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#334155' }}>
                      Detalles técnicos
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                      {project.highlights.slice(0, 6).map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span
                            className="mt-[5px] w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: '#3B82F6' }}
                          />
                          <span className="text-xs leading-snug" style={{ color: '#64748B' }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ── Metrics — full-width strip ── */}
                {project.metrics && project.metrics.length > 0 && (
                  <motion.div variants={fade(4)} initial="hidden" animate="visible">
                    <div
                      className="grid grid-cols-3 gap-px rounded-xl overflow-hidden"
                      style={{ background: '#1E293B', border: '1px solid rgba(148,163,184,0.08)' }}
                    >
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="px-3 py-2.5 flex flex-col"
                          style={{ background: '#0F172A' }}
                        >
                          <span className="text-sm font-bold leading-tight" style={{ color: '#60A5FA' }}>
                            {m.value}
                          </span>
                          <span className="text-xs mt-0.5 leading-tight" style={{ color: '#475569' }}>
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
