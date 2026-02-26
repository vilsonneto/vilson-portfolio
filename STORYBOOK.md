# 📚 Storybook - Documentação de Componentes

Este projeto utiliza [Storybook](https://storybook.js.org/) para documentar e desenvolver componentes visuais de forma isolada.

## 🚀 Como Executar

```bash
# Iniciar Storybook em modo desenvolvimento
npm run storybook

# Build do Storybook para produção
npm run build-storybook
```

O Storybook será aberto automaticamente em [http://localhost:6006](http://localhost:6006)

---

## 📖 Stories Disponíveis

### 🎨 Effects (Efeitos Visuais)

#### 1. TypingText
**Localização:** `src/components/effects/TypingText/TypingText.stories.tsx`

Efeito de digitação animada, perfeito para títulos e textos cyberpunk.

**Variantes:**
- Default - Configuração padrão
- Fast - Digitação rápida (30ms)
- Slow - Digitação lenta (150ms)
- WithDelay - Com delay inicial
- NoCursor - Sem cursor piscando
- Cyberpunk - Estilo terminal cyberpunk
- MultipleLines - Múltiplas linhas sequenciais

**Props principais:**
- `text`: Texto a ser digitado
- `speed`: Velocidade da digitação (ms)
- `delay`: Delay antes de iniciar
- `showCursor`: Mostrar cursor piscando
- `onComplete`: Callback ao completar

---

#### 2. MatrixRain
**Localização:** `src/components/effects/MatrixRain/MatrixRain.stories.tsx`

Efeito de "chuva Matrix" com caracteres katakana caindo.

**Variantes:**
- Default - Configuração padrão
- Classic - Estilo Matrix clássico
- Subtle - Efeito suave
- Intense - Efeito intenso
- Cyberpunk - Tema ciano
- Purple - Tema roxo
- Fast - Velocidade alta
- Slow - Velocidade baixa

**Props principais:**
- `opacity`: Opacidade do efeito (0-1)
- `speed`: Velocidade de queda (0.1-3)
- `color`: Cor dos caracteres
- `fontSize`: Tamanho da fonte

---

#### 3. NeonButton
**Localização:** `src/components/effects/NeonButton/NeonButton.stories.tsx`

Botões com efeito neon e hover com brilho.

**Variantes:**
- **Cores:** Pink, Cyan, Green, Purple, Blue
- **Variantes:** Solid, Outline
- **Tamanhos:** Small, Medium, Large
- **Com ícones:** WithIcon, IconOnly, IconLeft, IconRight
- AsLink - Como link externo
- ButtonGroup - Grupo de botões
- AllColors - Galeria de todas as cores

**Props principais:**
- `color`: Cor do neon (pink/cyan/green/purple/blue)
- `variant`: Variante (solid/outline)
- `size`: Tamanho (sm/md/lg)
- `href`: Link (opcional)
- `external`: Abrir em nova aba

---

#### 4. GlitchText
**Localização:** `src/components/effects/GlitchText/GlitchText.stories.tsx`

Efeito glitch cyberpunk em textos.

**Variantes:**
- **Cores:** Default, Cyan, Pink, Green, Purple
- **Tags HTML:** H1, H2, H3, Span, Paragraph
- **Casos de uso:**
  - HeroTitle - Título principal
  - SectionHeader - Cabeçalho de seção
  - Terminal - Estilo terminal
  - Warning - Aviso
  - Cyberpunk - Tema neuropunk
- MultipleGlitches - Múltiplos textos
- LongText - Texto longo
- SpecialCharacters - Caracteres especiais
- ColorGallery - Galeria de cores

**Props principais:**
- `text`: Texto a exibir
- `as`: Tag HTML (h1/h2/h3/h4/span/p)
- `color`: Cor do neon
- `className`: Classes CSS adicionais

---

#### 5. AnimateOnScroll
**Localização:** `src/components/effects/AnimateOnScroll/AnimateOnScroll.stories.tsx`

Animações ativadas ao fazer scroll (Intersection Observer).

**Variantes:**
- **Animações:**
  - FadeIn - Aparecer
  - SlideUp - Deslizar de baixo
  - SlideDown - Deslizar de cima
  - SlideLeft - Deslizar da esquerda
  - SlideRight - Deslizar da direita
  - Scale - Escalar
  - FadeInScale - Aparecer e escalar
- WithDelay - Com delay
- Fast - Animação rápida (200ms)
- Slow - Animação lenta (1500ms)
- MultipleAnimations - Múltiplas em sequência
- **Staggered (escalonado):**
  - StaggeredCards - Cards em sequência
  - StaggeredList - Lista em sequência
- RealWorldExample - Exemplo real de uso

**Props principais:**
- `animation`: Tipo de animação
- `delay`: Delay antes de iniciar (ms)
- `duration`: Duração da animação (ms)
- `threshold`: Threshold do IntersectionObserver (0-1)

---

### 🃏 Components (Componentes)

#### 6. Card
**Localização:** `src/components/Card/Card.stories.tsx`

Card de projeto com imagem, título, descrição e tecnologias.

**Variantes:**
- Default - Configuração padrão
- LongDescription - Descrição longa
- ManyTechnologies - Muitas tecnologias
- MinimalTech - Poucas tecnologias

**Props principais:**
- `project`: Objeto com dados do projeto
  - `title`: Título
  - `description`: Descrição
  - `image`: URL da imagem
  - `github`: Link do GitHub
  - `deploy`: Link do deploy
  - `stack`: Array de tecnologias
  - `tags`: Array de tags

---

## 🎯 Recursos do Storybook

### ✅ Addons Configurados

1. **@storybook/addon-a11y** - Testes de acessibilidade em tempo real
2. **@storybook/addon-docs** - Documentação automática
3. **@storybook/addon-vitest** - Integração com Vitest
4. **@chromatic-com/storybook** - Visual regression testing

### 🎨 Temas Disponíveis

- **Dark** (padrão) - #110427 (purple-900 do projeto)
- **Black** - #000000
- **Light** - #ffffff

### 🔧 Controles Interativos

Todos os componentes têm controles interativos no painel "Controls":
- Sliders para números (speed, opacity, duration, etc.)
- Seletores para enums (color, size, variant, etc.)
- Inputs de texto
- Toggles para booleanos

---

## 📝 Como Criar Novas Stories

### Template Básico

\`\`\`typescript
import type { Meta, StoryObj } from '@storybook/react';
import { SeuComponente } from './index';

const meta = {
  title: 'Categoria/SeuComponente',
  component: SeuComponente,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Definir controles aqui
  },
} satisfies Meta<typeof SeuComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props padrão
  },
};
\`\`\`

### Boas Práticas

1. **Organize por categoria** - Effects, Components, Pages, etc.
2. **Crie variantes relevantes** - Diferentes estados e configurações
3. **Use decorators** - Para wrapping ou contexto necessário
4. **Configure backgrounds** - Para melhor visualização
5. **Documente as props** - Use argTypes com descrições
6. **Exemplos reais** - Mostre casos de uso práticos

---

## 🧪 Testes com Storybook

### Accessibility Tests

Todos os componentes são testados automaticamente quanto a:
- Contraste de cores
- Hierarquia de headings
- Labels de formulários
- Navegação por teclado
- Screen reader support

Os resultados aparecem no painel "Accessibility" do Storybook.

### Visual Regression

Use Chromatic para detectar mudanças visuais não intencionais:

\`\`\`bash
# Publicar no Chromatic (requer configuração)
npx chromatic --project-token=<seu-token>
\`\`\`

---

## 📚 Recursos Adicionais

- [Documentação Oficial do Storybook](https://storybook.js.org/docs)
- [Best Practices](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Addon Catalog](https://storybook.js.org/addons)
- [Chromatic](https://www.chromatic.com/)

---

## 🎨 Paleta de Cores do Projeto

```css
/* Neon Colors */
--neon-cyan: #00FFFF
--neon-pink: #FF10F0
--neon-green: #39FF14
--neon-purple: #9D4EDD
--blueBaby-300: #436db9

/* Background */
--purple-900: #110427
```

---

**Desenvolvido com 💚 para documentação visual de componentes**
