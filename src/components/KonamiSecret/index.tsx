'use client';
import { useState, useEffect } from 'react';
import { useKonamiCode, useKonamiDiscovery } from '@/hooks/useKonamiCode';
import { useSoundEffect } from '@/hooks/useSound';
import { GlitchText } from '@/components/effects/GlitchText';
import styles from './style.module.css';

// Ícones inline SVG para os universos geek
const GeekIcons = {
  // Naruto - Sharingan
  Sharingan: () => (
    <svg viewBox="0 0 100 100" className={styles.icon}>
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
      {/* Tomoe */}
      <circle cx="50" cy="20" r="6" fill="currentColor" />
      <circle cx="24" cy="65" r="6" fill="currentColor" />
      <circle cx="76" cy="65" r="6" fill="currentColor" />
    </svg>
  ),

  // One Piece - Chapéu de Palha
  StrawHat: () => (
    <svg viewBox="0 0 100 80" className={styles.icon}>
      <ellipse cx="50" cy="55" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M20 55 Q50 20 80 55" fill="none" stroke="currentColor" strokeWidth="4" />
      <line x1="15" y1="60" x2="85" y2="60" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  // Crash Bandicoot - Fruta Wumpa
  Wumpa: () => (
    <svg viewBox="0 0 100 100" className={styles.icon}>
      <ellipse cx="50" cy="55" rx="35" ry="40" fill="currentColor" />
      <path d="M50 15 Q40 5 45 -5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="40" cy="45" rx="8" ry="10" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),

  // Skyrim - Dragão
  Dragon: () => (
    <svg viewBox="0 0 100 100" className={styles.icon}>
      <path
        d="M50 10 L30 40 L10 35 L25 55 L15 80 L40 65 L50 90 L60 65 L85 80 L75 55 L90 35 L70 40 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="45" r="3" fill="currentColor" />
      <circle cx="60" cy="45" r="3" fill="currentColor" />
    </svg>
  ),

  // Digimon - Digiegg
  Digiegg: () => (
    <svg viewBox="0 0 100 120" className={styles.icon}>
      <ellipse cx="50" cy="65" rx="35" ry="45" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M30 50 Q50 30 70 50" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M35 70 Q50 55 65 70" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="45" r="8" fill="currentColor" />
    </svg>
  ),

  // Música - Nota musical
  Music: () => (
    <svg viewBox="0 0 100 100" className={styles.icon}>
      <ellipse cx="25" cy="75" rx="15" ry="12" fill="currentColor" />
      <ellipse cx="75" cy="65" rx="15" ry="12" fill="currentColor" />
      <line x1="40" y1="75" x2="40" y2="20" stroke="currentColor" strokeWidth="4" />
      <line x1="90" y1="65" x2="90" y2="10" stroke="currentColor" strokeWidth="4" />
      <path d="M40 20 Q65 10 90 10" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  ),

  // Biblioteconomia - Livro
  Book: () => (
    <svg viewBox="0 0 100 100" className={styles.icon}>
      <path d="M15 20 L15 85 Q50 75 50 75 Q50 75 85 85 L85 20 Q50 30 50 30 Q50 30 15 20" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="50" y1="30" x2="50" y2="75" stroke="currentColor" strokeWidth="2" />
      <path d="M25 35 L45 40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M25 45 L45 50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M55 40 L75 35" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M55 50 L75 45" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  ),

  // Programação - Terminal
  Code: () => (
    <svg viewBox="0 0 100 100" className={styles.icon}>
      <rect x="10" y="20" width="80" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <polyline points="25,45 40,55 25,65" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="50" y1="65" x2="75" y2="65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
};

interface GeekItemProps {
  icon: keyof typeof GeekIcons;
  label: string;
  color: string;
  delay: number;
}

const GeekItem = ({ icon, label, color, delay }: GeekItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { playSound } = useSoundEffect();
  const IconComponent = GeekIcons[icon];

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const handleHover = () => {
    playSound('hover');
  };

  const handleClick = () => {
    playSound('click');
  };

  return (
    <div
      className={`${styles.geekItem} ${isVisible ? styles.visible : ''}`}
      style={{ '--item-color': color } as React.CSSProperties}
      onMouseEnter={handleHover}
      onClick={handleClick}
    >
      <div className={styles.iconWrapper}>
        <IconComponent />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export const KonamiSecret = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { playSound } = useSoundEffect();
  const { markAsDiscovered } = useKonamiDiscovery();

  const handleKonamiActivate = () => {
    setIsRevealed(true);
    playSound('success');
    markAsDiscovered();
  };

  useKonamiCode(handleKonamiActivate);

  const handleClose = () => {
    setIsRevealed(false);
    playSound('click');
  };

  if (!isRevealed) return null;

  const geekItems: GeekItemProps[] = [
    { icon: 'Sharingan', label: 'Naruto', color: '#FF2E97', delay: 100 },
    { icon: 'StrawHat', label: 'One Piece', color: '#FFD700', delay: 200 },
    { icon: 'Wumpa', label: 'Crash', color: '#FF6B35', delay: 300 },
    { icon: 'Dragon', label: 'Skyrim', color: '#00FFFF', delay: 400 },
    { icon: 'Digiegg', label: 'Digimon', color: '#39FF14', delay: 500 },
    { icon: 'Music', label: 'Música', color: '#BF00FF', delay: 600 },
    { icon: 'Book', label: 'Estudos', color: '#5A7BB8', delay: 700 },
    { icon: 'Code', label: 'Code', color: '#00FFFF', delay: 800 },
  ];

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <GlitchText
            text="ACHIEVEMENT UNLOCKED!"
            as="h2"
            className={styles.title}
          />
          <p className={styles.subtitle}>
            Você descobriu meu universo geek secreto!
          </p>
        </div>

        <div className={styles.grid}>
          {geekItems.map(item => (
            <GeekItem key={item.icon} {...item} />
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.hint}>
            &quot;Qualquer tecnologia suficientemente avançada é indistinguível de magia.&quot;
            <br />
            <span className={styles.author}>— Arthur C. Clarke</span>
          </p>
          <button className={styles.closeButton} onClick={handleClose}>
            [ FECHAR ]
          </button>
        </div>
      </div>
    </div>
  );
};
