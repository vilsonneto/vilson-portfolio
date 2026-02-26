'use client';
import Image from "next/image";
import style from "./style.module.css";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { FaCode, FaHome, FaLinkedin } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { AudioToggle } from "@/components/AudioToggle";
import { useUltraCyberMode } from "@/hooks/useUltraCyberMode";
import { useSoundEffect } from "@/hooks/useSound";
import { useActiveSection } from "@/hooks/useActiveSection";

interface IHeaderProps {
  setOpenContact: Dispatch<SetStateAction<boolean>>;
}

const SECTIONS = ['home', 'projects', 'experience', 'aboutme'];

export const Header = ({ setOpenContact }: IHeaderProps) => {
  const { handleClick, isActive, progress } = useUltraCyberMode();
  const { playSound } = useSoundEffect();
  const activeSection = useActiveSection(SECTIONS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleContactClick = () => { closeMenu(); setOpenContact(true); };

  const navLink = (section: string) =>
    `transition-all duration-200 ${activeSection === section ? 'opacity-100 border-b-2 border-neon-cyan text-neon-cyan' : 'opacity-70 hover:opacity-100'}`;

  const handleNameClick = () => {
    handleClick();

    // Se ativou agora, toca som de sucesso
    if (progress >= 0.85 && !isActive) {
      playSound('success');
    }
  };

  return (
    <>
    <header
      id="home"
      className={`sticky top-0 z-50 h-20 md:h-28 w-full bg-blueBaby-300/95 backdrop-blur-md flex flex-row justify-between font-bold ${style.text} ${isActive ? 'ultra-cyber-active' : ''}`}
      style={isActive ? {
        background: 'linear-gradient(90deg, #5A7BB8 0%, #BF00FF 50%, #5A7BB8 100%)',
        backgroundSize: '200% 100%',
        animation: 'gradientShift 3s ease infinite',
      } : undefined}
    >
      <div className={`h-full flex flex-row items-center gap-3 ml-9`}>
        <Image
          className={`w-10 h-10 md:w-14 md:h-14 rounded-full transition-all duration-300 ${isActive ? 'shadow-neon-cyan' : ''}`}
          src="/vilson.jpg"
          width={55}
          height={55}
          alt="Picture of the author"
        />
        <div className="flex flex-col">
          <h1
            className={`ml-3 text-xl cursor-pointer select-none transition-all duration-300 ${isActive ? 'text-neon-cyan animate-glow' : ''}`}
            onClick={handleNameClick}
            title={isActive ? 'Ultra Cyber Mode ativado!' : `Clique ${Math.ceil((1 - progress) * 7)}x mais...`}
          >
            VILSON PADILHA
            {progress > 0 && progress < 1 && !isActive && (
              <span className="ml-2 text-xs text-neon-green opacity-50">
                {Math.round(progress * 100)}%
              </span>
            )}
            {isActive && (
              <span className="ml-2 text-xs text-neon-pink">⚡</span>
            )}
          </h1>
          {/* Badge de disponibilidade — oculto no mobile para economizar espaço */}
          <span className="ml-3 hidden md:flex items-center gap-1.5 text-xs text-neon-green font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" aria-hidden="true" />
            Disponível para projetos
          </span>
        </div>
      </div>

      {/* Nav desktop */}
      <div className={`${style.navbar} flex items-center`}>
        <AudioToggle className="mr-4 hidden md:block" />
        <nav className="flex flex-row items-center gap-5 md:mr-40">
          <a href="#home" aria-label="Home" className={navLink('home')}>
            <span className={`${style.textLink}`}>Home</span>
            <span className={`${style.icon}`} aria-hidden="true"><FaHome /></span>
          </a>
          <a href="#aboutme" className={navLink('aboutme')}>
            <span className={`${style.textLink}`}>Sobre</span>
            <span className={`${style.icon}`} aria-hidden="true"><SiAboutdotme /></span>
          </a>
          <a href="#projects" className={navLink('projects')}>
            <span className={`${style.textLink}`}>Projetos</span>
            <span className={`${style.icon}`} aria-hidden="true"><FaCode /></span>
          </a>
          <a
            href="https://www.linkedin.com/in/vilson-padilha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <span className={`${style.textLink}`}>LinkedIn</span>
            <span className={`${style.icon}`} aria-hidden="true"><FaLinkedin /></span>
          </a>
          <button onClick={() => setOpenContact(true)} className="opacity-70 hover:opacity-100 transition-opacity duration-200">
            <span className={`${style.textLink}`}>Contatos</span>
            <span className={`${style.icon}`} aria-hidden="true"><IoIosContact /></span>
          </button>
        </nav>
      </div>

      {/* Botão hambúrguer — apenas mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden mr-5 flex flex-col justify-center gap-[5px] p-2 focus:outline-none"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
      >
        <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

    </header>

      {/* Overlay menu mobile — renderizado fora do <header> para evitar conflito de stacking context com sticky */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden flex flex-col items-center justify-center gap-8 animate-fadeIn"
          style={{ background: 'rgba(13, 2, 33, 0.97)', backdropFilter: 'blur(20px)' }}
        >
          {/* Linha decorativa topo */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />

          <nav className="flex flex-col items-center gap-7" aria-label="Menu mobile">
            <a href="#home" onClick={closeMenu} className="text-2xl font-bold tracking-widest opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-200">
              HOME
            </a>
            <a href="#projects" onClick={closeMenu} className="text-2xl font-bold tracking-widest opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-200">
              PROJETOS
            </a>
            <a href="#experience" onClick={closeMenu} className="text-2xl font-bold tracking-widest opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-200">
              EXPERIÊNCIA
            </a>
            <a href="#aboutme" onClick={closeMenu} className="text-2xl font-bold tracking-widest opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-200">
              SOBRE
            </a>
            <a
              href="https://www.linkedin.com/in/vilson-padilha"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-2xl font-bold tracking-widest text-neon-purple opacity-80 hover:opacity-100 transition-all duration-200"
            >
              LINKEDIN
            </a>
            <button
              onClick={handleContactClick}
              className="mt-2 px-8 py-3 border-2 border-neon-cyan text-neon-cyan text-lg font-bold tracking-widest rounded-md hover:bg-neon-cyan/10 hover:shadow-neon-cyan transition-all duration-300"
            >
              FALE COMIGO
            </button>
          </nav>

          {/* Badge disponibilidade */}
          <span className="absolute bottom-10 flex items-center gap-2 text-sm text-neon-green">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" aria-hidden="true" />
            Disponível para projetos
          </span>
        </div>
      )}
    </>
  );
};
