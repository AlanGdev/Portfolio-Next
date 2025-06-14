import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Head from 'next/head';
import Footer from '@/components/footer';

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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Alan Grolleau',
              jobTitle: 'Développeur Web Freelance',
              url: 'https://alangrolleau-developpeurweb-portfol.vercel.app',
              image:
                'https://alangrolleau-developpeurweb-portfol.vercel.app/og-image.png',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Theix-Noyalo',
                addressRegion: 'Bretagne',
                postalCode: '56450',
                addressCountry: 'FR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+33-6-87-19-02-92',
                contactType: 'service client',
                areaServed: 'FR',
                availableLanguage: ['fr'],
              },
              sameAs: [
                'https://www.linkedin.com/in/alan-grolleau',
                'https://github.com/alangrolleau',
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-stretch-125%`}
      >
        <Header />
        <main className="bg-base-100 text-base-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
