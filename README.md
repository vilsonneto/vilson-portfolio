<div align="center">

# 🚀 Vilson Padilha - Portfolio

[![Tests](https://github.com/vilsonneto/vilson-portfolio/actions/workflows/test.yml/badge.svg)](https://github.com/vilsonneto/vilson-portfolio/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/vilsonneto/vilson-portfolio/branch/main/graph/badge.svg)](https://codecov.io/gh/vilsonneto/vilson-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D24.0.0-brightgreen)](https://nodejs.org)

**Portfolio profissional desenvolvido com Next.js 15, React 19 e TypeScript**

Especializado em demonstrar experiência com aplicações B2B de alta complexidade

[🌐 Ver Demo](#) • [📋 Documentação](./docs) • [🐛 Reportar Bug](https://github.com/vilsonneto/vilson-portfolio/issues)

</div>

---

## 📋 Sobre o Projeto

Portfolio interativo desenvolvido para demonstrar competências técnicas através de código real e verificável. Apresenta projetos corporativos e open source com foco em qualidade, performance e acessibilidade.

### ✨ Destaques

- 🎯 **139 testes unitários** com 35.4% de cobertura geral
- 🎨 **Tema Cyberpunk** com efeitos visuais customizados
- ♿ **Acessível** - Respeita `prefers-reduced-motion`
- 🔊 **Sons interativos** com controle de áudio
- 🎮 **Easter eggs** - Konami Code e surpresas escondidas
- 📱 **Responsivo** - Mobile-first design
- ⚡ **Performance** - Core Web Vitals otimizados

---

## 🛠️ Stack Técnica

### Core
- **Framework:** [Next.js 15](https://nextjs.org/) - React Framework com App Router
- **Runtime:** [React 19](https://react.dev/) - Latest React version
- **Language:** [TypeScript 5.7](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) - Utility-first CSS

### Testing & Quality
- **Unit Tests:** [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/)
- **E2E Tests:** [Playwright](https://playwright.dev/) - 21 testes em 3 browsers
- **A11y Tests:** [jest-axe](https://github.com/nickcolley/jest-axe) - Validação WCAG
- **Component Dev:** [Storybook](https://storybook.js.org/) - Documentação visual
- **Coverage:** 35.4% geral | 100% em módulos core
- **CI/CD:** GitHub Actions
- **Linting:** ESLint + Next.js config

### Features
- **Animations:** Lottie + CSS Animations
- **Sound:** [use-sound](https://github.com/joshwcomeau/use-sound)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Validation:** [Zod](https://zod.dev/) - Schema validation

---

## 📊 Qualidade de Código

```
Test Suites: 13 passed, 13 total
Tests:       139 passed, 139 total
Coverage:    35.4% statements | 72.9% branches | 61.4% functions
```

### Cobertura por Módulo

| Módulo | Coverage | Status |
|--------|----------|--------|
| **Utils** | 100% | ✅ |
| **Schemas** | 100% | ✅ |
| **Services** | 100% | ✅ |
| **Contexts** | 97.1% | ✅ |
| **Hooks** | 82.6% | ✅ |
| **Components** | 90%+ | ✅ |

📖 **[Documentação completa de testes](./docs/TESTES_IMPLEMENTADOS.md)**

---

## 🚀 Getting Started

### Pré-requisitos

```bash
Node.js >= 24.0.0
npm >= 10.0.0
```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/vilsonneto/vilson-portfolio.git

# Entre no diretório
cd vilson-portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

### Scripts Disponíveis

```bash
npm run dev           # Servidor de desenvolvimento
npm run build         # Build para produção
npm start             # Servidor de produção
npm run lint          # Executar linter

# Testes Unitários
npm test              # Executar testes unitários
npm run test:watch    # Testes em modo watch
npm run test:coverage # Testes com cobertura

# Testes E2E
npm run test:e2e      # Executar testes E2E
npm run test:e2e:ui   # Testes E2E com interface
npm run test:e2e:debug # Debug de testes E2E

# Storybook
npm run storybook     # Iniciar Storybook dev server
npm run build-storybook # Build Storybook para produção
```

---

## 🧪 Testes

### Executar Testes

```bash
# Testes Unitários (Jest)
npm test              # Todos os testes
npm run test:watch    # Modo watch (desenvolvimento)
npm run test:coverage # Com relatório de cobertura

# Testes E2E (Playwright)
npm run test:e2e      # Executar testes E2E
npm run test:e2e:ui   # Interface visual interativa
npm run test:e2e:debug # Debug passo a passo
```

### Cobertura de Testes

- **21 testes E2E** - Chromium, Firefox, Mobile Chrome
- **139 testes unitários** - 35.4% cobertura geral
- **Testes de acessibilidade** - jest-axe + Playwright a11y
- **Storybook** - Documentação visual de componentes
- **Testes em:** Componentes, Hooks, Utils, Services, Schemas

### Estrutura de Testes

```
.storybook/             # Configuração do Storybook
e2e/                    # Testes End-to-End (Playwright)
└── example.spec.ts     # Testes de navegação, acessibilidade, performance

src/__tests__/          # Testes Unitários (Jest)
├── accessibility/      # Testes de acessibilidade (jest-axe)
│   ├── Header.a11y.test.tsx
│   └── Card.a11y.test.tsx
├── components/         # Testes de componentes
│   ├── Header.test.tsx
│   ├── Hero.test.tsx
│   ├── ProjectCard.test.tsx
│   └── effects/
│       ├── GlitchText.test.tsx
│       └── NeonButton.test.tsx
├── hooks/              # Testes de hooks
│   ├── useInView.test.ts
│   ├── useSound.test.tsx
│   └── useKonamiCode.test.ts
├── utils/              # Testes de utilitários
│   ├── slugify.test.ts
│   └── consoleEasterEggs.test.ts
├── schemas/            # Validação Zod
│   └── project.schema.test.ts
└── services/           # Testes de API
    └── github.test.ts
```

---

## 📁 Estrutura do Projeto

```
vilson-portfolio/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── docs/                   # Documentação
│   ├── PLANO_PORTFOLIO.md
│   ├── TESTES_IMPLEMENTADOS.md
│   └── ESTRATEGIA_TESTES_EFEITOS.md
├── public/                 # Assets estáticos
│   ├── sounds/            # Efeitos sonoros
│   └── cursors/           # Cursores customizados
├── src/
│   ├── __tests__/         # Testes unitários
│   ├── components/        # Componentes React
│   │   ├── effects/       # Efeitos visuais
│   │   └── ...
│   ├── contexts/          # React Contexts
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Next.js pages
│   ├── schemas/           # Zod schemas
│   ├── services/          # Serviços externos
│   ├── styles/            # Estilos globais
│   └── utils/             # Funções utilitárias
├── jest.config.ts         # Configuração Jest
├── jest.setup.ts          # Setup de testes
├── tailwind.config.js     # Configuração Tailwind
└── tsconfig.json          # Configuração TypeScript
```

---

## 🎨 Features Destacadas

### 🎭 Efeitos Visuais

- **GlitchText** - Efeito glitch cyberpunk
- **TypingText** - Animação de digitação
- **NeonButton** - Botões com glow neon
- **MatrixRain** - Chuva estilo Matrix
- **AnimateOnScroll** - Animações on scroll

### 🔊 Sistema de Áudio

- Controle de volume global
- Múltiplos efeitos sonoros
- Respeita preferências do usuário
- Cache de áudio otimizado

### 🎮 Easter Eggs

- **Konami Code** - `↑↑↓↓←→←→BA`
- **Ultra Cyber Mode** - 7 cliques no nome
- **Hidden Book** - Biblioteca secreta
- **Console Messages** - ASCII art e dicas

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

### Commits Convencionais

Este projeto segue [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
test: testes
refactor: refatoração
style: formatação
chore: manutenção
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Vilson Padilha Neto**

- 💼 LinkedIn: [@vilson-neto](https://linkedin.com/in/vilson-neto)
- 📧 Email: vilson.neto57@gmail.com
- 🌐 Portfolio: Em breve
- 💻 GitHub: [@vilsonneto](https://github.com/vilsonneto)

---

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Vercel](https://vercel.com/) - Hospedagem
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lottie](https://lottiefiles.com/) - Animações
- Comunidade Open Source 💚

---

<div align="center">

**[⬆ Voltar ao topo](#-vilson-padilha---portfolio)**

Desenvolvido com 💚 por [Vilson Padilha](https://github.com/vilsonneto)

</div>
