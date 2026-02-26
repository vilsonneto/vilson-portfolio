'use client';
import { useState, useEffect, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TypingText = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  cursorClassName = '',
  showCursor = true,
  onComplete,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      setIsStarted(true);
      onComplete?.();
      return;
    }

    // Delay inicial
    const delayTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [text, delay, onComplete, prefersReducedMotion]);

  useEffect(() => {
    if (!isStarted || prefersReducedMotion || isComplete) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        handleComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isStarted, text, speed, prefersReducedMotion, isComplete, handleComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && isStarted && (
        <span
          className={`inline-block w-[2px] h-[1em] bg-neon-cyan ml-1 animate-blink-cursor ${cursorClassName}`}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

// Componente para múltiplas linhas com typing sequencial
interface TypingLinesProps {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  className?: string;
  lineClassName?: string;
}

export const TypingLines = ({
  lines,
  speed = 50,
  lineDelay = 500,
  className = '',
  lineClassName = '',
}: TypingLinesProps) => {
  const [currentLine, setCurrentLine] = useState(0);

  const handleLineComplete = () => {
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, lineDelay);
    }
  };

  return (
    <div className={className}>
      {lines.slice(0, currentLine + 1).map((line, index) => (
        <div key={index} className={lineClassName}>
          {index < currentLine ? (
            <span>{line}</span>
          ) : (
            <TypingText
              text={line}
              speed={speed}
              onComplete={handleLineComplete}
              showCursor={index === currentLine}
            />
          )}
        </div>
      ))}
    </div>
  );
};
