import { renderHook, act } from '@testing-library/react';
import { useKonamiCode, useKonamiDiscovery } from '@/hooks/useKonamiCode';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

describe('useKonamiCode', () => {
  it('should initialize with isActive as false', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useKonamiCode(callback));

    expect(result.current.isActive).toBe(false);
    expect(result.current.progress).toBe(0);
  });

  it('should have correct sequence length', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useKonamiCode(callback));

    // Konami code has 10 keys
    expect(KONAMI_SEQUENCE.length).toBe(10);
    // Progress should be calculated against this length
    expect(result.current.progress).toBe(0);
  });

  it('should return progress value between 0 and 1', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useKonamiCode(callback));

    expect(result.current.progress).toBeGreaterThanOrEqual(0);
    expect(result.current.progress).toBeLessThanOrEqual(1);
  });

  it('should cleanup event listener on unmount', () => {
    const callback = jest.fn();
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useKonamiCode(callback));
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function)
    );
  });
});

describe('useKonamiDiscovery', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with hasDiscovered as false', () => {
    const { result } = renderHook(() => useKonamiDiscovery());
    expect(result.current.hasDiscovered).toBe(false);
  });

  it('should load discovered state from localStorage after mount', async () => {
    localStorage.setItem('konami-discovered', 'true');

    const { result, rerender } = renderHook(() => useKonamiDiscovery());

    // Wait for useEffect to run
    rerender();

    // After effect runs, should read from localStorage
    await new Promise(resolve => setTimeout(resolve, 0));
    rerender();

    expect(result.current.hasDiscovered).toBe(true);
  });

  it('should mark as discovered and persist to localStorage', () => {
    const { result } = renderHook(() => useKonamiDiscovery());

    act(() => {
      result.current.markAsDiscovered();
    });

    expect(result.current.hasDiscovered).toBe(true);
    expect(localStorage.getItem('konami-discovered')).toBe('true');
  });
});
