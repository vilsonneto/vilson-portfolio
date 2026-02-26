import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

// Adiciona matcher de acessibilidade
expect.extend(toHaveNoViolations);

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock AudioContext
global.AudioContext = jest.fn().mockImplementation(() => ({
  createGain: jest.fn().mockReturnValue({
    connect: jest.fn(),
    gain: { value: 1 },
  }),
  createBufferSource: jest.fn().mockReturnValue({
    connect: jest.fn(),
    start: jest.fn(),
    buffer: null,
  }),
  decodeAudioData: jest.fn(),
  destination: {},
})) as any;

// Mock crypto.randomUUID
Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => Math.random().toString(36).substring(2, 15),
  },
});
