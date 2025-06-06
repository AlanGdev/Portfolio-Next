import { HeroSection } from '@/components/heroSection';
import { ProjectSection } from '@/components/projectSection';
import { AboutSection } from '@/components/aboutSection';
import { ContactSection } from '@/components/contactSection';

export const metadata = {
  title: 'Alan Grolleau | Développeur Web Freelance',
  description:
    'Création de sites performants avec Next.js et SEO optimisé. Contactez Alan Grolleau pour vos projets.',
  keywords: [
    'portfolio',
    'freelance',
    'développeur web',
    'Next.js',
    'SEO',
    'Vannes',
    'Remote',
  ],
  authors: [{ name: 'Alan Grolleau' }],
  creator: 'Alan Grolleau',
  openGraph: {
    title: 'Alan Grolleau | Développeur Web',
    description:
      'Création de sites et applications web performants avec Next.js et SEO optimisé.',
    url: 'https://alangrolleau-developpeurweb-portfolio.vercel.app',
    siteName: 'Alan Grolleau | Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://alangrolleau-developpeurweb-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alan Grolleau | Développeur Web',
    description:
      'Création de sites et applications web performants avec Next.js et SEO optimisé.',
    images: [
      'https://alangrolleau-developpeurweb-portfolio.vercel.app/og-image.png',
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
