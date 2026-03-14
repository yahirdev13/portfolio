import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yahir Alberto — Full-Stack Developer',
  description:
    'Full-Stack Developer freelancer especializado en Next.js, Node.js y arquitecturas escalables. Proyectos reales: QarDeal, SageConnect, Tersoft, Cleany SaaS.',
  keywords: [
    'Full-Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Freelancer',
    'México',
    'Yahir Alberto',
  ],
  authors: [{ name: 'Yahir Alberto' }],
  creator: 'Yahir Alberto',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'Yahir Alberto — Full-Stack Developer',
    description:
      'Full-Stack Developer freelancer especializado en Next.js, Node.js y arquitecturas escalables.',
    siteName: 'Yahir Alberto Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahir Alberto — Full-Stack Developer',
    description:
      'Full-Stack Developer freelancer especializado en Next.js, Node.js y arquitecturas escalables.',
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
