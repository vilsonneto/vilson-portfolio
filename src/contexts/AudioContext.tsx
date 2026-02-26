'use client';
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider = ({ children }: AudioProviderProps) => {
  const [isMuted, setIsMuted] = useState(true); // Começa mutado por acessibilidade
  const [volume, setVolumeState] = useState(0.5);
  const [isHydrated, setIsHydrated] = useState(false);

  // Carrega preferência do localStorage após hidratação
  useEffect(() => {
    setIsHydrated(true);
    const storedMuted = localStorage.getItem('audio-muted');
    const storedVolume = localStorage.getItem('audio-volume');

    if (storedMuted !== null) {
      setIsMuted(storedMuted === 'true');
    }
    if (storedVolume !== null) {
      setVolumeState(parseFloat(storedVolume));
    }
  }, []);

  // Persiste preferências no localStorage
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('audio-muted', String(isMuted));
    }
  }, [isMuted, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('audio-volume', String(volume));
    }
  }, [volume, isHydrated]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  }, []);

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, volume, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};
