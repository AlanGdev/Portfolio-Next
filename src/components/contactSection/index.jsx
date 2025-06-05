'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export function ContactSection() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log('useForm loaded');

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      console.log('message envoyé:', result);
    } catch (error) {
      console.error('Erreur:', error.message);
    }
    reset();
  };

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                {...register('nom', { required: 'Le nom est requis' })}
                placeholder="Nom"
                className="input input-bordered bg-base-100 text-base-content w-full focus:outline-none"
              />
              {errors.nom && (
                <p className="text-sm text-red-500">{errors.nom.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register('email', {
                  required: "L'adresse email est requise",
                })}
                placeholder="Adresse email"
                className="input input-bordered bg-base-100 text-base-content w-full focus:outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register('message', {
                  required: 'Le message est requis',
                })}
                placeholder="Votre message..."
                className="textarea textarea-bordered bg-base-100 text-base-content w-full focus:outline-none"
                rows={5}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-success hover:bg-primary-focus hover:scale-105"
            >
              Envoyer
            </button>
          </motion.form>

          <div className="text-base-content mt-8 flex justify-center gap-6 text-center text-2xl">
            <a
              href="https://github.com/AlanGdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-success"
              aria-label="profil github"
            >
              <FaGithub />
              <span className="sr-only">Profil github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-grolleau-developpeur-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-success"
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
