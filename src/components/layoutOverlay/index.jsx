'use client';
import TerminalLoader from '../terminalLoader';
import { useState } from 'react';

export function LayoutOverlay() {
  const [display, setDisplay] = useState(true);
  return (
    <div className={`${display ? 'absolute top-0 left-0 z-1000' : 'none'}`}>
      <TerminalLoader onComplete={() => setDisplay(false)} />
    </div>
  );
}
