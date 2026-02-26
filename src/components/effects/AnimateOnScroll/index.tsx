'use client';
import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'fadeInScale';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const animationStyles: Record<AnimationType, { initial: string; animate: string }> = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  slideUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  slideDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  slideLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  slideRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  fadeInScale: {
    initial: 'opacity-0 scale-90',
    animate: 'opacity-100 scale-100',
  },
};

export const AnimateOnScroll = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 500,
  className = '',
  threshold = 0.1,
}: AnimateOnScrollProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold });
  const prefersReducedMotion = useReducedMotion();

  const anim = animationStyles[animation];

  // Se prefere movimento reduzido, mostra sem animação
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${isInView ? anim.animate : anim.initial}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Componente para animar múltiplos filhos com delay escalonado
interface StaggeredAnimateProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  itemClassName?: string;
}

export const StaggeredAnimate = ({
  children,
  animation = 'slideUp',
  staggerDelay = 100,
  duration = 500,
  className = '',
  itemClassName = '',
}: StaggeredAnimateProps) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimateOnScroll
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          className={itemClassName}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  );
};
