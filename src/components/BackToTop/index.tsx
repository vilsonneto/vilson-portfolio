'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useSoundEffect } from '@/hooks/useSound';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { playSound } = useSoundEffect();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="Voltar ao topo"
      className={`
        hidden md:flex
        fixed bottom-8 left-8 z-40
        items-center justify-center
        w-11 h-11 rounded-full
        border-2 border-neon-cyan/60 text-neon-cyan
        bg-cyber-dark/80 backdrop-blur-sm
        shadow-neon-cyan-sm
        hover:shadow-neon-cyan hover:border-neon-cyan hover:scale-110
        transition-all duration-300 animate-fadeIn
        focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-purple-900
      `}
    >
      <FaArrowUp className="text-sm" aria-hidden="true" />
    </button>
  );
};
