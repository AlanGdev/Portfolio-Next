'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VT323 } from 'next/font/google';
import { IBM_Plex_Mono } from 'next/font/google';

const vt323 = VT323({ subsets: ['latin'], weight: '400' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export function TitleAnime({ message = '' }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const tape = setTimeout(() => {
      let i = 0;
      let cancelled = false;
      const typing = () => {
        if (cancelled) return;
        setText(message.slice(0, i + 1));
        i++;
        if (i < message.length) {
          setTimeout(typing, 60);
        }
      };
      typing();
      return () => (cancelled = true);
    }, 2800);
  }, [message]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 1] }}
      times={[0, 0.3, 0.3]}
      transition={{ duration: 0.3, delay: 2.8 }}
      aria-label={message}
      className={
        text
          ? `${ibmPlexMono.className} mb-4 min-h-[96px] text-4xl sm:text-6xl`
          : 'text-base-400'
      }
    >
      {text || message}
      <span className="border-base-content flash ml-1 border-r-3" />
    </motion.h1>
  );
}
