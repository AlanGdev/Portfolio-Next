import { HeroSection } from '@/components/heroSection';
import { ProjectSection } from '@/components/projectSection';
import { AboutSection } from '@/components/aboutSection';
import { ContactSection } from '@/components/contactSection';

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
