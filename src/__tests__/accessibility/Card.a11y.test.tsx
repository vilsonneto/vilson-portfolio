/**
 * Testes de Acessibilidade para Card de Projeto
 * Utiliza jest-axe para validar padrões WCAG
 */

import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Card from '@/components/Card';
import { projectData } from '@/schemas/project.schema';

const mockProject: projectData = {
  id: 1,
  title: 'Test Project',
  description: 'A test project for accessibility',
  resume: 'Test project resume',
  image: '/test-image.png',
  github: 'https://github.com/test/project',
  deploy: 'https://test-project.com',
  stack: ['React', 'TypeScript', 'Jest'],
  context: 'Test context',
  role: ['Developer'],
  technologies: [{ name: 'React', reason: 'UI framework' }],
  results: ['Delivered on time'],
};

describe('Card - Accessibility Tests', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Card project={mockProject} />);

    // Executa análise de acessibilidade
    const results = await axe(container);

    // Verifica se não há violações
    expect(results).toHaveNoViolations();
  });

  it('should have accessible image with alt text', () => {
    const { getByAltText } = render(<Card project={mockProject} />);

    // Verifica se a imagem tem texto alternativo
    const image = getByAltText(`Project ${mockProject.title}`);
    expect(image).toBeInTheDocument();
  });

  it('should have accessible links', () => {
    const { getAllByRole } = render(<Card project={mockProject} />);

    // Verifica se os links são acessíveis
    const links = getAllByRole('link');

    expect(links.length).toBeGreaterThan(0);

    links.forEach(link => {
      // Links devem ter href válido
      expect(link.getAttribute('href')).toBeTruthy();
    });
  });

  it('should have proper heading hierarchy', () => {
    const { getByRole } = render(<Card project={mockProject} />);

    // Verifica se existe um heading
    const heading = getByRole('heading');
    expect(heading).toHaveTextContent(mockProject.title);
  });
});
