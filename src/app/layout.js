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
  title: {
    default: 'Alan Grolleau',
    template: '%s | Alan Grolleau',
  },
  description: 'Développeur web freelance en Bretagne, spécialisé en Next.js.',
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
