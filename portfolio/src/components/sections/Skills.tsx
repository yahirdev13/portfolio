'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

const techGroups = [
  {
    label: 'Frontend',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.06)',
    border: 'rgba(96,165,250,0.15)',
    techs: [
      { name: 'TypeScript',    slug: 'typescript'         },
      { name: 'React',         slug: 'react'              },
      { name: 'Next.js',       slug: 'nextdotjs'          },
      { name: 'Vue.js',        slug: 'vuedotjs'           },
      { name: 'Tailwind CSS',  slug: 'tailwindcss'        },
      { name: 'Framer Motion', slug: 'framer'             },
      { name: 'Material UI',   slug: 'mui'                },
      { name: 'Figma',         slug: 'figma'              },
    ],
  },
  {
    label: 'Backend',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.15)',
    techs: [
      { name: 'Node.js',       slug: 'nodedotjs'          },
      { name: 'Express',       slug: 'express'            },
      { name: 'Fastify',       slug: 'fastify'            },
      { name: 'Spring Boot',   slug: 'springboot'         },
      { name: 'Python',        slug: 'python'             },
      { name: 'GraphQL',       slug: 'graphql'            },
      { name: 'Stripe',        slug: 'stripe'             },
    ],
  },
  {
    label: 'Bases de datos',
    color: '#FBBF24',
    bg: 'rgba(251,191,36,0.06)',
    border: 'rgba(251,191,36,0.15)',
    techs: [
      { name: 'MongoDB',       slug: 'mongodb'            },
      { name: 'PostgreSQL',    slug: 'postgresql'         },
      { name: 'MySQL',         slug: 'mysql'              },
      { name: 'SQL Server',    slug: 'microsoftsqlserver' },
      { name: 'Firebase',      slug: 'firebase'           },
      { name: 'Redis',         slug: 'redis'              },
    ],
  },
  {
    label: 'DevOps & Tools',
    color: '#C084FC',
    bg: 'rgba(192,132,252,0.06)',
    border: 'rgba(192,132,252,0.15)',
    techs: [
      { name: 'Git',           slug: 'git'                },
      { name: 'GitHub',        slug: 'github'             },
      { name: 'Docker',        slug: 'docker'             },
      { name: 'Vercel',        slug: 'vercel'             },
      { name: 'Linux',         slug: 'linux'              },
      { name: 'Postman',       slug: 'postman'            },
      { name: 'PM2',           slug: 'pm2'                },
      { name: 'AWS',           slug: 'amazonwebservices'  },
    ],
  },
];

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
            Tecnologías que aplico en proyectos reales — de la interfaz al servidor.
          </p>
        </motion.div>

        {/* Groups */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col gap-8"
        >
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1, y: 0,
                  transition: { delay: gi * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number,number,number,number] },
                },
              }}
            >
              {/* Group label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1" style={{ background: 'rgba(148,163,184,0.08)' }} />
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: group.color, background: group.bg, border: `1px solid ${group.border}` }}
                >
                  {group.label}
                </span>
                <div className="h-px flex-1" style={{ background: 'rgba(148,163,184,0.08)' }} />
              </div>

              {/* Tech cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] as [number,number,number,number] }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default"
                    style={{ background: '#1E293B', border: '1px solid rgba(148,163,184,0.08)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = group.border;
                      (e.currentTarget as HTMLElement).style.background = group.bg;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148,163,184,0.08)';
                      (e.currentTarget as HTMLElement).style.background = '#1E293B';
                    }}
                  >
                    <div className="w-7 h-7 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.icon ?? `https://cdn.simpleicons.org/${tech.slug}`}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span
                      className="text-center"
                      style={{ color: '#94A3B8', fontSize: '0.65rem', fontWeight: 500, lineHeight: 1.2 }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
