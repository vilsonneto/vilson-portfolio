import { renderHook } from '@testing-library/react';
import { useInView } from '@/hooks/useInView';

describe('useInView', () => {
  let observeMock: jest.Mock;
  let unobserveMock: jest.Mock;
  let disconnectMock: jest.Mock;

  beforeEach(() => {
    observeMock = jest.fn();
    unobserveMock = jest.fn();
    disconnectMock = jest.fn();

    global.IntersectionObserver = jest.fn((callback) => {
      return {
        observe: observeMock,
        unobserve: unobserveMock,
        disconnect: disconnectMock,
        takeRecords: jest.fn().mockReturnValue([]),
        root: null,
        rootMargin: '',
        thresholds: [],
      };
    }) as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with isInView as false', () => {
    const { result } = renderHook(() => useInView());

    expect(result.current.isInView).toBe(false);
    expect(result.current.ref.current).toBeNull();
  });

  it('should provide a ref object', () => {
    const { result } = renderHook(() => useInView());

    expect(result.current.ref).toBeDefined();
    expect(result.current.ref).toHaveProperty('current');
  });

  it('should accept threshold option', () => {
    const { result } = renderHook(() => useInView({ threshold: 0.5 }));

    expect(result.current.isInView).toBe(false);
  });

  it('should accept rootMargin option', () => {
    const { result } = renderHook(() => useInView({ rootMargin: '10px' }));

    expect(result.current.isInView).toBe(false);
  });

  it('should accept triggerOnce option', () => {
    const { result } = renderHook(() => useInView({ triggerOnce: true }));

    expect(result.current.isInView).toBe(false);
  });

  it('should accept all options together', () => {
    const { result } = renderHook(() =>
      useInView({
        threshold: 0.5,
        rootMargin: '10px',
        triggerOnce: false,
      })
    );

    expect(result.current.ref).toBeDefined();
    expect(result.current.isInView).toBe(false);
  });

  it('should return consistent ref across renders', () => {
    const { result, rerender } = renderHook(() => useInView());

    const firstRef = result.current.ref;
    rerender();
    const secondRef = result.current.ref;

    expect(firstRef).toBe(secondRef);
  });
});
