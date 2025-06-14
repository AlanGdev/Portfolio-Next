'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function AboutSection({ skills }) {
  if (!skills || !Array.isArray(skills)) {
    return (
      <div className="text-base-content p-8 text-center">
        <span className="loading loading-dots loading-lg text-info" />
      </div>
    );
  }
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false });

  const skillRef = useRef(null);
  const skillInView = useInView(skillRef, { once: false });

  return (
    <section
      id="a-propos"
      ref={aboutRef}
      className="bg-base-100 min-h-screen px-4 py-16"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-success-content bg-success mb-8 origin-bottom text-center text-3xl font-bold font-stretch-150%"
          initial={{ opacity: 0, y: 50, scaleY: 0 }}
          animate={aboutInView ? { opacity: 1, y: 0, scaleY: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          À propos de moi...
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8 md:flex-row"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Image
            src={'/alan1.webp'}
            alt="Photo de Alan"
            width={200}
            height={200}
            className="border-secondary-content h-36 w-36 rounded-full border object-cover brightness-180 contrast-100 hue-rotate-60 filter"
          />
          <div className="text-base-content">
            <p className="mb-4 font-stretch-125%">
              Après une riche expérience dans la gestion d’équipes et le suivi
              d’activités techniques dans les secteurs de l’énergie et de l’eau,
              j’ai choisi d’orienter mon parcours vers une voie qui allie
              rigueur analytique et créativité : le développement web.
              <br /> Passionné par l’optimisation des processus et la création
              d’outils numériques, je mets aujourd’hui mes compétences en
              programmation au service de solutions performantes et intuitives.
              <br />
              Mon expertise en reporting et en gestion de données, combinée à
              mes compétences en développement full-stack, me permet de
              concevoir des applications adaptées aux besoins des entreprises et
              des utilisateurs. Curieux de nature et toujours en quête
              d’amélioration, j’aime relever de nouveaux défis techniques et
              apprendre de chaque projet. <br /> À travers ce portfolio, je vous
              invite à découvrir mes projets et mon approche du développement
              web.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Next.js',
                'React',
                'Tailwind',
                'Bootstrap',
                'Node.js',
                'MongoDB',
              ].map((skill) => (
                <span
                  key={skill}
                  className="badge badge-outline border-success text-success"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-2 p-4" ref={skillRef}>
          {Array.isArray(skills) &&
            skills.map((skill, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100, scaleX: 0 }}
                  animate={skillInView ? { opacity: 1, y: 0, scaleX: 1 } : {}}
                  transition={{
                    delay: index / 4,
                    ease: 'easeInOut',
                    type: 'spring',
                    bounce: 0.3,
                    duration: 1,
                  }}
                  key={index}
                  className="collapse-plus bg-base-200 border-base-300 collapse origin-left border"
                >
                  <label
                    htmlFor={`catégorie ${skill.categorie}`}
                    className="sr-only"
                  ></label>
                  <input
                    id={`catégorie ${skill.categorie}`}
                    type="checkbox"
                    name="my-accordion-3"
                    aria-label={`catégorie ${skill.categorie}`}
                  />
                  <div className="collapse-title font-semibold font-stretch-150%">
                    {skill.categorie}
                  </div>
                  <div className="collapse-content text-sm">
                    <ul>
                      {Array.isArray(skill.skills) &&
                        skill.skills.map((skill, index) => (
                          <li key={index} className="font-stretch-125%">
                            {skill}
                          </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 p-2">
                      <p className="font-semibold font-stretch-200% underline">
                        Projets associés:
                      </p>
                      <ul>
                        {Array.isArray(skill.projets) &&
                          skill.projets.map((projet, index) => (
                            <Link key={index} href={`/projects/${projet._id}`}>
                              <li className="text-primary font-stretch-200% underline">
                                {projet.nom}
                              </li>
                            </Link>
                          ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
