import { render, screen } from '@testing-library/react';
import { GlitchText } from '@/components/effects/GlitchText';

// Mock useReducedMotion hook
jest.mock('@/hooks/useReducedMotion');
import { useReducedMotion } from '@/hooks/useReducedMotion';
const mockedUseReducedMotion = useReducedMotion as jest.MockedFunction<
  typeof useReducedMotion
>;

describe('GlitchText', () => {
  beforeEach(() => {
    mockedUseReducedMotion.mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render text correctly', () => {
    render(<GlitchText text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should apply glitch class when motion is not reduced', () => {
    const { container } = render(<GlitchText text="Glitch Effect" />);
    const element = screen.getByText('Glitch Effect');

    expect(element.className).toContain('glitch');
  });

  it('should remove glitch effect when motion is reduced', () => {
    mockedUseReducedMotion.mockReturnValue(true);

    const { container } = render(<GlitchText text="No Glitch" />);
    const element = screen.getByText('No Glitch');

    expect(element.className).not.toContain('glitch');
  });

  it('should render as span by default', () => {
    render(<GlitchText text="Default Tag" />);
    const element = screen.getByText('Default Tag');

    expect(element.tagName).toBe('SPAN');
  });

  it('should render as h1 when specified', () => {
    render(<GlitchText text="Heading 1" as="h1" />);
    const element = screen.getByText('Heading 1');

    expect(element.tagName).toBe('H1');
  });

  it('should render as h2 when specified', () => {
    render(<GlitchText text="Heading 2" as="h2" />);
    const element = screen.getByText('Heading 2');

    expect(element.tagName).toBe('H2');
  });

  it('should render as paragraph when specified', () => {
    render(<GlitchText text="Paragraph" as="p" />);
    const element = screen.getByText('Paragraph');

    expect(element.tagName).toBe('P');
  });

  it('should apply cyan color class', () => {
    render(<GlitchText text="Cyan Text" color="cyan" />);
    const element = screen.getByText('Cyan Text');

    expect(element.className).toContain('text-neon-cyan');
  });

  it('should apply pink color class', () => {
    render(<GlitchText text="Pink Text" color="pink" />);
    const element = screen.getByText('Pink Text');

    expect(element.className).toContain('text-neon-pink');
  });

  it('should apply green color class', () => {
    render(<GlitchText text="Green Text" color="green" />);
    const element = screen.getByText('Green Text');

    expect(element.className).toContain('text-neon-green');
  });

  it('should apply purple color class', () => {
    render(<GlitchText text="Purple Text" color="purple" />);
    const element = screen.getByText('Purple Text');

    expect(element.className).toContain('text-neon-purple');
  });

  it('should add data-text attribute for CSS effect', () => {
    render(<GlitchText text="Data Attr" />);
    const element = screen.getByText('Data Attr');

    expect(element).toHaveAttribute('data-text', 'Data Attr');
  });

  it('should not add data-text when motion is reduced', () => {
    mockedUseReducedMotion.mockReturnValue(true);

    render(<GlitchText text="No Data Attr" />);
    const element = screen.getByText('No Data Attr');

    expect(element).not.toHaveAttribute('data-text');
  });

  it('should accept and apply custom className', () => {
    render(<GlitchText text="Custom Class" className="my-custom-class" />);
    const element = screen.getByText('Custom Class');

    expect(element.className).toContain('my-custom-class');
  });

  it('should combine color and custom className', () => {
    render(
      <GlitchText
        text="Combined Classes"
        color="cyan"
        className="font-bold"
      />
    );
    const element = screen.getByText('Combined Classes');

    expect(element.className).toContain('text-neon-cyan');
    expect(element.className).toContain('font-bold');
  });

  it('should render without color class when color is default', () => {
    render(<GlitchText text="Default Color" color="default" />);
    const element = screen.getByText('Default Color');

    expect(element.className).not.toContain('text-neon-');
  });
});
