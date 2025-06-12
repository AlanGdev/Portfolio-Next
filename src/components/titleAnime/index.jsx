'use client';
import { useState, useEffect } from 'react';
import { jetbrainsMono } from '@/fonts';
import { motion } from 'framer-motion';

export function TitleAnime({ message = '' }) {
  const [text, setText] = useState('');

  useEffect(() => {
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
  }, [message]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      aria-label={message}
      className={
        { text } != ''
          ? `${jetbrainsMono.className} mb-4 min-h-[96px] text-4xl font-bold sm:text-6xl`
          : 'text-base-400'
      }
    >
      {text || message}
      <span className="border-base-content flash ml-1 border-r-3" />
    </motion.h1>
  );
}
