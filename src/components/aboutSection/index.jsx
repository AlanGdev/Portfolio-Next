'use client';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });
  return (
    <section
      id="a-propos"
      ref={aboutRef}
      className="bg-base-100 min-h-screen px-4 py-16"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-base-content mb-8 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          À propos de moi
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8 md:flex-row"
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Image
            src="/alan1.webp"
            alt="Photo de Alan"
            width={200}
            height={200}
            className="border-primary-content h-48 w-48 rounded-full border object-cover"
          />
          <div className="text-base-content">
            <p className="mb-4">
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
                'Bootstarp',
                'Node.js',
                'MongoDB',
              ].map((skill) => (
                <span
                  key={skill}
                  className="badge badge-outline border-primary text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
