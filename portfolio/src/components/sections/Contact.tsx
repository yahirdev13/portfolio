'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yahir.dev13@gmail.com',
    href: 'mailto:yahir.dev13@gmail.com',
    description: 'Respondo en menos de 24h',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'yahirdev13',
    href: 'https://github.com/yahirdev13',
    description: 'Código y proyectos open source',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'yahirdev13',
    href: 'https://linkedin.com/in/yahirdev13',
    description: 'Perfil profesional',
  },
];

export default function Contact() {
  const mailtoHref = `mailto:${personalInfo.email}?subject=Colaboración%20-%20Proyecto&body=Hola%20Yahir,%0A%0AMe%20gustaría%20hablar%20sobre...`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ color: '#F1F5F9' }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Estoy disponible para proyectos freelance y colaboraciones. Hablemos.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
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
                whileHover={{ y: -4, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                className="p-6 rounded-xl flex flex-col items-center text-center group transition-all duration-200"
                style={{
                  background: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.10)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59, 130, 246, 0.30)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(148, 163, 184, 0.10)';
                }}
              >
                <div
                  className="p-3 rounded-xl mb-4"
                  style={{
                    background: 'rgba(59, 130, 246, 0.10)',
                    border: '1px solid rgba(59, 130, 246, 0.20)',
                  }}
                >
                  <Icon size={22} style={{ color: '#3B82F6' }} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#F1F5F9' }}>
                  {card.label}
                </p>
                <p className="text-xs mb-1" style={{ color: '#3B82F6' }}>
                  {card.value}
                </p>
                <p className="text-xs" style={{ color: '#64748B' }}>
                  {card.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center"
        >
          <p className="text-sm mb-6" style={{ color: '#64748B' }}>
            O envíame un mensaje directamente:
          </p>
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              color: '#F1F5F9',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          >
            <Send size={16} />
            Enviar mensaje
          </a>
        </motion.div>
      </div>
    </section>
  );
}
