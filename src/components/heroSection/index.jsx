import { TitleAnime } from '../titleAnime';

export function HeroSection() {
  return (
    <>
      <section className="flex h-screen items-center justify-center px-4 text-center">
        <div>
          {' '}
          <TitleAnime message="Bonjour, je suis Alan - Développeur Web"></TitleAnime>
          <p className="text-base-content mx-auto mb-8 max-w-xl text-lg sm:text-xl">
            Développeur web freelance, je conçois des sites et applications
            modernes, performants et évolutifs. Que ce soit pour un site
            vitrine, une application métier ou une optimisation SEO, je vous
            accompagne avec des solutions adaptées à vos besoins.
          </p>
          <a
            href="#projets"
            className="btn btn-soft btn-success hover:scale-105"
          >
            Voir mes projets
          </a>
        </div>
      </section>
    </>
  );
}
