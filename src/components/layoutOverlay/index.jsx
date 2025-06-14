'use client';
import TerminalLoader from '../terminalLoader';
import { useEffect, useState } from 'react';

export function LayoutOverlay() {
  const [startComponent, setStartComponent] = useState(null);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const stored = sessionStorage.getItem('started');
    setStartComponent(stored);
    if (!display) {
      setDisplay(!stored);
    }
  }, []);
  useEffect(() => {
    if (display) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.overflow = '';
    }
  }, [display]);
  return (
    <>
      <div className={`${display ? 'absolute top-0 left-0 z-1000' : 'hidden'}`}>
        <TerminalLoader
          onComplete={() => {
            sessionStorage.setItem('started', true);
            document.body.style.overflow = '';
            setDisplay(false);
          }}
        />
      </div>
    </>
  );
}
