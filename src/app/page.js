import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">
          Développeur Web Freelance - Alan Grolleau
        </h1>
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
      </div>
    </>
  );
}
