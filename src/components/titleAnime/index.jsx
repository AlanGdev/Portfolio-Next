'use client';
import { useState, useEffect } from 'react';
export function TitleAnime({ message = '' }) {
  const fullText = message;
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typing);
      }
    }, 80);
    return () => clearInterval(typing);
  }, []);
  return (
    <>
      <p className="mb-4 min-h-[96px] text-4xl font-bold sm:text-6xl">
        {text}{' '}
        <span className="border-base-content ml-1 animate-pulse border-r-2" />
      </p>
    </>
  );
}
