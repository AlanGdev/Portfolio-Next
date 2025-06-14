'use client';
// components/TerminalLoader.tsx
import { useEffect, useState } from 'react';
import { VT323 } from 'next/font/google';
import { motion } from 'framer-motion';

const lines = [
  '...',
  'Booting system...',
  'Loading modules...',
  'Initializing Web Interface...',
  'Starting services...',
  'Launching Portfolio... !-) ',
];
const vt323 = VT323({ weight: '400', subsets: ['latin'] });

export default function TerminalLoader({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine((currentLine) => currentLine + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const closeTimer = setTimeout(() => {
        setIsClosing(true);
      }, 500);
      return () => clearTimeout(closeTimer);
    }
  }, [currentLine]);

  useEffect(() => {
    if (isClosing) {
      const onCompleteTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(onCompleteTimer);
    }
  }, [isClosing, onComplete]);

  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={isClosing ? { scaleY: 0 } : { scaleY: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-screen bg-black p-6 font-mono text-4xl text-green-700"
    >
      {lines.slice(0, currentLine + 1).map((line, idx) => (
        <p key={idx} className={`animate-pulse ${vt323.className} `}>
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
    </motion.div>
  );
}
