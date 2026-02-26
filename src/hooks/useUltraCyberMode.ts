'use client';
import { useState, useCallback, useEffect } from 'react';

const CLICKS_TO_ACTIVATE = 7;
const RESET_TIMEOUT = 2000; // Reset contador após 2s sem cliques

export const useUltraCyberMode = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  // Carregar estado do localStorage
  useEffect(() => {
    const stored = localStorage.getItem('ultra-cyber-mode');
    if (stored === 'true') {
      setIsActive(true);
    }
  }, []);

  // Reset automático se não clicar em tempo
  useEffect(() => {
    if (clickCount === 0) return;

    const timeout = setTimeout(() => {
      setClickCount(0);
    }, RESET_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [clickCount, lastClickTime]);

  const handleClick = useCallback(() => {
    const now = Date.now();
    setLastClickTime(now);

    setClickCount(prev => {
      const newCount = prev + 1;

      if (newCount >= CLICKS_TO_ACTIVATE && !isActive) {
        setIsActive(true);
        localStorage.setItem('ultra-cyber-mode', 'true');
        return 0;
      }

      return newCount;
    });
  }, [isActive]);

  const deactivate = useCallback(() => {
    setIsActive(false);
    localStorage.removeItem('ultra-cyber-mode');
  }, []);

  const toggle = useCallback(() => {
    if (isActive) {
      deactivate();
    } else {
      setIsActive(true);
      localStorage.setItem('ultra-cyber-mode', 'true');
    }
  }, [isActive, deactivate]);

  return {
    clickCount,
    isActive,
    handleClick,
    deactivate,
    toggle,
    progress: clickCount / CLICKS_TO_ACTIVATE,
  };
};
