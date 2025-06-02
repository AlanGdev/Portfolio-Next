import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Développeur Web Freelance - Alan Grolleau',
  description:
    'Applications web sur mesure, sites vitrine, optimisation SEO, et développement bacl-end. Contactez Alan Grolleau pour vos projets web.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="bg-base-100 text-base-content">{children}</main>
      </body>
    </html>
  );
}
