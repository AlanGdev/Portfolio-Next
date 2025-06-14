import { HeroSection } from '@/components/heroSection';
import { ProjectSection } from '@/components/projectSection';
import { AboutSection } from '@/components/aboutSection';
import { ContactSection } from '@/components/contactSection';
import { LayoutOverlay } from '@/components/layoutOverlay';

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
    url: 'https://alangrolleau-developpeurweb-portfol.vercel.app',
    siteName: 'Alan Grolleau | Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://alangrolleau-developpeurweb-portfol.vercel.app/openGraphGeneral.png',
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
      'https://alangrolleau-developpeurweb-portfol.vercel.app/openGraphGeneral.png',
    ],
  },
};

export default async function Home() {
  let projects = [];
  let skills = [];
  try {
    const respProjects = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/`,
      { cache: 'no-store' }
    );
    if (!respProjects.ok) {
      throw new Error('Erreur lors de la récupération des projets');
    }
    projects = await respProjects.json();
  } catch (error) {
    console.error('Erreur fetch Projets', error);
  }
  try {
    const respSkills = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/skill/`,
      { cache: 'no-store' }
    );
    if (!respSkills.ok)
      throw new Error('Erreur lors de la récupération des skills');
    skills = await respSkills.json();
  } catch (error) {
    console.error('Erreur fetch Skills', error);
  }
  //console.log(projects);
  //console.log(skills);
  return (
    <>
      <div className="relative">
        <LayoutOverlay />
        <HeroSection />
        <ProjectSection projects={projects} />
        <AboutSection skills={skills} />
        <ContactSection />
      </div>{' '}
    </>
  );
}
