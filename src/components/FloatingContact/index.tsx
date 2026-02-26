'use client';
import { Dispatch, SetStateAction } from 'react';
import { IoIosContact } from 'react-icons/io';
import { useSoundEffect } from '@/hooks/useSound';

interface FloatingContactProps {
  setOpenContact: Dispatch<SetStateAction<boolean>>;
}

export const FloatingContact = ({ setOpenContact }: FloatingContactProps) => {
  const { playSound } = useSoundEffect();

  const handleClick = () => {
    playSound('click');
    setOpenContact(true);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Abrir formulário de contato"
      className={`
        hidden md:flex
        fixed bottom-8 right-8 z-40
        group items-center gap-0
        border-2 border-neon-cyan text-neon-cyan
        bg-cyber-dark/80 backdrop-blur-sm
        rounded-full px-4 py-3
        shadow-neon-cyan-sm
        hover:shadow-neon-cyan hover:bg-neon-cyan/10
        hover:gap-2 hover:pr-5
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-purple-900
      `}
    >
      <IoIosContact className="text-2xl flex-shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[8rem] transition-all duration-300 whitespace-nowrap text-sm font-medium">
        Fale comigo
      </span>
    </button>
  );
};
