'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { experience, education } from '@/lib/data';
import { useT } from '@/i18n/useT';

type EduTopic = { category: string; items: string[] };

export default function Experience() {
  const { t, tArray, tObject } = useT();

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3B82F6' }}>
            {t('experience.kicker')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{ color: '#F1F5F9' }}>
            {t('experience.title')}
          </h2>
          <p className="mt-2" style={{ color: '#64748B' }}>
            {t('experience.subtitle')}
          </p>
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
            className="absolute left-[19px] top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))' }}
          />

          <div className="space-y-8">
            {experience.map((item) => {
              const role = t(`experience.items.${item.id}.role`);
              const company = t(`experience.items.${item.id}.company`);
              const period = t(`experience.items.${item.id}.period`);
              const bullets = tArray(`experience.items.${item.id}.description`);
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-[11px] top-3 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: item.current ? '#3B82F6' : '#1E293B',
                      borderColor: item.current ? '#3B82F6' : '#334155',
                      boxShadow: item.current ? '0 0 12px rgba(59,130,246,0.6)' : 'none',
                    }}
                  >
                    {item.current && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="p-6 rounded-2xl transition-all duration-200"
                    style={{
                      background: '#1E293B',
                      border: `1px solid ${item.current ? 'rgba(59,130,246,0.20)' : 'rgba(148,163,184,0.08)'}`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-3 justify-between mb-1">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          {item.current && (
                            <span
                              className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: 'rgba(59,130,246,0.12)',
                                color: '#60A5FA',
                                border: '1px solid rgba(59,130,246,0.20)',
                              }}
                            >
                              {t('experience.currentBadge')}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold" style={{ color: '#F1F5F9' }}>
                          {role}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Briefcase size={12} style={{ color: '#3B82F6' }} />
                          <span className="text-sm font-medium" style={{ color: '#3B82F6' }}>
                            {company}
                          </span>
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0"
                        style={{
                          background: 'rgba(148,163,184,0.06)',
                          border: '1px solid rgba(148,163,184,0.10)',
                          color: '#64748B',
                        }}
                      >
                        <Calendar size={11} />
                        {period}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-4 h-px" style={{ background: 'rgba(148,163,184,0.08)' }} />

                    {/* Description bullets */}
                    <ul className="space-y-2 mb-5">
                      {bullets.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#94A3B8' }}>
                          <span
                            className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: '#3B82F6' }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-xs"
                          style={{ background: '#334155', color: '#94A3B8' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Education subsection */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16"
        >
          {/* Separator */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(148,163,184,0.08)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#64748B' }}>
              {t('experience.educationSeparator')}
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(148,163,184,0.08)' }} />
          </div>

          {education.map((item) => {
            const degree = t(`experience.education.${item.id}.degree`);
            const institution = t(`experience.education.${item.id}.institution`);
            const location = t(`experience.education.${item.id}.location`);
            const period = t(`experience.education.${item.id}.period`);
            const description = t(`experience.education.${item.id}.description`);
            const highlights = tArray(`experience.education.${item.id}.highlights`);
            const topics = tObject<EduTopic[]>(`experience.education.${item.id}.topics`) ?? [];
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl"
                style={{
                  background: '#1E293B',
                  border: '1px solid rgba(148,163,184,0.08)',
                }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start gap-3 justify-between mb-1">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.18)' }}
                      >
                        <GraduationCap size={15} style={{ color: '#3B82F6' }} />
                      </div>
                      <h3 className="text-lg font-bold" style={{ color: '#F1F5F9' }}>
                        {degree}
                      </h3>
                    </div>
                    <p className="text-sm font-medium ml-10" style={{ color: '#3B82F6' }}>{institution}</p>
                    <p className="text-xs ml-10 mt-0.5" style={{ color: '#475569' }}>{location}</p>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0"
                    style={{
                      background: 'rgba(148,163,184,0.06)',
                      border: '1px solid rgba(148,163,184,0.10)',
                      color: '#64748B',
                    }}
                  >
                    <Calendar size={11} />
                    {period}
                  </div>
                </div>

                <div className="my-4 h-px" style={{ background: 'rgba(148,163,184,0.08)' }} />

                {description && (
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
                    {description}
                  </p>
                )}

                {highlights.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#94A3B8' }}>
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: '#3B82F6' }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {topics.length > 0 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#475569' }}>
                      {t('experience.educationTopicsLabel')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                      {topics.map((topic) => (
                        <div
                          key={topic.category}
                          className="p-3 rounded-xl"
                          style={{ background: '#0F172A', border: '1px solid rgba(59,130,246,0.10)' }}
                        >
                          <p className="text-xs font-semibold mb-2" style={{ color: '#60A5FA' }}>
                            {topic.category}
                          </p>
                          <ul className="space-y-1">
                            {topic.items.map((subject) => (
                              <li
                                key={subject}
                                className="flex items-center gap-1.5 text-xs"
                                style={{ color: '#64748B' }}
                              >
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#334155' }} />
                                {subject}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {item.stack && item.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs"
                        style={{ background: '#334155', color: '#94A3B8' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
