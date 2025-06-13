'use client';
import { ProjectAnime } from '../projectAnime';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function ProjectSection({ projects }) {
  const titleRef = useRef();
  const titleInView = useInView(titleRef, { once: false });
  return (
    <>
      <div className="bg-base-100 relative min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ['0%', '35%', '0%'] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
            delay: 0.3,
          }}
          className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
        >
          <Image
            src="/backgroundProjects.webp"
            fill
            alt="background"
            className="object-cover opacity-50 blur-xs"
          />
        </motion.div>

        <section
          id="projets"
          className="relative z-10 min-h-screen bg-transparent px-4 py-16"
        >
          <div className="mx-auto max-w-5xl">
            <motion.h2
              ref={titleRef}
              className="h2 text-base-content mb-12 origin-top text-center text-3xl font-bold font-stretch-200%"
              initial={{ scaleY: 0 }}
              animate={titleInView ? { scaleY: [0, 1] } : {}}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              Mes projets
            </motion.h2>
            <ProjectAnime projects={projects} />
          </div>
        </section>
      </div>{' '}
    </>
  );
}
