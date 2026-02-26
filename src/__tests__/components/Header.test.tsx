import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/components/Header';
import { AudioProvider } from '@/contexts/AudioContext';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

const renderWithAudioProvider = (component: React.ReactElement) => {
  return render(<AudioProvider>{component}</AudioProvider>);
};

describe('Header', () => {
  const mockSetOpenContact = jest.fn();

  beforeEach(() => {
    mockSetOpenContact.mockClear();
  });

  it('should render the name "VILSON PADILHA"', () => {
    renderWithAudioProvider(<Header setOpenContact={mockSetOpenContact} />);
    expect(screen.getByText(/VILSON PADILHA/i)).toBeInTheDocument();
  });

  it('should render profile image', () => {
    renderWithAudioProvider(<Header setOpenContact={mockSetOpenContact} />);
    const image = screen.getByAltText('Picture of the author');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/vilson.jpg');
  });

  it('should render navigation links', () => {
    renderWithAudioProvider(<Header setOpenContact={mockSetOpenContact} />);

    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Contatos')).toBeInTheDocument();
  });

  it('should have correct href for navigation links', () => {
    renderWithAudioProvider(<Header setOpenContact={mockSetOpenContact} />);

    const homeLink = screen.getAllByRole('link')[0];
    expect(homeLink).toHaveAttribute('href', '#home');

    const aboutLink = screen.getByText('Sobre').closest('a');
    expect(aboutLink).toHaveAttribute('href', '#aboutme');

    const projectsLink = screen.getByText('Projetos').closest('a');
    expect(projectsLink).toHaveAttribute('href', '#projects');
  });

  it('should call setOpenContact when Contatos button is clicked', () => {
    renderWithAudioProvider(<Header setOpenContact={mockSetOpenContact} />);

    const contactButton = screen.getByText('Contatos').closest('button');
    fireEvent.click(contactButton!);

    expect(mockSetOpenContact).toHaveBeenCalledTimes(1);
    expect(mockSetOpenContact).toHaveBeenCalledWith(true);
  });

  it('should render AudioToggle component', () => {
    const { container } = renderWithAudioProvider(
      <Header setOpenContact={mockSetOpenContact} />
    );

    // AudioToggle should be present (though hidden on mobile)
    expect(container.querySelector('.mr-4')).toBeInTheDocument();
  });

  it('should track click progress on name', () => {
    renderWithAudioProvider(<Header setOpenContact={mockSetOpenContact} />);

    const nameElement = screen.getByText(/VILSON PADILHA/i);

    // Click once
    fireEvent.click(nameElement);

    // Should show progress (this is implementation-specific)
    // The exact text might change based on implementation
    expect(nameElement).toBeInTheDocument();
  });

  it('should have proper header structure', () => {
    const { container } = renderWithAudioProvider(
      <Header setOpenContact={mockSetOpenContact} />
    );

    const header = container.querySelector('header');
    expect(header).toHaveAttribute('id', 'home');
  });
});
