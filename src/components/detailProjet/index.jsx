'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function DetailProjet({ project }) {
  return (
    <>
      <Link href="/#projets" className="mx-2 underline">
        Retour aux projets
      </Link>
      <div className="container mx-auto max-w-5xl p-6">
        {/* Titre et image principale */}
        <section className="mb-8">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-4 text-center text-5xl font-bold"
          >
            {project.nom}
          </motion.h1>
          {project.lien_demo ? (
            <a
              href={project.lien_demo}
              target="_blank"
              rel="noopener noreferer"
            >
              <motion.figure
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={project.image}
                  width={800}
                  height={400}
                  alt={`Présentation ${project.nom}`}
                  className="h-64 w-full object-contain sm:h-96"
                  priority
                />
              </motion.figure>
            </a>
          ) : (
            <motion.figure
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={project.image}
                width={800}
                height={400}
                alt={`Présentation ${project.nom}`}
                className="h-64 w-full object-contain sm:h-96"
                priority
              />
            </motion.figure>
          )}
        </section>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10 px-4 sm:px-0"
        >
          <h2 className="border-primary mb-3 border-b-2 pb-1 text-2xl font-semibold">
            Description
          </h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </motion.section>

        {/* Détails techniques */}
        {project.categorie && (
          <motion.section
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-10 px-4 sm:px-0"
          >
            <h2 className="border-primary mb-4 border-b-2 pb-1 text-2xl font-semibold">
              Détails techniques
            </h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="text-lg font-medium">
                <span className="font-bold">Catégorie:</span>{' '}
                {project.categorie}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-lg font-bold">Technologies:</span>
                {project.technologies.map((tech) => (
                  <div
                    key={tech._id}
                    className="tooltip tooltip-bottom"
                    data-tip={tech.nom}
                  >
                    <Image
                      src={tech.image}
                      width={48}
                      height={48}
                      alt={tech.nom}
                      className="rounded-md border border-gray-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Problématiques développées */}
        <motion.section
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-10 px-4 sm:px-0"
        >
          <div
            tabIndex={0}
            className="collapse-arrow border-base-300 bg-base-200 rounded-box collapse border"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-primary peer-checked:text-primary-content cursor-pointer text-xl font-semibold">
              Problématiques développées
            </div>
            <div className="collapse-content text-base-content">
              <ul className="list-inside list-disc space-y-2">
                {project.problematics.map((prob, index) => (
                  <li key={index}>{prob}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Liens GitHub et Demo */}
        <section className="mb-12 flex flex-wrap justify-center gap-6 px-4 sm:px-0">
          {project.lien_github && (
            <motion.a
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              href={project.lien_github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary"
            >
              {project.nom === 'Menu Maker by Qwenta'
                ? 'Voir la présentation'
                : 'Voir le code sur GitHub'}
            </motion.a>
          )}
          {project.lien_demo && (
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              href={project.lien_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {project.nom === 'Menu Maker by Qwenta'
                ? 'Voir les spéc. techniques'
                : 'Voir la démo'}
            </motion.a>
          )}
        </section>

        {/* Galerie d'images */}
        <section className="mb-16 px-4 sm:px-0">
          <h2 className="border-primary mb-6 border-b-2 pb-1 text-center text-2xl font-semibold">
            Galerie
          </h2>
          <div className="carousel carousel-start rounded-box w-full space-x-2">
            {project.images_detail.map((image, index) => (
              <div
                id={`item${index}`}
                key={index}
                className="carousel-item relative h-52 w-full overflow-hidden rounded-lg sm:h-72 md:h-96"
              >
                <motion.a
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  href={image}
                  target="blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 justify-center"
                >
                  <Image
                    src={image}
                    alt={`Capture d'écran du projet ${project.nom} - ${index + 1}`}
                    width={256}
                    height={160}
                    className="h-full w-full object-contain"
                    priority={index === 0}
                  />
                </motion.a>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            {project.images_detail.map((image, index) => {
              return (
                <a key={index} href={`#item${index}`} className="btn btn-xs">
                  {index + 1}
                </a>
              );
            })}
          </div>
        </section>
      </div>
      <Link href="/#projets" className="mx-2 mb-4 flex justify-end underline">
        Retour aux projets
      </Link>
    </>
  );
}
