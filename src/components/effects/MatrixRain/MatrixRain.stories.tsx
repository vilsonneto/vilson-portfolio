import type { Meta, StoryObj } from '@storybook/react';
import { MatrixRain } from './index';

const meta = {
  title: 'Effects/MatrixRain',
  component: MatrixRain,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#110427' },
        { name: 'black', value: '#000000' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: 'Opacity of the matrix rain effect',
    },
    speed: {
      control: { type: 'range', min: 0.1, max: 3, step: 0.1 },
      description: 'Speed of falling characters',
    },
    color: {
      control: 'color',
      description: 'Color of the matrix characters',
    },
    fontSize: {
      control: { type: 'range', min: 10, max: 30, step: 2 },
      description: 'Font size of characters',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Story />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            color: 'white',
            textAlign: 'center',
            fontFamily: 'monospace',
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>MATRIX RAIN</h1>
          <p style={{ fontSize: '1.2rem' }}>
            Efeito visual inspirado em The Matrix
          </p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MatrixRain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    opacity: 0.05,
    speed: 1,
    color: '#39FF14',
    fontSize: 14,
  },
};

export const Classic: Story = {
  args: {
    opacity: 0.1,
    speed: 1,
    color: '#00FF00',
    fontSize: 16,
  },
};

export const Subtle: Story = {
  args: {
    opacity: 0.03,
    speed: 0.5,
    color: '#39FF14',
    fontSize: 12,
  },
};

export const Intense: Story = {
  args: {
    opacity: 0.15,
    speed: 2,
    color: '#00FF00',
    fontSize: 16,
  },
};

export const Cyberpunk: Story = {
  args: {
    opacity: 0.08,
    speed: 1.5,
    color: '#00FFFF',
    fontSize: 14,
  },
};

export const Purple: Story = {
  args: {
    opacity: 0.1,
    speed: 1,
    color: '#9D4EDD',
    fontSize: 14,
  },
};

export const Fast: Story = {
  args: {
    opacity: 0.05,
    speed: 3,
    color: '#39FF14',
    fontSize: 14,
  },
};

export const Slow: Story = {
  args: {
    opacity: 0.05,
    speed: 0.3,
    color: '#39FF14',
    fontSize: 14,
  },
};
