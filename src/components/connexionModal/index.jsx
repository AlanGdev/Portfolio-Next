'use client';
import { useForm } from 'react-hook-form';

export function ConnexionModal({ open, onClose }) {
  if (!open) return null;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (e) => {
    onClose();
    reset();
  };

  return (
    <>
      <div className={`modal z-50 ${open ? 'modal-open' : ''}`}>
        <div className="modal-box bg-base-200 border p-0">
          <div className="flex justify-end">
            <button className="btn btn-ghost" onClick={onClose}>
              <span className="font-bold">X</span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="m-0 text-lg font-bold">Connexion</h2>
          </div>

          <div className="modal-action justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="email"
                className="input input-bordered w-full focus:outline-none"
              />
              <input
                type="password"
                {...register('password', { required: true })}
                placeholder="Mot de passe"
                className="input input-bordered w-full focus:outline-none"
              />
              <button type="submit" className="btn btn-primary mb-4">
                Valider
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
