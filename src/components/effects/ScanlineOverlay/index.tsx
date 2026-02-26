'use client';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScanlineOverlayProps {
  opacity?: number;
  showNoise?: boolean;
}

export const ScanlineOverlay = ({
  opacity = 0.03,
  showNoise = true,
}: ScanlineOverlayProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <>
      {/* Scanlines horizontais */}
      <div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          opacity,
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Noise texture sutil */}
      {showNoise && (
        <div
          className="pointer-events-none fixed inset-0 z-[9997] mix-blend-overlay"
          style={{
            opacity: opacity * 0.7,
            backgroundImage: 'url(/noise.png)',
            backgroundSize: '100px',
          }}
          aria-hidden="true"
        />
      )}

      {/* Vignette effect nas bordas */}
      <div
        className="pointer-events-none fixed inset-0 z-[9996]"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 60%,
            rgba(17, 4, 39, 0.4) 100%
          )`,
        }}
        aria-hidden="true"
      />
    </>
  );
};
