import { TitleAnime } from '../titleAnime';
/*export function HeroSection() {
  return (
    <>
      <section className="flex h-screen items-center justify-center px-4 text-center">
        <div>
          <h1 className="sr-only">Développeur Web - Alan Grolleau</h1>
          <TitleAnime message="Bonjour, je suis Alan - Développeur Web" />
          <p className="text-base-content mx-auto mb-8 max-w-xl text-lg sm:text-xl">
            Développeur web freelance, je conçois des sites et applications
            modernes, performants et évolutifs. Que ce soit pour un site
            vitrine, une application métier ou une optimisation SEO, je vous
            accompagne avec des solutions adaptées à vos besoins.
          </p>
          <a href="#projets" className="btn btn-soft btn-success">
            Voir mes projets
          </a>
        </div>
      </section>
    </>
  );
}*/

export function TitleContenu() {
  return <>Alan Grolleau - Développeur web</>;
}
export function ParagContenu() {
  return (
    <p>
      Développeur web freelance, je conçois des sites et applications modernes,
      performants et évolutifs. Que ce soit pour un site vitrine, une
      application métier ou une optimisation SEO, je vous accompagne avec des
      solutions adaptées à vos besoins.
    </p>
  );
}

export function ProjectButton() {
  return (
    <a href="#projets" className="btn btn-soft btn-success">
      Voir mes projets
    </a>
  );
}
export function HeroSection() {
  return (
    <>
      <TitleAnime>
        <TitleContenu />
      </TitleAnime>

      <TitleContenu />
      <ParagContenu />
      <ProjectButton />
    </>
  );
}
