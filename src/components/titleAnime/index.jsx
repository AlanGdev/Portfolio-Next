'use client';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
export function TitleAnime({ message, delay, speed }) {
  const [start, setStart] = useState(false);
  return <>{start && <Typewriter words={[{ message }]} typeSpeed={speed} />}</>;
}
