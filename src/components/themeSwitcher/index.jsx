'use client';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      setTheme(savedTheme === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    setTheme(!theme);
  };

  return (
    <>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value="dracula"
          onChange={handleChange}
          checked={theme}
        />
        <FaMoon className="swap-off h-6 w-6" />
        <FaSun className="swap-on h-6 w-6" />
      </label>
    </>
  );
}
