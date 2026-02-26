'use client';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './style.module.css';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  color?: 'cyan' | 'pink' | 'green' | 'purple' | 'default';
}

export const GlitchText = ({
  text,
  className = '',
  as: Tag = 'span',
  color = 'default',
}: GlitchTextProps) => {
  const prefersReducedMotion = useReducedMotion();

  const colorClasses = {
    default: '',
    cyan: 'text-neon-cyan',
    pink: 'text-neon-pink',
    green: 'text-neon-green',
    purple: 'text-neon-purple',
  };

  if (prefersReducedMotion) {
    return <Tag className={`${colorClasses[color]} ${className}`}>{text}</Tag>;
  }

  return (
    <Tag
      className={`${styles.glitch} ${colorClasses[color]} ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  );
};
