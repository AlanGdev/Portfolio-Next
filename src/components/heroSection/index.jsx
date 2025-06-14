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
    <div className="h-screen w-screen overflow-hidden">
      <motion.section
        initial={{ scalY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="bg-base-100 relative z-0 flex h-screen w-screen items-center justify-center px-4 text-center"
        ref={heroRef}
      >
        <motion.div
          className="absolute top-0 left-0 z-0 flex h-full w-[200%] flex-row-reverse"
          initial={{ x: '0%', opacity: 0 }}
          animate={heroInView ? { x: ['0%', '-50%'], opacity: 0.3 } : {}}
          transition={{
            x: { duration: 2, ease: 'linear', repeat: Infinity, delay: 3.5 },
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
          animate={heroInView ? { x: ['0%', '-50%'], opacity: 0.4 } : {}}
          transition={{
            x: { duration: 1, ease: 'linear', repeat: Infinity, delay: 2.5 },
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
            x: { duration: 4.5, ease: 'linear', repeat: Infinity, delay: 3 },
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
            className="text-base-content bg-base-200 z-50 mx-auto mb-8 max-w-xl rounded-3xl p-2 text-lg font-stretch-125% sm:text-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1],
              opacity: ['0%', '65%'],
            }}
            transition={{
              opacity: { delay: 5 },
              scale: { delay: 5, type: 'spring', bounce: 0.4, duration: 2 },
            }}
          >
            Freelance — je conçois des sites et applis métier performants,
            connectés à vos données, pensés pour le référencement,
            l’accessibilité et un numérique plus durable.
          </motion.p>
          <motion.a
            href="#projets"
            className="btn btn-outline btn-success hover:scale-105"
            initial={{ scale: 0, y: '-100%', opacity: 0 }}
            animate={{
              scale: [0, 1],
              y: ['-100%', '0%'],
              opacity: ['0%', '60%'],
            }}
            transition={{
              scale: {
                delay: 5.5,
                duration: 1,
                type: 'spring',
                duration: 2,
                bounce: 0.4,
              },
              opacity: { delay: 5.5, duration: 0.5 },
              y: { delay: 5.5, duration: 0.5 },
            }}
          >
            Voir mes projets
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}
