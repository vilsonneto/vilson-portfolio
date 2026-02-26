'use client';
import { useCallback, useRef, useEffect } from 'react';
import { useAudio } from '@/contexts/AudioContext';

type SoundName =
  | 'hover'
  | 'click'
  | 'success'
  | 'glitch'
  | 'konami'
  | 'naruto'
  | 'crash'
  | 'skyrim'
  | 'digimon'
  | 'onepiece'
  | 'book';

const SOUND_PATHS: Record<SoundName, string> = {
  hover: '/sounds/hover.mp3',
  click: '/sounds/click.mp3',
  success: '/sounds/konami-success.mp3',
  glitch: '/sounds/glitch-short.mp3',
  konami: '/sounds/konami-success.mp3',
  naruto: '/sounds/naruto-hover.mp3',
  crash: '/sounds/crash-wumpa.mp3',
  skyrim: '/sounds/skyrim-rune.mp3',
  digimon: '/sounds/digimon-evolve.mp3',
  onepiece: '/sounds/onepiece-treasure.mp3',
  book: '/sounds/book-open.mp3',
};

export const useSoundEffect = () => {
  const { isMuted, volume } = useAudio();
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  // Preload sounds
  useEffect(() => {
    if (typeof window === 'undefined') return;

    Object.entries(SOUND_PATHS).forEach(([, path]) => {
      if (!audioCache.current.has(path)) {
        const audio = new Audio(path);
        audio.preload = 'auto';
        audio.volume = volume;
        audioCache.current.set(path, audio);
      }
    });
  }, [volume]);

  // Update volume on all cached audio
  useEffect(() => {
    audioCache.current.forEach(audio => {
      audio.volume = volume;
    });
  }, [volume]);

  const playSound = useCallback(
    (soundName: SoundName) => {
      if (isMuted || typeof window === 'undefined') return;

      const path = SOUND_PATHS[soundName];
      if (!path) return;

      let audio = audioCache.current.get(path);

      if (!audio) {
        audio = new Audio(path);
        audio.volume = volume;
        audioCache.current.set(path, audio);
      }

      // Clone and play to allow overlapping sounds
      const clone = audio.cloneNode() as HTMLAudioElement;
      clone.volume = volume;
      clone.play().catch(() => {
        // Ignore autoplay errors
      });
    },
    [isMuted, volume]
  );

  return { playSound };
};

// Hook simples para um som específico
export const useHoverSound = () => {
  const { playSound } = useSoundEffect();
  return useCallback(() => playSound('hover'), [playSound]);
};

export const useClickSound = () => {
  const { playSound } = useSoundEffect();
  return useCallback(() => playSound('click'), [playSound]);
};
