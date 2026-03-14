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
    'Full-Stack Developer especializado en automatización ERP, integraciones complejas y plataformas SaaS. Next.js, Node.js, SAGE 300, Odoo. Freelancer disponible en México.',
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
  authors: [{ name: 'Yahir Alberto' }],
  creator: 'Yahir Alberto',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'Yahir Alberto — Full-Stack Developer | ERP Automation & SaaS',
    description:
      'Full-Stack Developer especializado en automatización ERP, integraciones complejas y plataformas SaaS. Next.js, Node.js, SAGE 300, Odoo.',
    siteName: 'Yahir Alberto Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahir Alberto — Full-Stack Developer | ERP Automation & SaaS',
    description:
      'Full-Stack Developer especializado en automatización ERP, integraciones complejas y plataformas SaaS.',
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
