import Image from 'next/image';
import Link from 'next/link';
import CarouselProjects from '@/components/carouselProjets';
import ListeTechnos from '@/components/listeTechnos';

export default async function Home() {
  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    {
      cache: 'no-store',
    }
  );
  const resTechnos = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/techno`,
    {
      cache: 'no-store',
    }
  );
  const projects = await resProjects.json();
  const technos = await resTechnos.json();
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">
          Développeur Web Freelance - Alan Grolleau
        </h1>
        <h2 className="mb-2 text-2xl font-semibold">
          Des applications sur mesure pour booster votre activité
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col justify-between p-4 text-lg md:w-2/3">
            <p>
              {' '}
              Développeur web freelance, je conçois des sites et applications
              modernes, performants et évolutifs. Que ce soit pour un site
              vitrine, une application métier ou une optimisation SEO, je vous
              accompagne avec des solutions adaptées à vos besoins.
            </p>
            <div className="flex justify-center">
              <Link className="btn btn-soft btn-success" href="/contact">
                Contactez-moi
              </Link>
            </div>
          </div>
          <div className="relative flex aspect-square w-full sm:mx-auto sm:w-1/2 md:w-1/3">
            <Image
              src="/alan1.webp"
              alt="Alan Grolleau"
              fill
              className="rounded-lg object-cover shadow"
            />
          </div>
        </div>
        <div className="container mb-4">
          <h2 className="mb-4 text-2xl font-bold">Projets</h2>

          <CarouselProjects projects={projects} />
        </div>
        <div className="container mb-4">
          <h2 className="text-2xl font-bold">Technologies utilisées</h2>
          <ListeTechnos technos={technos} />
        </div>
      </div>
    </>
  );
}
