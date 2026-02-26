import type { Meta, StoryObj } from '@storybook/react';
import { AnimateOnScroll, StaggeredAnimate } from './index';

const meta = {
  title: 'Effects/AnimateOnScroll',
  component: AnimateOnScroll,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#110427' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: 'select',
      options: [
        'fadeIn',
        'slideUp',
        'slideDown',
        'slideLeft',
        'slideRight',
        'scale',
        'fadeInScale',
      ],
      description: 'Type of animation to apply',
    },
    delay: {
      control: { type: 'range', min: 0, max: 2000, step: 100 },
      description: 'Delay before animation starts (ms)',
    },
    duration: {
      control: { type: 'range', min: 100, max: 2000, step: 100 },
      description: 'Duration of the animation (ms)',
    },
    threshold: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Intersection observer threshold',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', padding: '2rem' }}>
        <div
          style={{
            color: 'white',
            marginBottom: '100vh',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1.2rem' }}>↓ Scroll down para ver a animação ↓</p>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AnimateOnScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBox = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: 'rgba(57, 255, 20, 0.1)',
      border: '2px solid #39FF14',
      padding: '2rem',
      borderRadius: '8px',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      minWidth: '300px',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    animation: 'fadeIn',
    duration: 500,
    delay: 0,
    threshold: 0.1,
    children: <DemoBox>Fade In</DemoBox>,
  },
};

// Tipos de animação
export const FadeIn: Story = {
  args: {
    animation: 'fadeIn',
    duration: 600,
    children: <DemoBox>FADE IN</DemoBox>,
  },
};

export const SlideUp: Story = {
  args: {
    animation: 'slideUp',
    duration: 600,
    children: <DemoBox>SLIDE UP</DemoBox>,
  },
};

export const SlideDown: Story = {
  args: {
    animation: 'slideDown',
    duration: 600,
    children: <DemoBox>SLIDE DOWN</DemoBox>,
  },
};

export const SlideLeft: Story = {
  args: {
    animation: 'slideLeft',
    duration: 600,
    children: <DemoBox>SLIDE LEFT</DemoBox>,
  },
};

export const SlideRight: Story = {
  args: {
    animation: 'slideRight',
    duration: 600,
    children: <DemoBox>SLIDE RIGHT</DemoBox>,
  },
};

export const Scale: Story = {
  args: {
    animation: 'scale',
    duration: 600,
    children: <DemoBox>SCALE</DemoBox>,
  },
};

export const FadeInScale: Story = {
  args: {
    animation: 'fadeInScale',
    duration: 600,
    children: <DemoBox>FADE IN SCALE</DemoBox>,
  },
};

// Com delay
export const WithDelay: Story = {
  args: {
    animation: 'slideUp',
    duration: 600,
    delay: 1000,
    children: <DemoBox>WITH 1s DELAY</DemoBox>,
  },
};

// Diferentes durações
export const Fast: Story = {
  args: {
    animation: 'slideUp',
    duration: 200,
    children: <DemoBox>FAST (200ms)</DemoBox>,
  },
};

export const Slow: Story = {
  args: {
    animation: 'slideUp',
    duration: 1500,
    children: <DemoBox>SLOW (1500ms)</DemoBox>,
  },
};

// Múltiplas animações
export const MultipleAnimations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
      <AnimateOnScroll animation="fadeIn">
        <DemoBox>FADE IN</DemoBox>
      </AnimateOnScroll>
      <AnimateOnScroll animation="slideUp">
        <DemoBox>SLIDE UP</DemoBox>
      </AnimateOnScroll>
      <AnimateOnScroll animation="slideLeft">
        <DemoBox>SLIDE LEFT</DemoBox>
      </AnimateOnScroll>
      <AnimateOnScroll animation="scale">
        <DemoBox>SCALE</DemoBox>
      </AnimateOnScroll>
    </div>
  ),
};

// StaggeredAnimate
export const StaggeredCards: StoryObj<typeof StaggeredAnimate> = {
  render: (args) => <StaggeredAnimate {...args} />,
  args: {
    animation: 'slideUp',
    staggerDelay: 150,
    duration: 500,
    className: 'flex flex-col gap-4',
    children: [
      <DemoBox key={1}>Card 1</DemoBox>,
      <DemoBox key={2}>Card 2</DemoBox>,
      <DemoBox key={3}>Card 3</DemoBox>,
      <DemoBox key={4}>Card 4</DemoBox>,
    ],
  },
};

export const StaggeredList: StoryObj<typeof StaggeredAnimate> = {
  render: (args) => <StaggeredAnimate {...args} />,
  args: {
    animation: 'fadeInScale',
    staggerDelay: 100,
    duration: 400,
    className: 'flex flex-col gap-3',
    children: [
      <div
        key={1}
        style={{ color: '#39FF14', fontSize: '1.2rem', fontWeight: 'bold' }}
      >
        ✓ Item 1
      </div>,
      <div
        key={2}
        style={{ color: '#39FF14', fontSize: '1.2rem', fontWeight: 'bold' }}
      >
        ✓ Item 2
      </div>,
      <div
        key={3}
        style={{ color: '#39FF14', fontSize: '1.2rem', fontWeight: 'bold' }}
      >
        ✓ Item 3
      </div>,
      <div
        key={4}
        style={{ color: '#39FF14', fontSize: '1.2rem', fontWeight: 'bold' }}
      >
        ✓ Item 4
      </div>,
      <div
        key={5}
        style={{ color: '#39FF14', fontSize: '1.2rem', fontWeight: 'bold' }}
      >
        ✓ Item 5
      </div>,
    ],
  },
};

// Caso de uso real
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <AnimateOnScroll animation="fadeIn" duration={800}>
        <h1
          style={{
            color: '#00FFFF',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          SOBRE MIM
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slideUp" delay={200} duration={600}>
        <p
          style={{
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          Desenvolvedor Full Stack especializado em criar experiências web
          modernas e interativas.
        </p>
      </AnimateOnScroll>

      <StaggeredAnimate
        animation="slideLeft"
        staggerDelay={100}
        duration={500}
        className="flex flex-col gap-4"
      >
        {[
          '💻 React & Next.js',
          '🎨 TypeScript',
          '⚡ Performance',
          '♿ Acessibilidade',
          '🧪 Testes Automatizados',
        ].map((skill, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '1px solid #00FFFF',
              padding: '1rem',
              borderRadius: '4px',
              color: '#00FFFF',
              fontSize: '1.1rem',
            }}
          >
            {skill}
          </div>
        ))}
      </StaggeredAnimate>
    </div>
  ),
};
