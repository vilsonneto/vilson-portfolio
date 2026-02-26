'use client';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      role="progressbar"
      aria-label="Progresso de leitura da página"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 z-[100] h-[3px] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #00FFFF 0%, #BF00FF 60%, #FF2E97 100%)',
        boxShadow: '0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.4)',
        transition: 'width 50ms linear',
      }}
    />
  );
};
