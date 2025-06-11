'use client';
import { ProjectAnime } from '../projectAnime';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function ProjectSection({ projects }) {
  return (
    <>
      <div className="bg-base-100 relative min-h-screen">
        <motion.div
          animate={{ opacity: ['0%', '35%', '0%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full"
        >
          <Image
            src="/backgroundProjects.png"
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
            <h2 className="text-base-content mb-12 text-center text-3xl font-bold">
              Mes projets
            </h2>
            <ProjectAnime projects={projects} />
          </div>
        </section>
      </div>{' '}
    </>
  );
}
