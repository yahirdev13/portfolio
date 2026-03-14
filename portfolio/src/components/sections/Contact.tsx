'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yahir.dev13@gmail.com',
    href: 'mailto:yahir.dev13@gmail.com',
    detail: 'Respuesta en menos de 24h',
    cta: 'Enviar email',
    accentColor: '#3B82F6',
    accentBg: 'rgba(59, 130, 246, 0.08)',
    accentBorder: 'rgba(59, 130, 246, 0.20)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'yahirdev13',
    href: 'https://github.com/yahirdev13',
    detail: 'Proyectos y código real',
    cta: 'Ver perfil',
    accentColor: '#94A3B8',
    accentBg: 'rgba(148, 163, 184, 0.06)',
    accentBorder: 'rgba(148, 163, 184, 0.15)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'yahirdev13',
    href: 'https://linkedin.com/in/yahirdev13',
    detail: 'Perfil profesional',
    cta: 'Conectar',
    accentColor: '#60A5FA',
    accentBg: 'rgba(96, 165, 250, 0.08)',
    accentBorder: 'rgba(96, 165, 250, 0.20)',
  },
];

export default function Contact() {
  const mailtoHref = `mailto:${personalInfo.email}?subject=Proyecto%20Freelance%20-%20Hablemos&body=Hola%20Yahir%2C%0A%0AMe%20interesa%20trabajar%20contigo%20en%20%5Bdescripci%C3%B3n%20del%20proyecto%5D.%0A%0A%C2%BFTienes%20disponibilidad%3F`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Big CTA banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-2xl overflow-hidden mb-14 p-10 sm:p-14 text-center"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(59,130,246,0.12) 0%, #1E293B 70%)',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        >
          {/* Decorative orb */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: '#3B82F6' }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.22)',
                color: '#34D399',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponible ahora
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#F1F5F9' }}>
              ¿Tienes un proyecto
              <br />
              <span className="gradient-text">en mente?</span>
            </h2>

            <p className="text-base sm:text-lg max-w-xl mx-auto mb-8" style={{ color: '#64748B' }}>
              Estoy disponible para proyectos freelance. Cuéntame tu idea y construyamos algo real juntos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 glow-pulse"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  color: '#F1F5F9',
                }}
              >
                <MessageSquare size={16} />
                Cuéntame tu proyecto
                <ArrowRight size={15} />
              </a>
              <div className="flex items-center gap-2 text-xs" style={{ color: '#475569' }}>
                <Clock size={13} />
                Respondo en menos de 24h
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact method cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.label !== 'Email' ? '_blank' : undefined}
                rel={card.label !== 'Email' ? 'noopener noreferrer' : undefined}
                variants={staggerItem}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
                className="group p-6 rounded-2xl flex flex-col gap-4 transition-all duration-200"
                style={{
                  background: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.08)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = card.accentBorder;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148, 163, 184, 0.08)';
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: card.accentBg, border: `1px solid ${card.accentBorder}` }}
                >
                  <Icon size={18} style={{ color: card.accentColor }} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: '#475569' }}>
                    {card.label}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: '#F1F5F9' }}>
                    {card.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#475569' }}>
                    {card.detail}
                  </p>
                </div>

                <div
                  className="flex items-center gap-1.5 text-xs font-medium mt-auto group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: card.accentColor }}
                >
                  {card.cta}
                  <ArrowRight size={12} />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
