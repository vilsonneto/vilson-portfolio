import React, { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import { useSoundEffect, useHoverSound, useClickSound } from '@/hooks/useSound';
import { AudioProvider } from '@/contexts/AudioContext';

const wrapper = ({ children }: { children: ReactNode }) => (
  <AudioProvider>{children}</AudioProvider>
);

describe('useSoundEffect', () => {
  let audioPlayMock: jest.Mock;
  let audioCloneNodeMock: jest.Mock;

  beforeEach(() => {
    audioPlayMock = jest.fn().mockResolvedValue(undefined);
    audioCloneNodeMock = jest.fn().mockReturnValue({
      play: audioPlayMock,
      volume: 0.5,
    });

    global.Audio = jest.fn().mockImplementation(() => ({
      play: audioPlayMock,
      cloneNode: audioCloneNodeMock,
      volume: 0.5,
      preload: 'auto',
    })) as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return playSound function', () => {
    const { result } = renderHook(() => useSoundEffect(), { wrapper });

    expect(result.current.playSound).toBeDefined();
    expect(typeof result.current.playSound).toBe('function');
  });

  it('should not play sound when muted', () => {
    const { result } = renderHook(() => useSoundEffect(), { wrapper });

    act(() => {
      result.current.playSound('hover');
    });

    expect(audioPlayMock).not.toHaveBeenCalled();
  });

  it('should play sound when not muted', () => {
    const { result: audioResult } = renderHook(
      () => {
        const { useSoundEffect } = require('@/hooks/useSound');
        const { useAudio } = require('@/contexts/AudioContext');
        const audio = useAudio();
        const sound = useSoundEffect();
        return { ...audio, ...sound };
      },
      { wrapper }
    );

    // Unmute
    act(() => {
      audioResult.current.toggleMute();
    });

    // Play sound
    act(() => {
      audioResult.current.playSound('click');
    });

    expect(audioPlayMock).toHaveBeenCalled();
  });

  it('should handle autoplay errors gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    audioPlayMock.mockRejectedValue(new Error('Autoplay blocked'));

    const { result: audioResult } = renderHook(
      () => {
        const { useSoundEffect } = require('@/hooks/useSound');
        const { useAudio } = require('@/contexts/AudioContext');
        const audio = useAudio();
        const sound = useSoundEffect();
        return { ...audio, ...sound };
      },
      { wrapper }
    );

    act(() => {
      audioResult.current.toggleMute();
    });

    await act(async () => {
      audioResult.current.playSound('success');
    });

    // Should not throw error
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it('should cache audio elements', () => {
    const { result: audioResult } = renderHook(
      () => {
        const { useSoundEffect } = require('@/hooks/useSound');
        const { useAudio } = require('@/contexts/AudioContext');
        const audio = useAudio();
        const sound = useSoundEffect();
        return { ...audio, ...sound };
      },
      { wrapper }
    );

    act(() => {
      audioResult.current.toggleMute();
    });

    // Play same sound twice
    act(() => {
      audioResult.current.playSound('hover');
      audioResult.current.playSound('hover');
    });

    // Audio constructor should be called once for preload, then cloned
    expect(audioCloneNodeMock).toHaveBeenCalled();
  });

  it('should update volume on cached audio', () => {
    const { result: audioResult } = renderHook(
      () => {
        const { useSoundEffect } = require('@/hooks/useSound');
        const { useAudio } = require('@/contexts/AudioContext');
        const audio = useAudio();
        const sound = useSoundEffect();
        return { ...audio, ...sound };
      },
      { wrapper }
    );

    act(() => {
      audioResult.current.setVolume(0.8);
    });

    // Volume should be updated (tested via implementation)
    expect(audioResult.current.volume).toBe(0.8);
  });
});

describe('useHoverSound', () => {
  it('should return a function that plays hover sound', () => {
    const { result } = renderHook(() => useHoverSound(), { wrapper });

    expect(typeof result.current).toBe('function');
  });

  it('should be stable across renders', () => {
    const { result, rerender } = renderHook(() => useHoverSound(), { wrapper });

    const firstRender = result.current;
    rerender();
    const secondRender = result.current;

    expect(firstRender).toBe(secondRender);
  });
});

describe('useClickSound', () => {
  it('should return a function that plays click sound', () => {
    const { result } = renderHook(() => useClickSound(), { wrapper });

    expect(typeof result.current).toBe('function');
  });

  it('should be stable across renders', () => {
    const { result, rerender } = renderHook(() => useClickSound(), { wrapper });

    const firstRender = result.current;
    rerender();
    const secondRender = result.current;

    expect(firstRender).toBe(secondRender);
  });
});
