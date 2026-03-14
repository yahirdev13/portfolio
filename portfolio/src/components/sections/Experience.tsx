'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
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
            Experiencia
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: '#F1F5F9' }}>
            Trayectoria profesional
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5"
            style={{ background: '#1E293B' }}
          />

          <div className="space-y-10">
            {experience.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className="absolute left-3 top-1 w-3 h-3 rounded-full -translate-x-1/2 border-2"
                  style={{
                    background: item.current ? '#3B82F6' : '#334155',
                    borderColor: item.current ? '#3B82F6' : '#334155',
                    boxShadow: item.current ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none',
                  }}
                />

                {/* Content card */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: '#1E293B',
                    border: `1px solid ${item.current ? 'rgba(59, 130, 246, 0.20)' : 'rgba(148, 163, 184, 0.10)'}`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg" style={{ color: '#F1F5F9' }}>
                      {item.role}
                    </h3>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: 'rgba(59, 130, 246, 0.10)',
                        color: '#60A5FA',
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-4" style={{ color: '#3B82F6' }}>
                    {item.company}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {item.description.map((point, i) => (
                      <li key={i} className="text-sm flex gap-2" style={{ color: '#94A3B8' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{ background: '#334155', color: '#94A3B8' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
