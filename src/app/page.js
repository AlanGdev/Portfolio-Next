'use client';
// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HeroSection } from '@/components/heroSection';

export default function Home() {
  const fullText = 'Bonjour, je suis Alan – Développeur Web.';
  const [text, setText] = useState('');

  const [theme, setTheme] = useState('caramellatte');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'business' ? 'caramellatte' : 'business'));
  };

  const projetsRef = useRef(null);
  const projetsInView = useInView(projetsRef, { once: true });

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true });

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  return (
    <>
      <Head>
        <title>Alan | Développeur Web</title>
        <meta
          name="description"
          content="Portfolio de Alan Grolleau, développeur web freelance spécialisé en React Next.js et Bootstrap Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*     <header className="bg-base-200 sticky top-0 z-50 shadow-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-base-content text-xl font-bold">Alan.dev</div>
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-active btn-warning"
          >
            {theme === 'business' ? '☀️' : '🌙'}
          </button>
          <ul className="text-base-content flex gap-4 text-sm">
            <li>
              <a href="#projets" className="hover:text-primary">
                Projets
              </a>
            </li>
            <li>
              <a href="#a-propos" className="hover:text-primary">
                À propos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
*/}
      <main className="bg-base-100 text-base-content">
        {/* HERO */}
        {/*        <section className="flex h-screen items-center justify-center px-4 text-center">
          <div>
            <h1 className="mb-4 min-h-[96px] text-4xl font-bold sm:text-6xl">
              {text}
              <span className="border-base-content ml-1 animate-pulse border-r-2" />
            </h1>
            <p className="text-base-content mx-auto mb-8 max-w-xl text-lg sm:text-xl">
              Développement de sites web modernes, performants et bien
              référencés.
            </p>
            <a
              href="#projets"
              className="btn btn-primary bg-primary text-primary-content hover:bg-primary-focus"
            >
              Voir mes projets
            </a>
          </div>
        </section>*/}
        <HeroSection />

        {/* PROJETS */}
        <section
          id="projets"
          ref={projetsRef}
          className="bg-base-200 min-h-screen px-4 py-16"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="text-base-content mb-12 text-center text-3xl font-bold">
              Mes projets
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="bg-base-300 rounded-xl p-6 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
                  initial={{ opacity: 0, y: 200, scale: 0 }}
                  animate={projetsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    delay: (i - 1) * 0.3,
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="bg-base-200 mb-4 h-40 rounded"></div>
                  <h3 className="text-base-content mb-2 text-xl font-semibold">
                    Projet {i}
                  </h3>
                  <p className="text-base-content text-sm">
                    Description rapide du projet {i}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* À PROPOS */}
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
                className="border-primary h-48 w-48 rounded-full border object-cover"
              />
              <div className="text-base-content">
                <p className="mb-4">
                  Après une riche expérience dans la gestion d’équipes et le
                  suivi d’activités techniques dans les secteurs de l’énergie et
                  de l’eau, j’ai choisi d’orienter mon parcours vers une voie
                  qui allie rigueur analytique et créativité : le développement
                  web.
                  <br /> Passionné par l’optimisation des processus et la
                  création d’outils numériques, je mets aujourd’hui mes
                  compétences en programmation au service de solutions
                  performantes et intuitives.
                  <br />
                  Mon expertise en reporting et en gestion de données, combinée
                  à mes compétences en développement full-stack, me permet de
                  concevoir des applications adaptées aux besoins des
                  entreprises et des utilisateurs. Curieux de nature et toujours
                  en quête d’amélioration, j’aime relever de nouveaux défis
                  techniques et apprendre de chaque projet. <br /> À travers ce
                  portfolio, je vous invite à découvrir mes projets et mon
                  approche du développement web.
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

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactRef}
          className="bg-base-200 min-h-screen px-4 py-16"
        >
          <div className="mx-auto max-w-3xl">
            <motion.h2
              className="text-base-content mb-8 text-center text-3xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Me contacter
            </motion.h2>

            <motion.form
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Nom"
                className="input input-bordered bg-base-100 text-base-content border-base-content w-full"
              />
              <input
                type="email"
                placeholder="Adresse email"
                className="input input-bordered bg-base-100 text-base-content border-base-content w-full"
              />
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered bg-base-100 text-base-content border-base-content w-full"
                rows="5"
              ></textarea>
              <button className="btn btn-primary bg-primary text-primary-content hover:bg-primary-focus">
                Envoyer
              </button>
            </motion.form>

            <div className="text-base-content mt-8 flex justify-center gap-6 text-center text-2xl">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
