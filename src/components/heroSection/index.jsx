'use client';
import { delay, easeInOut, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import backgroundHero from '../../../public/backgroundHero.webp';
import backgroundHero1 from '../../../public/backgroundHero1.webp';
import codeBinaire from '../../../public/codeBinaire-bouclable.webp';
import { TitleAnime } from '../titleAnime';
import { useRef } from 'react';

export function HeroSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false });
  return (
    <div className="relative overflow-hidden">
      <section
        className="bg-base-100 relative z-1 flex h-screen items-center justify-center px-4 text-center"
        ref={heroRef}
      >
        <motion.div
          className="absolute top-0 left-0 z-0 flex h-full w-[200%] flex-row-reverse"
          initial={{ x: '0%', opacity: 0 }}
          animate={useInView ? { x: ['0%', '-50%'], opacity: 0.3 } : {}}
          transition={{
            x: { duration: 2, ease: 'easeInOut', repeat: 5, delay: 0.3 },
            //opacity: { duration: 6, ease: 'easeInOut', repeat: Infinity },
          }}
        >
          <Image
            src={backgroundHero}
            alt="animated background"
            className="w-full blur-xs"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            src={backgroundHero}
            alt="animated background duplicate"
            className="w-full blur-xs"
            width={0}
            height={0}
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 z-0 flex h-full w-[200%] flex-row-reverse"
          initial={{ x: '0%', opacity: 0 }}
          animate={{ x: ['0%', '-50%'], opacity: 0.4 }}
          transition={{
            x: { duration: 1, ease: 'easeInOut', repeat: 8, delay: 0.3 },
            //opacity: { duration: 6, ease: 'easeInOut', repeat: Infinity },
          }}
        >
          <Image
            src={backgroundHero1}
            alt="animated background"
            className="w-full blur-sm"
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            src={backgroundHero1}
            alt="animated background duplicate"
            className="w-full blur-sm"
            width={0}
            height={0}
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 z-0 flex h-full w-[200%]"
          initial={{ x: '0%', opacity: 0 }}
          animate={{ x: ['0%', '-50%'], opacity: 0.5 }}
          transition={{
            x: { duration: 4.5, ease: 'linear', repeat: 2, delay: 0.3 },
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
            initial={{ x: '-100%', scale: 0, opacity: 0 }}
            animate={{
              x: ['-100%', '0%'],
              scale: [0, 1],
              opacity: ['0%', '60%'],
            }}
            transition={{
              //x: { duration: 1, delay: 3.5, ease: 'easeInOut' },
              //opacity: { delay: 3.5, duration: 3, ease: 'easeOut' },
              x: {
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 6,
                delay: 2.7,
              },
              opacity: { delay: 3, duration: 0.8 },
              scale: { delay: 2.8, duration: 2 },
            }}
          >
            Freelance — je conçois des sites et applis métier performants,
            connectés à vos données, pensés pour le référencement,
            l’accessibilité et un numérique plus durable.
          </motion.p>
          <motion.a
            href="#projets"
            className="btn btn-soft btn-success hover:scale-105"
            initial={{ scale: 0, y: '-100%', opacity: 0 }}
            animate={{
              scale: [0, 1],
              y: ['-100%', '0%'],
              opacity: ['0%', '60%'],
            }}
            transition={{
              scale: { delay: 3.5, duration: 1 },
              opacity: { delay: 3.5, duration: 1 },
              y: { delay: 3.5, duration: 1 },
            }}
          >
            Voir mes projets
          </motion.a>
        </div>
      </section>
    </div>
  );
}
