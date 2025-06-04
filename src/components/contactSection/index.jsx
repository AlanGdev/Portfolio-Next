'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function ContactSection() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true });

  return (
    <>
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
              className="input input-bordered bg-base-100 text-base-content w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="Adresse email"
              className="input input-bordered bg-base-100 text-base-content w-full focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered bg-base-100 text-base-content w-full focus:outline-none"
              rows="5"
            ></textarea>
            <button className="btn btn-soft btn-success hover:bg-primary-focus hover:scale-105">
              Envoyer
            </button>
          </motion.form>

          <div className="text-base-content mt-8 flex justify-center gap-6 text-center text-2xl">
            <a
              href="https://github.com/AlanGdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="profil github"
            >
              <FaGithub />
              <span className="sr-only">Profil github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-grolleau-developpeur-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="profil linkedIn"
            >
              <FaLinkedin />
              <span className="sr-only">Profil linkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
