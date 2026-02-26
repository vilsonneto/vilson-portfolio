'use client';
import { useAudio } from '@/contexts/AudioContext';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

interface AudioToggleProps {
  className?: string;
}

export const AudioToggle = ({ className = '' }: AudioToggleProps) => {
  const { isMuted, toggleMute } = useAudio();

  return (
    <button
      onClick={toggleMute}
      className={`
        relative p-2 rounded-md
        border border-neon-cyan/30
        bg-purple-900/50 backdrop-blur-sm
        text-neon-cyan
        transition-all duration-300
        hover:border-neon-cyan hover:shadow-neon-cyan-sm
        hover:bg-neon-cyan/10
        focus:outline-none focus:ring-2 focus:ring-neon-cyan/50
        ${className}
      `}
      aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
      title={isMuted ? 'Ativar som (8-bit)' : 'Desativar som'}
    >
      {isMuted ? (
        <HiVolumeOff className="w-5 h-5" />
      ) : (
        <HiVolumeUp className="w-5 h-5 animate-pulse-neon" />
      )}

      {/* Indicador visual de estado */}
      <span
        className={`
          absolute -top-1 -right-1 w-2 h-2 rounded-full
          transition-colors duration-300
          ${isMuted ? 'bg-grey-600' : 'bg-neon-green shadow-neon-green-sm'}
        `}
      />
    </button>
  );
};
