'use client';
import { useForm } from 'react-hook-form';

export default function FormulaireContact() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('nom', { required: 'Le nom est requis' })}
          placeholder="Entrez votre nom"
          className="input input-bordered w-full focus:outline-none"
        />
        {errors.nom && (
          <p className="text-sm text-red-500">{errors.nom.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          {...register('email', { required: "L'adresse email est requise" })}
          placeholder="Entrez votre adresse mail"
          className="input input-bordered w-full focus:outline-none"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Le message est requis' })}
          placeholder="Votre message..."
          className="textarea textarea-bordered w-full focus:outline-none"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
}
