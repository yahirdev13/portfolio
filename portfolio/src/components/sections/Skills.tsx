'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { skillCategories } from '@/lib/data';

const levelConfig = {
  expert:       { label: 'Experto',      width: '95%', color: '#3B82F6' },
  advanced:     { label: 'Avanzado',     width: '80%', color: '#60A5FA' },
  intermediate: { label: 'Intermedio',   width: '60%', color: '#94A3B8' },
  beginner:     { label: 'Aprendiendo',  width: '35%', color: '#475569' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto rounded-2xl py-16 px-8 sm:px-12"
        style={{
          background: '#1E293B',
          border: '1px solid rgba(148, 163, 184, 0.08)',
        }}
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3B82F6' }}>
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3" style={{ color: '#F1F5F9' }}>
            Stack completo
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#64748B' }}>
            Tecnologías que uso a diario en proyectos reales — frontend, backend, datos y DevOps.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div key={cat.category} variants={staggerItem}>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#64748B' }}>
                  {cat.category}
                </span>
              </div>

              {/* Skills with level bars */}
              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const lvl = levelConfig[skill.level ?? 'intermediate'];
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium" style={{ color: '#F1F5F9' }}>
                          {skill.name}
                        </span>
                        <span className="text-xs" style={{ color: '#475569' }}>
                          {lvl.label}
                        </span>
                      </div>
                      {/* Bar */}
                      <div
                        className="h-1 rounded-full overflow-hidden"
                        style={{ background: 'rgba(148,163,184,0.08)' }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: lvl.color, width: 0 }}
                          whileInView={{ width: lvl.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom legend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap items-center justify-center gap-5 mt-12 pt-8 border-t"
          style={{ borderColor: 'rgba(148,163,184,0.08)' }}
        >
          {Object.entries(levelConfig).map(([key, val]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-8 h-1 rounded-full" style={{ background: val.color }} />
              <span className="text-xs" style={{ color: '#475569' }}>{val.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
