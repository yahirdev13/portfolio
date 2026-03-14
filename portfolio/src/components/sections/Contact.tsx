'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp, viewportConfig } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

const PROJECT_TYPES = [
  'Aplicación Web Full-Stack',
  'Integración / Automatización ERP',
  'Plataforma SaaS',
  'Consultoría Técnica',
  'Otro',
];

const BUDGETS = [
  'Menos de $500 USD',
  '$500 - $2,000 USD',
  '$2,000 - $5,000 USD',
  '$5,000+ USD',
  'Aún no definido',
];

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yahir.dev13@gmail.com',
    href: 'mailto:yahir.dev13@gmail.com',
    accentColor: '#3B82F6',
    accentBg: 'rgba(59, 130, 246, 0.08)',
    accentBorder: 'rgba(59, 130, 246, 0.20)',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'yahirdev13',
    href: 'https://github.com/yahirdev13',
    accentColor: '#94A3B8',
    accentBg: 'rgba(148, 163, 184, 0.06)',
    accentBorder: 'rgba(148, 163, 184, 0.15)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'yahirdev13',
    href: 'https://linkedin.com/in/yahirdev13',
    accentColor: '#60A5FA',
    accentBg: 'rgba(96, 165, 250, 0.08)',
    accentBorder: 'rgba(96, 165, 250, 0.20)',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

const inputStyle = {
  background: 'rgba(15, 23, 42, 0.60)',
  border: '1px solid rgba(148, 163, 184, 0.12)',
  color: '#F1F5F9',
  borderRadius: '0.75rem',
  padding: '0.75rem 1rem',
  width: '100%',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#3B82F6';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.12)';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    if (form.message.length < 20) {
      setErrorMsg('La descripción debe tener al menos 20 caracteres.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Error al enviar');
      setStatus('success');
      setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Error al enviar el mensaje.');
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.07, duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    }),
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#3B82F6' }}>
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-2" style={{ color: '#F1F5F9' }}>
            ¿Tienes un proyecto{' '}
            <span className="gradient-text">en mente?</span>
          </h2>
          <p style={{ color: '#64748B' }}>
            Cuéntame tu idea — respondo en menos de 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: '#1E293B',
                border: '1px solid rgba(148, 163, 184, 0.08)',
              }}
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(52, 211, 153, 0.12)', border: '1px solid rgba(52, 211, 153, 0.25)' }}
                    >
                      <CheckCircle size={32} style={{ color: '#34D399' }} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: '#F1F5F9' }}>
                        ¡Mensaje enviado!
                      </h3>
                      <p style={{ color: '#64748B', fontSize: '0.875rem' }}>
                        Te respondo en menos de 24h.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm mt-2 transition-colors duration-200"
                      style={{ color: '#3B82F6' }}
                    >
                      Enviar otro mensaje →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                          Nombre completo <span style={{ color: '#F87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          required
                          placeholder="Tu nombre"
                          style={inputStyle}
                        />
                      </motion.div>

                      <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                          Email <span style={{ color: '#F87171' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          required
                          placeholder="tu@email.com"
                          style={inputStyle}
                        />
                      </motion.div>
                    </div>

                    {/* Row 2: Project type + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                          Tipo de proyecto
                        </label>
                        <select
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                        >
                          <option value="" style={{ background: '#1E293B' }}>Selecciona...</option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t} style={{ background: '#1E293B' }}>{t}</option>
                          ))}
                        </select>
                      </motion.div>

                      <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                          Presupuesto aproximado
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                        >
                          <option value="" style={{ background: '#1E293B' }}>Selecciona...</option>
                          {BUDGETS.map((b) => (
                            <option key={b} value={b} style={{ background: '#1E293B' }}>{b}</option>
                          ))}
                        </select>
                      </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#64748B' }}>
                        Descripción del proyecto <span style={{ color: '#F87171' }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        placeholder="Cuéntame qué necesitas construir, qué problema resuelve y el alcance del proyecto..."
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      />
                      <p className="text-xs mt-1" style={{ color: form.message.length < 20 && form.message.length > 0 ? '#F87171' : '#334155' }}>
                        {form.message.length}/20 caracteres mínimos
                      </p>
                    </motion.div>

                    {/* Error */}
                    <AnimatePresence>
                      {status === 'error' && errorMsg && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                          style={{
                            background: 'rgba(248, 113, 113, 0.08)',
                            border: '1px solid rgba(248, 113, 113, 0.20)',
                            color: '#F87171',
                          }}
                        >
                          <AlertCircle size={15} />
                          {errorMsg}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.div custom={5} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={viewportConfig}>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                          color: '#F1F5F9',
                          boxShadow: '0 0 20px rgba(59,130,246,0.25)',
                        }}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader size={16} className="animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Enviar mensaje
                          </>
                        )}
                      </button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right col — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Availability card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="p-5 rounded-2xl"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(59,130,246,0.10) 0%, #1E293B 80%)',
                border: '1px solid rgba(59,130,246,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#34D399' }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#34D399' }}>
                  Disponible ahora
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                Acepto proyectos freelance de alcance definido o colaboraciones de largo plazo.
                Respondo en menos de 24h.
              </p>
            </motion.div>

            {/* Contact links */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col gap-3"
            >
              {contactLinks.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={card.label}
                    href={card.href}
                    target={card.label !== 'Email' ? '_blank' : undefined}
                    rel={card.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
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
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: card.accentBg, border: `1px solid ${card.accentBorder}` }}
                    >
                      <Icon size={16} style={{ color: card.accentColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium" style={{ color: '#475569' }}>{card.label}</p>
                      <p className="text-sm font-semibold truncate" style={{ color: '#F1F5F9' }}>{card.value}</p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: card.accentColor }}
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
