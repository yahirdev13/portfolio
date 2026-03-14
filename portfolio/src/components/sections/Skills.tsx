'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { skillCategories } from '@/lib/data';

// Category accent colors
const categoryColors: Record<string, { accent: string; accentBg: string; accentBorder: string; dot: string }> = {
  'Frontend':       { accent: '#60A5FA', accentBg: 'rgba(96,165,250,0.08)',   accentBorder: 'rgba(96,165,250,0.20)',  dot: '#3B82F6' },
  'Backend':        { accent: '#34D399', accentBg: 'rgba(52,211,153,0.08)',   accentBorder: 'rgba(52,211,153,0.20)',  dot: '#10B981' },
  'Bases de datos': { accent: '#FBBF24', accentBg: 'rgba(251,191,36,0.08)',   accentBorder: 'rgba(251,191,36,0.20)',  dot: '#F59E0B' },
  'DevOps & Tools': { accent: '#C084FC', accentBg: 'rgba(192,132,252,0.08)', accentBorder: 'rgba(192,132,252,0.20)', dot: '#A855F7' },
};

const levelDot: Record<string, { title: string; opacity: number }> = {
  expert:       { title: 'Experto',      opacity: 1 },
  advanced:     { title: 'Avanzado',     opacity: 0.75 },
  intermediate: { title: 'Intermedio',   opacity: 0.5 },
  beginner:     { title: 'Aprendiendo',  opacity: 0.3 },
};

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
            Tecnologías que aplico en proyectos reales — frontend, backend, datos y DevOps.
          </p>
        </motion.div>

        {/* 2×2 grid of category cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {skillCategories.map((cat) => {
            const colors = categoryColors[cat.category] ?? categoryColors['Frontend'];

            return (
              <motion.div
                key={cat.category}
                variants={staggerItem}
                className="rounded-2xl p-6"
                style={{
                  background: '#1E293B',
                  border: `1px solid ${colors.accentBorder}`,
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                    style={{ background: colors.accentBg, border: `1px solid ${colors.accentBorder}` }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-sm tracking-wide" style={{ color: colors.accent }}>
                    {cat.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const lvl = levelDot[skill.level ?? 'intermediate'];
                    const isCore = skill.level === 'expert' || skill.level === 'advanced';

                    return (
                      <div
                        key={skill.name}
                        title={lvl.title}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          background: isCore ? colors.accentBg : 'rgba(30,41,59,0.8)',
                          border: isCore
                            ? `1px solid ${colors.accentBorder}`
                            : '1px solid rgba(148,163,184,0.08)',
                          color: isCore ? colors.accent : '#64748B',
                        }}
                      >
                        {/* Level dot */}
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{
                            background: colors.dot,
                            opacity: lvl.opacity,
                          }}
                        />
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
        >
          {[
            { label: 'Experto / Avanzado', desc: 'Uso diario en producción', filled: true },
            { label: 'Intermedio',          desc: 'Proyectos entregados',      filled: false },
            { label: 'Aprendiendo',         desc: 'En desarrollo activo',      filled: false, muted: true },
          ].map(({ label, desc, filled, muted }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: filled ? '#3B82F6' : muted ? 'rgba(59,130,246,0.25)' : 'rgba(59,130,246,0.5)',
                }}
              />
              <span className="text-xs" style={{ color: muted ? '#334155' : '#475569' }}>
                <span style={{ color: muted ? '#334155' : '#64748B', fontWeight: 500 }}>{label}</span>
                {' '}— {desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
