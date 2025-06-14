'use client';
// components/TerminalLoader.tsx
import { useEffect, useState } from 'react';

const lines = [
  '...',
  'Booting system...',
  'Loading modules...',
  'Initializing Web Interface...',
  'Starting services...',
  'Launching Portfolio... !-) ',
];

export default function TerminalLoader({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 500); // Laisse 0.5s avant de passer à l'app
    }
  }, [currentLine, onComplete]);

  return (
    <div className="h-screen w-screen bg-black p-6 font-mono text-sm text-green-400">
      {lines.slice(0, currentLine + 1).map((line, idx) => (
        <p key={idx} className="animate-pulse">
          {line}
        </p>
      ))}
      {currentLine < lines.length && <span className="animate-blink">█</span>}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          display: inline-block;
          margin-left: 4px;
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}
