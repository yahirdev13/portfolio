'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: 'rgba(148, 163, 184, 0.08)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', color: '#fff' }}
            >
              Y
            </div>
            <span className="text-sm font-medium" style={{ color: '#F1F5F9' }}>
              {personalInfo.name}
            </span>
            <span className="text-xs ml-2" style={{ color: '#334155' }}>
              Full-Stack Developer
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: '#334155' }}>
            © {year} Yahir Alberto — All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-2">
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
                className="p-2 rounded-xl transition-all duration-200"
                style={{ color: '#334155' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#3B82F6';
                  e.currentTarget.style.background = 'rgba(59,130,246,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
