import { HeroSection } from '@/components/heroSection';
import { ProjectSection } from '@/components/projectSection';
import { AboutSection } from '@/components/aboutSection';
import { ContactSection } from '@/components/contactSection';

export const metadata = {
  title: 'Alan Grolleau | Développeur Web Freelance',
  description:
    'Accueil du portfolio d’Alan Grolleau, spécialiste React/Next.js. Prenez contact avec Alan Grolleau pour vos projets de développement web.',
  keywords: 'portfolio, freelance, développeur web, Alan Grolleau',
  openGraph: {
    title: 'Alan Grolleau | Développeur Web',
    description: 'Création de sites performants avec Next.js et SEO optimisé.',
    url: 'https://alangrolleau-developpeurweb-portfol.vercel.app',
    siteName: 'Alan Grolleau | Portfolio',
    images: [
      {
        url: '/og-image.png', // 1200x630 recommandé
        width: 1200,
        height: 630,
        alt: 'Image d’aperçu du site',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
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
