'use client';
import { useEffect, useState, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export const useKonamiCode = (callback: () => void) => {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === KONAMI_CODE[index]) {
        const nextIndex = index + 1;

        if (nextIndex === KONAMI_CODE.length) {
          setIsActive(true);
          callback();
          setIndex(0);
        } else {
          setIndex(nextIndex);
        }
      } else {
        setIndex(0);
      }
    },
    [index, callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { isActive, progress: index / KONAMI_CODE.length };
};

// Hook para detectar se o código já foi descoberto antes
export const useKonamiDiscovery = () => {
  const [hasDiscovered, setHasDiscovered] = useState(false);

  useEffect(() => {
    const discovered = localStorage.getItem('konami-discovered');
    if (discovered === 'true') {
      setHasDiscovered(true);
    }
  }, []);

  const markAsDiscovered = useCallback(() => {
    localStorage.setItem('konami-discovered', 'true');
    setHasDiscovered(true);
  }, []);

  return { hasDiscovered, markAsDiscovered };
};
