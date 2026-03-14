'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariants } from '@/lib/animations';
import { personalInfo } from '@/lib/data';
import { X, Menu } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 20);
    if (currentY < 80) {
      setVisible(true);
    } else {
      setVisible(currentY < lastScrollY);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="navbar"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            background: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0.50)',
            borderBottom: scrolled
              ? '1px solid rgba(148, 163, 184, 0.10)'
              : '1px solid transparent',
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <a href="#home" className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    color: '#fff',
                  }}
                >
                  Y
                </div>
                <span className="font-bold text-sm" style={{ color: '#F1F5F9' }}>
                  {personalInfo.name}
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 rounded-lg text-sm transition-all duration-200"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#F1F5F9';
                      e.currentTarget.style.background = 'rgba(148,163,184,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#64748B';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="#contact"
                  className="px-4 py-2 text-sm rounded-xl font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    color: '#F1F5F9',
                    boxShadow: '0 0 16px rgba(59,130,246,0.25)',
                  }}
                >
                  Hablemos
                </a>
              </div>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2 rounded-xl transition-colors duration-200"
                style={{
                  color: '#64748B',
                  background: mobileOpen ? 'rgba(148,163,184,0.08)' : 'transparent',
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
                style={{
                  background: 'rgba(15, 23, 42, 0.97)',
                  borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                }}
              >
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2.5 rounded-xl text-sm transition-colors duration-200"
                      style={{ color: '#94A3B8' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#F1F5F9'; e.currentTarget.style.background = 'rgba(148,163,184,0.06)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 px-4 py-3 text-sm rounded-xl font-semibold text-center"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                      color: '#F1F5F9',
                    }}
                  >
                    Hablemos
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
