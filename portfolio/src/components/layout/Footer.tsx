'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'rgba(148, 163, 184, 0.10)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm" style={{ color: '#64748B' }}>
            © {year} {personalInfo.name}. Hecho con Next.js & Framer Motion.
          </div>

          <div className="flex items-center gap-4">
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
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
