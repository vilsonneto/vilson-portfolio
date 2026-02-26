'use client';
import Image from "next/image";
import style from "./style.module.css";
import { Dispatch, SetStateAction } from "react";
import { FaCode, FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { AudioToggle } from "@/components/AudioToggle";
import { useUltraCyberMode } from "@/hooks/useUltraCyberMode";
import { useSoundEffect } from "@/hooks/useSound";

interface IHeaderProps {
  setOpenContact: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setOpenContact }: IHeaderProps) => {
  const { handleClick, isActive, progress } = useUltraCyberMode();
  const { playSound } = useSoundEffect();

  const handleNameClick = () => {
    handleClick();

    // Se ativou agora, toca som de sucesso
    if (progress >= 0.85 && !isActive) {
      playSound('success');
    }
  };

  return (
    <header
      id="home"
      className={`h-28 w-full bg-blueBaby-300 flex flex-row justify-between font-bold ${style.text} ${isActive ? 'ultra-cyber-active' : ''}`}
      style={isActive ? {
        background: 'linear-gradient(90deg, #5A7BB8 0%, #BF00FF 50%, #5A7BB8 100%)',
        backgroundSize: '200% 100%',
        animation: 'gradientShift 3s ease infinite',
      } : undefined}
    >
      <div className={`h-full flex flex-row items-center gap-2 ml-9`}>
        <Image
          className={`w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'shadow-neon-cyan' : ''}`}
          src="/vilson.jpg"
          width={55}
          height={55}
          alt="Picture of the author"
        />
        <h1
          className={`ml-3 text-xl cursor-pointer select-none transition-all duration-300 ${isActive ? 'text-neon-cyan animate-glow' : ''}`}
          onClick={handleNameClick}
          title={isActive ? 'Ultra Cyber Mode ativado!' : `Clique ${Math.ceil((1 - progress) * 7)}x mais...`}
        >
          VILSON PADILHA
          {/* Indicador de progresso sutil */}
          {progress > 0 && progress < 1 && !isActive && (
            <span className="ml-2 text-xs text-neon-green opacity-50">
              {Math.round(progress * 100)}%
            </span>
          )}
          {isActive && (
            <span className="ml-2 text-xs text-neon-pink">⚡</span>
          )}
        </h1>
      </div>

      <div className={`${style.navbar} flex items-center`}>
        <AudioToggle className="mr-4 hidden md:block" />
        <nav className="h-full flex flex-row items-center gap-10 md:gap-5 md:mr-40">
          <a href="#home" aria-label="Home">
            <span className={`${style.icon}`} aria-hidden="true"><FaHome /></span>
          </a>
          <a href="#aboutme">
            <span className={`${style.textLink}`}>Sobre</span>
            <span className={`${style.icon}`} aria-hidden="true"><SiAboutdotme /></span>
          </a>
          <a href="#projects">
            <span className={`${style.textLink}`}>Projetos</span>
            <span className={`${style.icon}`} aria-hidden="true"><FaCode /></span>
          </a>
          <button onClick={() => setOpenContact(true)}>
            <span className={`${style.textLink}`}>Contatos</span>
            <span className={`${style.icon}`} aria-hidden="true"><IoIosContact /></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
