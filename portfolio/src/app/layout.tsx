import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yahir Alberto — Full-Stack Developer | ERP Automation & SaaS',
  description:
    'Full-Stack Developer freelancer en México. Construyo plataformas web, automatizo ERPs (SAGE 300, Odoo) e integro sistemas complejos — Next.js, Node.js, TypeScript.',
  keywords: [
    'Full-Stack Developer',
    'ERP Automation',
    'SaaS Builder',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'SAGE 300',
    'Odoo',
    'Freelancer México',
    'Yahir Alberto',
    'Integraciones ERP',
  ],
  authors: [{ name: 'Yahir Alberto Díaz González' }],
  creator: 'Yahir Alberto',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'Yahir Alberto — Full-Stack Developer | ERP Automation & SaaS',
    description:
      'Full-Stack Developer freelancer en México. Construyo plataformas web, automatizo ERPs (SAGE 300, Odoo) e integro sistemas complejos — Next.js, Node.js, TypeScript.',
    siteName: 'Yahir Alberto Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahir Alberto — Full-Stack Developer | ERP Automation & SaaS',
    description:
      'Full-Stack Developer freelancer en México. Construyo plataformas web, automatizo ERPs (SAGE 300, Odoo) e integro sistemas complejos — Next.js, Node.js, TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
