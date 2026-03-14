'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarVariants } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
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
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
          style={{
            background: 'rgba(15, 23, 42, 0.80)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.10)',
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a
                href="#"
                className="text-lg font-bold"
                style={{ color: '#3B82F6' }}
              >
                {personalInfo.displayName}
                <span style={{ color: '#F1F5F9' }}>.</span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#94A3B8' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#F1F5F9')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#94A3B8')
                    }
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="px-4 py-1.5 text-sm rounded-full font-medium transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    color: '#F1F5F9',
                  }}
                >
                  Hablemos
                </a>
              </div>

              {/* Mobile toggle */}
              <button
                className="md:hidden p-2 rounded-lg"
                style={{ color: '#94A3B8' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-0.5 bg-current mb-1" />
                <div className="w-5 h-0.5 bg-current mb-1" />
                <div className="w-5 h-0.5 bg-current" />
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
                className="md:hidden border-t"
                style={{
                  background: 'rgba(15, 23, 42, 0.95)',
                  borderColor: 'rgba(148, 163, 184, 0.10)',
                }}
              >
                <div className="px-4 py-4 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm"
                      style={{ color: '#94A3B8' }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 px-4 py-2 text-sm rounded-full font-medium text-center"
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
