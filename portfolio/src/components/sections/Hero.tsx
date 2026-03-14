'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { heroEntrance } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, #0F172A 60%)' }}
    >
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#3B82F6' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          custom={0.1}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{
            background: 'rgba(59, 130, 246, 0.10)',
            border: '1px solid rgba(59, 130, 246, 0.30)',
            color: '#60A5FA',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#34D399' }}
          />
          Disponible para proyectos
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0.2}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span style={{ color: '#F1F5F9' }}>Hola, soy </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          custom={0.3}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl font-medium mb-4"
          style={{ color: '#94A3B8' }}
        >
          {personalInfo.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          custom={0.4}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="text-lg max-w-xl mx-auto mb-10"
          style={{ color: '#64748B' }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.5}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              color: '#F1F5F9',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: '1px solid rgba(148, 163, 184, 0.20)',
              color: '#F1F5F9',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3B82F6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.20)';
            }}
          >
            Hablemos
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={0.6}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4"
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
              className="p-2.5 rounded-lg transition-all duration-200"
              style={{
                background: 'rgba(30, 41, 59, 0.80)',
                border: '1px solid rgba(148, 163, 184, 0.10)',
                color: '#64748B',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3B82F6';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.40)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748B';
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.10)';
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={0.7}
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ color: '#334155' }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
