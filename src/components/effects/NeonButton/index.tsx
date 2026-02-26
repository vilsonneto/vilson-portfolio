'use client';
import { ReactNode } from 'react';
import { useSoundEffect } from '@/hooks/useSound';

interface NeonButtonProps {
  children: ReactNode;
  color?: 'pink' | 'cyan' | 'green' | 'purple' | 'blue';
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
}

export const NeonButton = ({
  children,
  color = 'cyan',
  onClick,
  href,
  className = '',
  variant = 'outline',
  size = 'md',
  external = false,
}: NeonButtonProps) => {
  const { playSound } = useSoundEffect();

  const colorClasses = {
    pink: {
      outline: 'border-neon-pink text-neon-pink hover:shadow-neon-pink hover:bg-neon-pink/10',
      solid: 'bg-neon-pink text-purple-900 hover:shadow-neon-pink hover:bg-neon-pink/90',
    },
    cyan: {
      outline: 'border-neon-cyan text-neon-cyan hover:shadow-neon-cyan hover:bg-neon-cyan/10',
      solid: 'bg-neon-cyan text-purple-900 hover:shadow-neon-cyan hover:bg-neon-cyan/90',
    },
    green: {
      outline: 'border-neon-green text-neon-green hover:shadow-neon-green hover:bg-neon-green/10',
      solid: 'bg-neon-green text-purple-900 hover:shadow-neon-green hover:bg-neon-green/90',
    },
    purple: {
      outline: 'border-neon-purple text-neon-purple hover:shadow-neon-purple hover:bg-neon-purple/10',
      solid: 'bg-neon-purple text-white hover:shadow-neon-purple hover:bg-neon-purple/90',
    },
    blue: {
      outline: 'border-blueBaby-300 text-blueBaby-300 hover:shadow-neon-blue hover:bg-blueBaby-300/10',
      solid: 'bg-blueBaby-300 text-white hover:shadow-neon-blue hover:bg-blueBaby-300/90',
    },
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const handleMouseEnter = () => playSound('hover');
  const handleClick = () => {
    playSound('click');
    onClick?.();
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    border-2 rounded-md font-medium
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900
    ${variant === 'outline' ? 'bg-transparent' : ''}
    ${colorClasses[color][variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
