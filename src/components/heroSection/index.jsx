'use client';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import backgroundHero from '../../../public/backgroundHero.png';
import { TitleAnime } from '../titleAnime';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative z-1 flex h-screen items-center justify-center bg-transparent px-4 text-center">
        <motion.div
          className="absolute top-0 left-0 z-1 flex h-full w-[200%]"
          animate={{ x: ['0%', '-50%'], opacity: [0, 0.3, 0] }}
          transition={{
            x: { duration: 12, ease: 'linear', repeat: Infinity },
            opacity: { duration: 6, ease: 'easeInOut', repeat: Infinity },
          }}
        >
          <Image
            src={backgroundHero}
            alt="animated background"
            className="w-1/2 object-cover blur-lg"
            fill
          />
          <Image
            src={backgroundHero}
            alt="animated background duplicate"
            className="w-1/2 object-cover blur-lg"
            fill
          />
        </motion.div>

        <div className="z-50">
          {' '}
          <TitleAnime message="Bonjour, je suis Alan - Développeur Web"></TitleAnime>
          <p className="text-base-content z-50 mx-auto mb-8 max-w-xl text-lg sm:text-xl">
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
    </div>
  );
}
