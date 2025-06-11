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
          <motion.p
            className="text-base-content bg-base-200 z-50 mx-auto mb-8 max-w-xl rounded-3xl p-2 text-lg sm:text-xl"
            animate={{ x: ['-100%', '0%'], opacity: ['0%', '60%'] }}
            transition={{
              //x: { duration: 1, delay: 3.5, ease: 'easeInOut' },
              //opacity: { delay: 3.5, duration: 3, ease: 'easeOut' },
              x: {
                type: 'spring',
                stiffness: 150,
                damping: 22,
                mass: 6,
                delay: 2.7,
              },
              opacity: { delay: 3, duration: 0.8 },
            }}
          >
            Freelance, je conçois des sites vitrine et applications métier
            modernes, connectées à des API et bases de données. Les réalisations
            sont pensées pour la performance, le référencement naturel et
            l’accessibilité, le tout dans un esprit de green-coding.
          </motion.p>
          <motion.a
            href="#projets"
            className="btn btn-soft btn-success hover:scale-105"
            animate={{ scale: [0, 1] }}
            transition={{ scale: { delay: 3.5, duration: 0.5 } }}
          >
            Voir mes projets
          </motion.a>
        </div>
      </section>
    </div>
  );
}
