'use client';
import { useState, useEffect, isValidElement } from 'react';
import { Children } from 'react';

export function TitleAnime({ children }) {
  const [text, setText] = useState('');
  const fullText = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const content = child.props.children;
      if (Array.isArray(content)) return content.join('');
      return content;
    }
  }).join('');

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
  }, [fullText]);

  return (
    <h1 className="mb-4 min-h-[96px] text-4xl font-bold sm:text-6xl">
      {text}
      <span className="border-base-content ml-1 animate-pulse border-r-2" />
    </h1>
  );
}
