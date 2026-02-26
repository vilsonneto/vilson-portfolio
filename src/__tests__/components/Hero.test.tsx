import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { AudioProvider } from '@/contexts/AudioContext';

// Mock next/dynamic to avoid SSR issues in tests
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (fn: () => Promise<any>) => {
    const Component = () => <div data-testid="lottie-player">Lottie Animation</div>;
    Component.displayName = 'DynamicLottiePlayer';
    return Component;
  },
}));

const renderWithAudioProvider = (component: React.ReactElement) => {
  return render(<AudioProvider>{component}</AudioProvider>);
};

describe('Hero', () => {
  it('should render the main heading', () => {
    renderWithAudioProvider(<Hero />);
    expect(screen.getByText(/VILSON PADILHA/i)).toBeInTheDocument();
  });

  it('should render terminal-style prompt for typing text', () => {
    renderWithAudioProvider(<Hero />);
    // TypingText renders character by character, so we just check the prompt exists
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('should render description paragraph', () => {
    renderWithAudioProvider(<Hero />);
    expect(
      screen.getByText(/Especializado em/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/aplicações B2B de alta complexidade/i)
    ).toBeInTheDocument();
  });

  it('should highlight key information', () => {
    renderWithAudioProvider(<Hero />);
    // O número e o label ficam em spans separados no AnimatedCounter
    expect(screen.getByText(/commits entregues/i)).toBeInTheDocument();
    expect(screen.getByText(/sistemas em produção/i)).toBeInTheDocument();
  });

  it('should render "Ver projetos" CTA button', () => {
    renderWithAudioProvider(<Hero />);
    const button = screen.getByText(/Ver projetos/i);
    expect(button).toBeInTheDocument();
  });

  it('should have link to projects section', () => {
    renderWithAudioProvider(<Hero />);
    const link = screen.getByText(/Ver projetos/i).closest('a');
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('should render Lottie animation', () => {
    renderWithAudioProvider(<Hero />);
    expect(screen.getByTestId('lottie-player')).toBeInTheDocument();
  });

  it('should display terminal-style prompt', () => {
    renderWithAudioProvider(<Hero />);
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('should mention key technologies and skills', () => {
    renderWithAudioProvider(<Hero />);
    expect(
      screen.getByText(/WebSocket/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/gerenciamento de estado em tempo real/i)
    ).toBeInTheDocument();
  });

  it('should mention career progression', () => {
    renderWithAudioProvider(<Hero />);
    expect(screen.getByText(/Junior → Pleno/i)).toBeInTheDocument();
  });
});
