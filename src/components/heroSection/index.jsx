'use client';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import backgroundHero from '../../../public/backgroundHero.png';
import codeBinaire from '../../../public/codeBinaire-bouclable.png';
import { TitleAnime } from '../titleAnime';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-base-100 relative z-1 flex h-screen items-center justify-center px-4 text-center">
        <motion.div
          className="absolute top-0 left-0 z-0 flex h-full w-[200%] flex-row-reverse"
          animate={{ x: ['0%', '-50%'], opacity: 0.3 }}
          transition={{
            x: { duration: 2, ease: 'linear', repeat: Infinity },
            //opacity: { duration: 6, ease: 'easeInOut', repeat: Infinity },
          }}
        >
          <Image
            src={backgroundHero}
            alt="animated background"
            className="w-full blur-sm"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            src={backgroundHero}
            alt="animated background duplicate"
            className="w-full blur-sm"
            width={0}
            height={0}
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 z-0 flex h-full w-[200%]"
          animate={{ x: ['0%', '-50%'], opacity: 0.5 }}
          transition={{
            x: { duration: 8, ease: 'linear', repeat: Infinity },
          }}
        >
          <Image
            src={codeBinaire}
            alt="animated background"
            className="w-full object-cover blur-lg"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            src={codeBinaire}
            alt="animated background duplicate"
            className="w-full object-cover blur-lg"
            width={0}
            height={0}
            sizes="100vw"
          />
        </motion.div>

        <div className="z-50">
          {' '}
          <TitleAnime message="Bonjour, je suis Alan - Développeur Web"></TitleAnime>
          <p className="text-base-content bg-base-200 z-50 mx-auto mb-8 max-w-xl rounded-3xl text-lg opacity-60 sm:text-xl">
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
