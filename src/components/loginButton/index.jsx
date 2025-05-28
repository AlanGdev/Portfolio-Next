'use client';

import { useState, useEffect } from 'react';
import { ConnexionModal } from '../connexionModal';

export function LoginButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="btn btn-ghost" onClick={() => setShowModal(true)}>
        Login
      </button>
      <ConnexionModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
