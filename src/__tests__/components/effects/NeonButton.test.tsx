import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NeonButton } from '@/components/effects/NeonButton';
import { AudioProvider } from '@/contexts/AudioContext';

const renderWithAudioProvider = (component: React.ReactElement) => {
  return render(<AudioProvider>{component}</AudioProvider>);
};

describe('NeonButton', () => {
  it('should render children correctly', () => {
    renderWithAudioProvider(<NeonButton>Click Me</NeonButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('should render as button when no href is provided', () => {
    renderWithAudioProvider(<NeonButton>Button</NeonButton>);
    const button = screen.getByText('Button');

    expect(button.tagName).toBe('BUTTON');
  });

  it('should render as link when href is provided', () => {
    renderWithAudioProvider(<NeonButton href="/test">Link</NeonButton>);
    const link = screen.getByText('Link');

    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should apply small size classes', () => {
    renderWithAudioProvider(<NeonButton size="sm">Small</NeonButton>);
    const button = screen.getByText('Small');

    expect(button.className).toContain('px-4');
    expect(button.className).toContain('py-2');
    expect(button.className).toContain('text-sm');
  });

  it('should apply medium size classes', () => {
    renderWithAudioProvider(<NeonButton size="md">Medium</NeonButton>);
    const button = screen.getByText('Medium');

    expect(button.className).toContain('px-6');
    expect(button.className).toContain('py-3');
    expect(button.className).toContain('text-base');
  });

  it('should apply large size classes', () => {
    renderWithAudioProvider(<NeonButton size="lg">Large</NeonButton>);
    const button = screen.getByText('Large');

    expect(button.className).toContain('px-8');
    expect(button.className).toContain('py-4');
    expect(button.className).toContain('text-lg');
  });

  it('should apply cyan color classes by default', () => {
    renderWithAudioProvider(<NeonButton>Cyan</NeonButton>);
    const button = screen.getByText('Cyan');

    expect(button.className).toContain('border-neon-cyan');
    expect(button.className).toContain('text-neon-cyan');
  });

  it('should apply pink color classes', () => {
    renderWithAudioProvider(<NeonButton color="pink">Pink</NeonButton>);
    const button = screen.getByText('Pink');

    expect(button.className).toContain('border-neon-pink');
    expect(button.className).toContain('text-neon-pink');
  });

  it('should apply green color classes', () => {
    renderWithAudioProvider(<NeonButton color="green">Green</NeonButton>);
    const button = screen.getByText('Green');

    expect(button.className).toContain('border-neon-green');
    expect(button.className).toContain('text-neon-green');
  });

  it('should apply purple color classes', () => {
    renderWithAudioProvider(<NeonButton color="purple">Purple</NeonButton>);
    const button = screen.getByText('Purple');

    expect(button.className).toContain('border-neon-purple');
    expect(button.className).toContain('text-neon-purple');
  });

  it('should apply outline variant by default', () => {
    renderWithAudioProvider(<NeonButton>Outline</NeonButton>);
    const button = screen.getByText('Outline');

    expect(button.className).toContain('bg-transparent');
  });

  it('should apply solid variant classes', () => {
    renderWithAudioProvider(<NeonButton variant="solid">Solid</NeonButton>);
    const button = screen.getByText('Solid');

    expect(button.className).toContain('bg-neon-cyan');
    expect(button.className).not.toContain('bg-transparent');
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    renderWithAudioProvider(<NeonButton onClick={handleClick}>Click</NeonButton>);

    const button = screen.getByText('Click');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should open external links in new tab', () => {
    renderWithAudioProvider(
      <NeonButton href="https://example.com" external>
        External
      </NeonButton>
    );

    const link = screen.getByText('External');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should not add target and rel for internal links', () => {
    renderWithAudioProvider(<NeonButton href="/internal">Internal</NeonButton>);

    const link = screen.getByText('Internal');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('should accept and apply custom className', () => {
    renderWithAudioProvider(
      <NeonButton className="custom-class">Custom</NeonButton>
    );

    const button = screen.getByText('Custom');
    expect(button.className).toContain('custom-class');
  });

  it('should have focus styles', () => {
    renderWithAudioProvider(<NeonButton>Focus</NeonButton>);
    const button = screen.getByText('Focus');

    expect(button.className).toContain('focus:outline-none');
    expect(button.className).toContain('focus:ring-2');
  });

  it('should have transition classes', () => {
    renderWithAudioProvider(<NeonButton>Transition</NeonButton>);
    const button = screen.getByText('Transition');

    expect(button.className).toContain('transition-all');
    expect(button.className).toContain('duration-300');
  });

  it('should have border and rounded classes', () => {
    renderWithAudioProvider(<NeonButton>Styled</NeonButton>);
    const button = screen.getByText('Styled');

    expect(button.className).toContain('border-2');
    expect(button.className).toContain('rounded-md');
  });

  it('should combine multiple props correctly', () => {
    renderWithAudioProvider(
      <NeonButton
        color="pink"
        size="lg"
        variant="solid"
        className="extra-class"
      >
        Combined
      </NeonButton>
    );

    const button = screen.getByText('Combined');

    // Size
    expect(button.className).toContain('px-8');
    expect(button.className).toContain('text-lg');
    // Color
    expect(button.className).toContain('bg-neon-pink');
    // Custom
    expect(button.className).toContain('extra-class');
  });
});
