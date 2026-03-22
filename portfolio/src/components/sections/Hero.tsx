'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, MapPin, Zap, Download } from 'lucide-react';
import { heroEntrance } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

const techStack = [
  'Next.js', 'TypeScript', 'Node.js', 'React',
  'PostgreSQL', 'MongoDB', 'Docker', 'Tailwind',
];

export default function Hero() {

  return (
    <section
      id="home"
      className="noise-bg relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.15) 0%, transparent 70%), #0F172A',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: '#3B82F6' }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: '#60A5FA' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Avatar */}
        <motion.div
          custom={0.05}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-6"
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.20), rgba(59,130,246,0.08))',
              border: '2px solid rgba(59,130,246,0.30)',
              color: '#60A5FA',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            YD
          </div>
        </motion.div>

        {/* Top badges row */}
        <motion.div
          custom={0.10}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 flex-wrap mb-8"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(52, 211, 153, 0.08)',
              border: '1px solid rgba(52, 211, 153, 0.25)',
              color: '#34D399',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para proyectos
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(148, 163, 184, 0.06)',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              color: '#94A3B8',
            }}
          >
            <MapPin size={11} />
            México
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid rgba(59, 130, 246, 0.20)',
              color: '#60A5FA',
            }}
          >
            <Zap size={11} />
            Freelancer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0.20}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-[80px] font-bold tracking-tight leading-none mb-4"
        >
          <span style={{ color: '#F1F5F9' }}>Yahir </span>
          <span className="gradient-text">Alberto</span>
        </motion.h1>

        {/* Static subtitle */}
        <motion.div
          custom={0.30}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
          <span className="text-lg sm:text-xl font-medium tracking-wide" style={{ color: '#94A3B8' }}>
            Full-Stack Developer — Automatización empresarial e integraciones ERP
          </span>
          <div className="h-px w-12 opacity-30" style={{ background: '#3B82F6' }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={0.40}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#64748B' }}
        >
          Construyo plataformas web completas, automatizo procesos empresariales y
          diseño arquitecturas que escalan — de la idea al deploy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.50}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 overflow-hidden glow-pulse"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              color: '#F1F5F9',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver proyectos
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: '1px solid rgba(148, 163, 184, 0.15)',
              color: '#F1F5F9',
              background: 'rgba(30, 41, 59, 0.5)',
            }}
          >
            Hablemos
          </a>
          <a
            href="/cv/Yahir_Diaz_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm"
            style={{
              border: '1px solid rgba(148,163,184,0.15)',
              color: '#475569',
              background: 'rgba(30,41,59,0.30)',
              pointerEvents: 'none',
              opacity: 0.5,
            }}
            aria-disabled="true"
            title="CV disponible próximamente"
          >
            <Download size={14} /> Descargar CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={0.60}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-3 mb-16"
        >
          {[
            { href: personalInfo.github, Icon: Github, label: 'GitHub' },
            { href: personalInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2.5 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(30, 41, 59, 0.60)',
                border: '1px solid rgba(148, 163, 184, 0.08)',
                color: '#475569',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3B82F6';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.35)';
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.08)';
                e.currentTarget.style.background = 'rgba(30, 41, 59, 0.60)';
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Tech stack row */}
        <motion.div
          custom={0.70}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: '#334155' }}>
            Stack principal
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: 'rgba(30, 41, 59, 0.70)',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                  color: '#64748B',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          custom={0.80}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ color: '#334155' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
