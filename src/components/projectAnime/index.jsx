'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function ProjectAnime({ projects }) {
  const projetsRef = useRef(null);
  const projetsInView = useInView(projetsRef, {
    once: false,
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" ref={projetsRef}>
      {' '}
      {Array.isArray(projects) &&
        projects.map((project, index) => (
          <Link
            key={index}
            aria-label={`Voir le projet ${project.nom}`}
            href={`/projects/${project._id}`}
            className="flex"
          >
            <motion.div
              className="hover:bg-base-200 w-full rounded-xl bg-transparent p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
              initial={{ opacity: 0, scale: 0 }}
              animate={projetsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.3 + (index - 1) * 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
            >
              <div className="relative mb-4 h-40 overflow-hidden rounded bg-transparent">
                <Image
                  src={project.image}
                  alt={project.nom}
                  fill
                  className="animate-pulse object-contain"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="text-base-content mb-2 text-xl font-semibold">
                  {project.nom}
                </h3>
                <p className="text-base-content text-sm">
                  catégorie: {project.categorie}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
    </div>
  );
}
