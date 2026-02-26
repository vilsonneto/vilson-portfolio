import type { Meta, StoryObj } from '@storybook/react';
import { NeonButton } from './index';
import { FaGithub, FaRocket, FaDownload, FaHeart } from 'react-icons/fa';

// Mock do hook useSound
const mockUseSoundEffect = () => ({
  playSound: (sound: string) => console.log(`Playing sound: ${sound}`),
});

jest.mock('@/hooks/useSound', () => ({
  useSoundEffect: mockUseSoundEffect,
}));

const meta = {
  title: 'Effects/NeonButton',
  component: NeonButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#110427' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['pink', 'cyan', 'green', 'purple', 'blue'],
      description: 'Neon color theme',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    external: {
      control: 'boolean',
      description: 'Open link in new tab',
    },
  },
} satisfies Meta<typeof NeonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    color: 'cyan',
    variant: 'outline',
    size: 'md',
  },
};

// Cores
export const Pink: Story = {
  args: {
    children: 'Pink Button',
    color: 'pink',
    variant: 'outline',
  },
};

export const Cyan: Story = {
  args: {
    children: 'Cyan Button',
    color: 'cyan',
    variant: 'outline',
  },
};

export const Green: Story = {
  args: {
    children: 'Green Button',
    color: 'green',
    variant: 'outline',
  },
};

export const Purple: Story = {
  args: {
    children: 'Purple Button',
    color: 'purple',
    variant: 'outline',
  },
};

export const Blue: Story = {
  args: {
    children: 'Blue Button',
    color: 'blue',
    variant: 'outline',
  },
};

// Variantes
export const Solid: Story = {
  args: {
    children: 'Solid Button',
    color: 'cyan',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    color: 'cyan',
    variant: 'outline',
  },
};

// Tamanhos
export const Small: Story = {
  args: {
    children: 'Small',
    color: 'cyan',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    color: 'cyan',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    color: 'cyan',
    size: 'lg',
  },
};

// Com ícones
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FaGithub /> GitHub
      </>
    ),
    color: 'cyan',
  },
};

export const IconOnly: Story = {
  args: {
    children: <FaHeart />,
    color: 'pink',
  },
};

export const IconLeft: Story = {
  args: {
    children: (
      <>
        <FaRocket /> Launch App
      </>
    ),
    color: 'green',
    variant: 'solid',
  },
};

export const IconRight: Story = {
  args: {
    children: (
      <>
        Download <FaDownload />
      </>
    ),
    color: 'purple',
  },
};

// Como link
export const AsLink: Story = {
  args: {
    children: 'Visit GitHub',
    color: 'cyan',
    href: 'https://github.com',
    external: true,
  },
};

// Grupo de botões
export const ButtonGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <NeonButton color="pink">Cancel</NeonButton>
      <NeonButton color="cyan" variant="solid">
        Save
      </NeonButton>
      <NeonButton color="green" variant="solid">
        <FaRocket /> Deploy
      </NeonButton>
    </div>
  ),
};

// Todas as cores juntas
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <NeonButton color="pink">Pink</NeonButton>
        <NeonButton color="cyan">Cyan</NeonButton>
        <NeonButton color="green">Green</NeonButton>
        <NeonButton color="purple">Purple</NeonButton>
        <NeonButton color="blue">Blue</NeonButton>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <NeonButton color="pink" variant="solid">
          Pink
        </NeonButton>
        <NeonButton color="cyan" variant="solid">
          Cyan
        </NeonButton>
        <NeonButton color="green" variant="solid">
          Green
        </NeonButton>
        <NeonButton color="purple" variant="solid">
          Purple
        </NeonButton>
        <NeonButton color="blue" variant="solid">
          Blue
        </NeonButton>
      </div>
    </div>
  ),
};
