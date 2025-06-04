'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function ProjectAnime({ projects }) {
  const projetsRef = useRef(null);
  const projetsInView = useInView(projetsRef, {
    once: true,
    margin: '50px 0px',
    amount: 0.1,
  });

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" ref={projetsRef}>
      {' '}
      {projects.map((project, index) => (
        <Link key={index} href={`/projects/${project._id}`}>
          <motion.div
            className="bg-base-300 rounded-xl p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
            initial={{ opacity: 0, y: 200, scale: 0 }}
            animate={projetsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              delay: (index - 1) * 0.3,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className="bg-base-200 relative mb-4 h-40 overflow-hidden rounded">
              <Image
                src={project.image}
                alt={project.nom}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-base-content mb-2 text-xl font-semibold">
              {project.nom}
            </h3>
            <p className="text-base-content text-sm">
              Description rapide du projet {index + 1}.
            </p>
            <p>{project._id}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
