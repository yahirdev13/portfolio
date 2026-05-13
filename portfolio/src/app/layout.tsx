import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/i18n/I18nProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yahir Alberto — Full-Stack Developer | ERP Integration & SaaS',
  description:
    'Full-Stack Developer based in Mexico. I architect platforms, integrate ERPs (SAGE 300, Odoo) and build enterprise middleware — Next.js, Node.js, TypeScript.',
  keywords: [
    'Full-Stack Developer',
    'ERP Middleware Integration',
    'Multi-tenant SaaS',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'SAGE 300',
    'Odoo',
    'Freelancer Mexico',
    'Yahir Alberto',
    'ERP Integration',
  ],
  authors: [{ name: 'Yahir Alberto Díaz González' }],
  creator: 'Yahir Alberto',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Yahir Alberto — Full-Stack Developer | ERP Integration & SaaS',
    description:
      'Full-Stack Developer based in Mexico. I architect platforms, integrate ERPs (SAGE 300, Odoo) and build enterprise middleware — Next.js, Node.js, TypeScript.',
    siteName: 'Yahir Alberto Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yahir Alberto — Full-Stack Developer | ERP Integration & SaaS',
    description:
      'Full-Stack Developer based in Mexico. I architect platforms, integrate ERPs (SAGE 300, Odoo) and build enterprise middleware — Next.js, Node.js, TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const initLocaleScript = `(function(){try{var l=localStorage.getItem('locale');if(l!=='es'&&l!=='en'){var n=(navigator.language||'').toLowerCase();l=n.indexOf('es')===0?'es':'en';}document.documentElement.lang=l;document.documentElement.dataset.locale=l;}catch(e){document.documentElement.lang='en';document.documentElement.dataset.locale='en';}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initLocaleScript }} />
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
