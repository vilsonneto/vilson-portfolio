'use client';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MatrixRainProps {
  opacity?: number;
  speed?: number;
  color?: string;
  fontSize?: number;
}

export const MatrixRain = ({
  opacity = 0.05,
  speed = 1,
  color = '#39FF14',
  fontSize = 14,
}: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Caracteres (katakana + números + símbolos)
    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\';
    const charArray = chars.split('');

    // Colunas
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Inicializar drops em posições aleatórias
    for (let i = 0; i < drops.length; i++) {
      drops[i] = Math.random() * -100;
    }

    // Animação
    let animationId: number;
    const draw = () => {
      // Fade effect - cria trail
      ctx.fillStyle = `rgba(17, 4, 39, 0.05)`; // purple-900 com alpha
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenhar caracteres
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px "Source Code Pro", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Caractere aleatório
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradiente de brilho (primeiro caractere mais brilhante)
        const brightness = Math.random() * 0.5 + 0.5;
        ctx.globalAlpha = brightness;
        ctx.fillText(char, x, y);

        // Reset quando sai da tela
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += speed;
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    // Iniciar animação com delay
    const startTimeout = setTimeout(() => {
      draw();
    }, 100);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion, speed, color, fontSize]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
