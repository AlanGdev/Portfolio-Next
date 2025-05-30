import { TitleAnime } from '@/components/titleAnime';
export default function Home() {
  return (
    <>
      <div className="container mx-auto border p-4">
        <h1 className="sr-only">Développeur web freelance - Alan Grolleau</h1>
        <TitleAnime
          message={[
            'Bonjour, bienvenue sur mon portfolio',
            'Alan Grolleau - Développeur web',
          ]}
          speed={50}
          classe="text-4xl font-bold mb-4"
        />
        <section className="container border p-4" id="homeSection">
          <h2 className="text-2xl font-semibold">
            Des applications web sur mesure pour booster votre activité
          </h2>
          {/*<TitleAnime
            message={[
              'Des application Web sur mesure pour Booster votre activité',
            ]}
            classe="text-2xl font-semibold mb-2"
            speed={50}
            delay={5000}
          />*/}
          <div className="flex flex-col items-center md:flex-row">
            <p className="p-4 text-xl md:w-2/3">
              Développeur web freelance, je conçois des sites et applications
              modernes, performants et évolutifs. Que ce soit pour un site
              vitrine, une application métier ou une optimisation SEO, je vous
              accompagne avec des solutions adaptées à vos besoins.
            </p>
            <div className="mx-auto">
              <button className="btn btn-soft btn-success">
                Contactez-moi
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
