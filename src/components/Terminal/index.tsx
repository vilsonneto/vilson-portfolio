'use client';
import { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './style.module.css';

export interface TerminalLine {
  type: 'command' | 'output' | 'comment' | 'error' | 'success';
  content: string;
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
  autoStart?: boolean;
  typingSpeed?: number;
}

export const Terminal = ({
  lines,
  title = 'vilson@portfolio:~',
  className = '',
  autoStart = true,
  typingSpeed = 30,
}: TerminalProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentLineText, setCurrentLineText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLines(lines.length);
      return;
    }

    if (!autoStart) return;
    if (visibleLines >= lines.length) return;

    const currentLine = lines[visibleLines];
    const delay = currentLine?.delay ?? 500;

    // Delay antes de começar a linha
    const timeout = setTimeout(() => {
      if (currentLine.type === 'command') {
        // Typing effect para comandos
        setIsTyping(true);
        let charIndex = 0;
        const typingInterval = setInterval(() => {
          if (charIndex <= currentLine.content.length) {
            setCurrentLineText(currentLine.content.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            setCurrentLineText('');
            setVisibleLines(prev => prev + 1);
          }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
      } else {
        // Output aparece instantaneamente
        setVisibleLines(prev => prev + 1);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [visibleLines, lines, autoStart, typingSpeed, prefersReducedMotion]);

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command':
        return styles.command;
      case 'output':
        return styles.output;
      case 'comment':
        return styles.comment;
      case 'error':
        return styles.error;
      case 'success':
        return styles.success;
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.terminal} ${className}`}>
      {/* Header do terminal */}
      <div className={styles.header}>
        <div className={styles.buttons}>
          <span className={styles.close} />
          <span className={styles.minimize} />
          <span className={styles.maximize} />
        </div>
        <span className={styles.title}>{title}</span>
      </div>

      {/* Corpo do terminal */}
      <div className={styles.body}>
        {lines.slice(0, visibleLines).map((line, index) => (
          <div key={index} className={getLineClass(line.type)}>
            {line.type === 'command' && <span className={styles.prompt}>$ </span>}
            {line.type === 'comment' && <span className={styles.commentSymbol}># </span>}
            {line.content}
          </div>
        ))}

        {/* Linha atual sendo digitada */}
        {isTyping && visibleLines < lines.length && (
          <div className={getLineClass(lines[visibleLines].type)}>
            {lines[visibleLines].type === 'command' && (
              <span className={styles.prompt}>$ </span>
            )}
            {currentLineText}
            <span className={styles.cursor}>_</span>
          </div>
        )}

        {/* Cursor piscando quando idle */}
        {!isTyping && visibleLines < lines.length && (
          <span className={styles.cursor}>_</span>
        )}
      </div>
    </div>
  );
};
