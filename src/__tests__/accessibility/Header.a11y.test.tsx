/**
 * Testes de Acessibilidade para o Header
 * Utiliza jest-axe para validar padrões WCAG
 */

import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Header } from '@/components/Header';

// Mock do hook useSound
jest.mock('@/hooks/useSound', () => ({
  useSoundEffect: () => ({
    playSound: jest.fn(),
  }),
}));

// Mock do hook useUltraCyberMode
jest.mock('@/hooks/useUltraCyberMode', () => ({
  useUltraCyberMode: () => ({
    handleClick: jest.fn(),
    isActive: false,
    progress: 0,
  }),
}));

describe('Header - Accessibility Tests', () => {
  const mockSetOpenContact = jest.fn();

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header setOpenContact={mockSetOpenContact} />);

    // Executa análise de acessibilidade
    const results = await axe(container);

    // Verifica se não há violações
    expect(results).toHaveNoViolations();
  });

  it('should have proper navigation structure', () => {
    const { container } = render(<Header setOpenContact={mockSetOpenContact} />);

    // Verifica se existe um elemento <nav>
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('should have accessible links', () => {
    const { getAllByRole } = render(<Header setOpenContact={mockSetOpenContact} />);

    // Verifica se os links têm roles adequados
    const links = getAllByRole('link');

    links.forEach(link => {
      // Links devem ter texto ou aria-label
      expect(
        link.textContent || link.getAttribute('aria-label')
      ).toBeTruthy();
    });
  });
});
