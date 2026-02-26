import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './index';
import { projectData } from '@/schemas/project.schema';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockProject: projectData = {
  id: 1,
  title: 'Portfolio Cyberpunk',
  description: 'Um portfolio moderno com tema cyberpunk, animações e efeitos visuais.',
  resume: 'Portfolio interativo com tema cyberpunk, efeitos visuais e testes automatizados.',
  image: '/projects/portfolio.png',
  github: 'https://github.com/vilsonneto/vilson-portfolio',
  deploy: 'https://vilson-portfolio.vercel.app',
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Jest'],
  context: 'Projeto pessoal para demonstrar habilidades técnicas.',
  role: ['Desenvolvimento frontend', 'Arquitetura de componentes'],
  technologies: [{ name: 'Next.js', reason: 'Framework React com SSG/SSR' }],
  results: ['Portfolio publicado em produção com CI/CD'],
};

export const Default: Story = {
  args: {
    project: mockProject,
  },
};

export const LongDescription: Story = {
  args: {
    project: {
      ...mockProject,
      description:
        'Um portfolio profissional desenvolvido com as tecnologias mais modernas do mercado. Apresenta animações, efeitos visuais, testes automatizados e muito mais.',
    },
  },
};

export const ManyTechnologies: Story = {
  args: {
    project: {
      ...mockProject,
      stack: [
        'Next.js',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'Jest',
        'Playwright',
        'Storybook',
        'GitHub Actions',
      ],
    },
  },
};

export const MinimalTech: Story = {
  args: {
    project: {
      ...mockProject,
      title: 'Simple App',
      description: 'Aplicação simples e objetiva',
      stack: ['React', 'CSS'],
    },
  },
};
