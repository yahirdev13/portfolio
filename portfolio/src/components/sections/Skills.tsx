'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { skillCategories } from '@/lib/data';

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
          className="text-center mb-16"
        >
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: '#3B82F6' }}
          >
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#F1F5F9' }}>
            Tecnologías que domino
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Stack completo para construir productos de principio a fin.
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
            <motion.div
              key={cat.category}
              variants={staggerItem}
              className="p-6 rounded-xl"
              style={{
                background: '#1E293B',
                border: '1px solid rgba(148, 163, 184, 0.10)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold text-sm" style={{ color: '#F1F5F9' }}>
                  {cat.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#3B82F6' }}
                    />
                    <span className="text-sm" style={{ color: '#94A3B8' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
