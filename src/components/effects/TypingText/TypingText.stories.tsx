import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TypingText, TypingLines } from './index';

const meta = {
  title: 'Effects/TypingText',
  component: TypingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to be typed out',
    },
    speed: {
      control: { type: 'range', min: 10, max: 200, step: 10 },
      description: 'Typing speed in milliseconds',
    },
    delay: {
      control: { type: 'range', min: 0, max: 3000, step: 100 },
      description: 'Delay before typing starts',
    },
    showCursor: {
      control: 'boolean',
      description: 'Show blinking cursor',
    },
  },
} satisfies Meta<typeof TypingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Olá, eu sou Vilson Padilha',
    speed: 50,
    showCursor: true,
  },
};

export const Fast: Story = {
  args: {
    text: 'Digitando rápido!',
    speed: 30,
    showCursor: true,
  },
};

export const Slow: Story = {
  args: {
    text: 'Digitando... devagar...',
    speed: 150,
    showCursor: true,
  },
};

export const WithDelay: Story = {
  args: {
    text: 'Texto com delay inicial',
    speed: 50,
    delay: 2000,
    showCursor: true,
  },
};

export const NoCursor: Story = {
  args: {
    text: 'Sem cursor piscando',
    speed: 50,
    showCursor: false,
  },
};

export const Cyberpunk: Story = {
  args: {
    text: '> SISTEMA INICIADO...',
    speed: 40,
    showCursor: true,
    className: 'text-neon-cyan font-mono text-xl',
  },
};

// Story para TypingLines
export const MultipleLines: StoryObj<typeof TypingLines> = {
  render: (args) => <TypingLines {...args} />,
  args: {
    lines: [
      '> Inicializando sistema...',
      '> Carregando módulos...',
      '> Conectando ao servidor...',
      '> Sistema pronto!',
    ],
    speed: 40,
    lineDelay: 300,
    className: 'text-neon-cyan font-mono',
    lineClassName: 'mb-2',
  },
};
