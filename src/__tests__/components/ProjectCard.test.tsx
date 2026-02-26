import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@/components/ProjectCard';
import { projectData } from '@/schemas/project.schema';
import { AudioProvider } from '@/contexts/AudioContext';

const mockProject: projectData = {
  id: 1,
  title: 'VersoChat',
  description: 'Real-time chat application with WebSocket',
  resume: 'A comprehensive chat solution',
  stack: ['Next.js', 'TypeScript', 'Redux', 'WebSocket', 'Pusher'],
  image: '/images/versochat.png',
  deploy: '',
  github: '',
  context: 'Built for enterprise communication',
  role: ['Frontend Developer'],
  technologies: [
    { name: 'Redux Toolkit', reason: 'State management' },
  ],
  results: ['95% test coverage'],
};

const mockOpenSourceProject: projectData = {
  ...mockProject,
  title: 'DevStack',
  deploy: 'https://devstack.com',
  github: 'https://github.com/user/devstack',
};

const renderWithAudioProvider = (component: React.ReactElement) => {
  return render(<AudioProvider>{component}</AudioProvider>);
};

describe('ProjectCard', () => {
  it('should render project title', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('VersoChat')).toBeInTheDocument();
  });

  it('should render project description', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);
    expect(
      screen.getByText('Real-time chat application with WebSocket')
    ).toBeInTheDocument();
  });

  it('should display "Corporativo" badge for corporate projects', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('Corporativo')).toBeInTheDocument();
  });

  it('should display "Open Source" badge for open source projects', () => {
    renderWithAudioProvider(
      <ProjectCard project={mockOpenSourceProject} index={0} />
    );
    expect(screen.getByText('Open Source')).toBeInTheDocument();
  });

  it('should render stack technologies', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);

    // Should show first 4 technologies
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('WebSocket')).toBeInTheDocument();
  });

  it('should show "+N" indicator when stack has more than 4 items', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('+1')).toBeInTheDocument();
  });

  it('should not show "+N" indicator when stack has 4 or fewer items', () => {
    const projectWithFewTechs = {
      ...mockProject,
      stack: ['React', 'TypeScript'],
    };

    renderWithAudioProvider(
      <ProjectCard project={projectWithFewTechs} index={0} />
    );
    expect(screen.queryByText(/^\+\d+$/)).not.toBeInTheDocument();
  });

  it('should render CTA text', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('Ver case completo')).toBeInTheDocument();
  });

  it('should generate correct link to project page', () => {
    renderWithAudioProvider(<ProjectCard project={mockProject} index={0} />);

    const link = screen
      .getByText('VersoChat')
      .closest('a') as HTMLAnchorElement;
    expect(link.href).toContain('/project/versochat');
  });

  it('should apply different color schemes based on index', () => {
    const { container: container1 } = renderWithAudioProvider(
      <ProjectCard project={mockProject} index={0} />
    );
    const { container: container2 } = renderWithAudioProvider(
      <ProjectCard project={mockProject} index={1} />
    );

    // Index 0 should use cyan, index 1 should use pink
    expect(container1.innerHTML).toContain('neon-cyan');
    expect(container2.innerHTML).toContain('neon-pink');
  });

  it('should render lock icon for corporate projects', () => {
    const { container } = renderWithAudioProvider(
      <ProjectCard project={mockProject} index={0} />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render globe icon for open source projects', () => {
    const { container } = renderWithAudioProvider(
      <ProjectCard project={mockOpenSourceProject} index={0} />
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
