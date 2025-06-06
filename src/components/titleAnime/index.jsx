'use client';
import { useState, useEffect } from 'react';

export function TitleAnime({ message = '' }) {
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(message.slice(0, i + 1));
      i++;
      if (i === message.length) {
        clearInterval(typing);
      }
    }, 60);
    return () => clearInterval(typing);
  }, [message]);

  return (
    <h1
      aria-label={message}
      className="mb-4 min-h-[96px] text-4xl font-bold sm:text-6xl"
    >
      {text || message}
      <span className="border-base-content ml-1 animate-pulse border-r-3" />
    </h1>
  );
}
