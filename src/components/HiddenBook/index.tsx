'use client';
import { useState, useEffect } from 'react';
import { useSoundEffect } from '@/hooks/useSound';
import styles from './style.module.css';

const quotes = [
  { text: 'O verdadeiro programador é também um bibliotecário do código.', author: 'Vilson Padilha' },
  { text: 'Ler é o primeiro passo para debugar a realidade.', author: 'Dev Anônimo' },
  { text: 'Cada commit conta uma história.', author: 'Git Philosophy' },
  { text: 'Documentação é amor ao próximo desenvolvedor.', author: 'Clean Code' },
  { text: 'O conhecimento é o único tesouro que cresce quando compartilhado.', author: 'Sabedoria Geek' },
];

export const HiddenBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDiscovered, setIsDiscovered] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const { playSound } = useSoundEffect();

  useEffect(() => {
    const discovered = localStorage.getItem('hidden-book-discovered');
    if (discovered === 'true') {
      setIsDiscovered(true);
    }
  }, []);

  const handleClick = () => {
    if (!isDiscovered) {
      setIsDiscovered(true);
      localStorage.setItem('hidden-book-discovered', 'true');
      playSound('success');
    } else {
      playSound('click');
    }

    setIsOpen(true);
    setCurrentQuote(Math.floor(Math.random() * quotes.length));
  };

  const handleClose = () => {
    setIsOpen(false);
    playSound('click');
  };

  return (
    <>
      {/* Livro escondido - aparece no canto inferior direito */}
      <button
        className={`${styles.hiddenBook} ${isDiscovered ? styles.discovered : ''}`}
        onClick={handleClick}
        aria-label="Easter egg: livro escondido"
        title={isDiscovered ? 'Clique para uma citação' : '???'}
      >
        <svg viewBox="0 0 24 24" className={styles.bookIcon}>
          <path
            d="M4 4h6v16H4V4zm10 0h6v16h-6V4zM10 4h4v16h-4V4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 8h2M7 12h2M14 8h2M14 12h2"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
        {!isDiscovered && <span className={styles.sparkle}>✨</span>}
      </button>

      {/* Modal com citação */}
      {isOpen && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.bookOpenIcon}>📚</div>
            <blockquote className={styles.quote}>
              &ldquo;{quotes[currentQuote].text}&rdquo;
            </blockquote>
            <cite className={styles.author}>— {quotes[currentQuote].author}</cite>
            <button className={styles.closeBtn} onClick={handleClose}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
