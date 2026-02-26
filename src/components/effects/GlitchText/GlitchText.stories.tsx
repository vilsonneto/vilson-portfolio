import type { Meta, StoryObj } from '@storybook/react';
import { GlitchText } from './index';

const meta = {
  title: 'Effects/GlitchText',
  component: GlitchText,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#110427' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display with glitch effect',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'span', 'p'],
      description: 'HTML element to render',
    },
    color: {
      control: 'select',
      options: ['cyan', 'pink', 'green', 'purple', 'default'],
      description: 'Neon color theme',
    },
  },
} satisfies Meta<typeof GlitchText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'GLITCH TEXT',
    as: 'h2',
    color: 'default',
  },
};

// Cores
export const Cyan: Story = {
  args: {
    text: 'CYAN GLITCH',
    as: 'h2',
    color: 'cyan',
  },
};

export const Pink: Story = {
  args: {
    text: 'PINK GLITCH',
    as: 'h2',
    color: 'pink',
  },
};

export const Green: Story = {
  args: {
    text: 'GREEN GLITCH',
    as: 'h2',
    color: 'green',
  },
};

export const Purple: Story = {
  args: {
    text: 'PURPLE GLITCH',
    as: 'h2',
    color: 'purple',
  },
};

// Diferentes tags HTML
export const AsH1: Story = {
  args: {
    text: 'MAIN TITLE',
    as: 'h1',
    color: 'cyan',
    className: 'text-6xl font-bold',
  },
};

export const AsH2: Story = {
  args: {
    text: 'SUBTITLE',
    as: 'h2',
    color: 'pink',
    className: 'text-4xl font-bold',
  },
};

export const AsH3: Story = {
  args: {
    text: 'Section Title',
    as: 'h3',
    color: 'green',
    className: 'text-2xl font-bold',
  },
};

export const AsSpan: Story = {
  args: {
    text: 'inline glitch',
    as: 'span',
    color: 'purple',
  },
};

export const AsParagraph: Story = {
  args: {
    text: 'This is a paragraph with glitch effect.',
    as: 'p',
    color: 'cyan',
  },
};

// Casos de uso
export const HeroTitle: Story = {
  args: {
    text: 'VILSON PADILHA',
    as: 'h1',
    color: 'cyan',
    className: 'text-7xl font-black tracking-wider',
  },
};

export const SectionHeader: Story = {
  args: {
    text: 'SOBRE MIM',
    as: 'h2',
    color: 'pink',
    className: 'text-5xl font-bold',
  },
};

export const Terminal: Story = {
  args: {
    text: '> SYSTEM_ONLINE',
    as: 'span',
    color: 'green',
    className: 'font-mono text-2xl',
  },
};

export const Warning: Story = {
  args: {
    text: '⚠ ACCESS DENIED ⚠',
    as: 'h2',
    color: 'pink',
    className: 'text-4xl font-bold',
  },
};

export const Cyberpunk: Story = {
  args: {
    text: 'NEUROPUNK 2077',
    as: 'h1',
    color: 'purple',
    className: 'text-6xl font-black',
  },
};

// Múltiplos textos
export const MultipleGlitches: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <GlitchText text="LINHA 1" color="cyan" as="h2" className="text-4xl" />
      <GlitchText text="LINHA 2" color="pink" as="h2" className="text-4xl" />
      <GlitchText text="LINHA 3" color="green" as="h2" className="text-4xl" />
      <GlitchText
        text="LINHA 4"
        color="purple"
        as="h2"
        className="text-4xl"
      />
    </div>
  ),
};

// Texto longo
export const LongText: Story = {
  args: {
    text: 'ESTE É UM TEXTO MAIS LONGO COM EFEITO GLITCH',
    as: 'h2',
    color: 'cyan',
    className: 'text-3xl font-bold',
  },
};

// Com caracteres especiais
export const SpecialCharacters: Story = {
  args: {
    text: '< CÓDIGO > DESENVOLVIMENTO /> ',
    as: 'h2',
    color: 'green',
    className: 'font-mono text-3xl',
  },
};

// Galeria de cores
export const ColorGallery: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      <GlitchText text="DEFAULT" color="default" as="h3" className="text-3xl" />
      <GlitchText text="CYAN" color="cyan" as="h3" className="text-3xl" />
      <GlitchText text="PINK" color="pink" as="h3" className="text-3xl" />
      <GlitchText text="GREEN" color="green" as="h3" className="text-3xl" />
      <GlitchText text="PURPLE" color="purple" as="h3" className="text-3xl" />
    </div>
  ),
};
