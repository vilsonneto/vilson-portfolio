# CLAUDE.md — Vilson Portfolio

## Stack
- **Framework**: Next.js 15 (Pages Router, SSG via `getStaticPaths` + `getStaticProps`)
- **Runtime**: React 19, TypeScript 5.7, Node.js 24 (via nvm: `. ~/.nvm/nvm.sh && nvm use 24`)
- **Estilização**: Tailwind CSS 3.4 com design system cyberpunk custom
- **Testes**: Jest + Testing Library + jest-axe | Playwright E2E | Storybook 10 + Vitest
- **CI/CD**: GitHub Actions → Vercel | Codecov coverage

## Comandos essenciais
```bash
# Sempre ativar Node 24 antes de qualquer comando
. ~/.nvm/nvm.sh && nvm use 24

npm run dev          # Servidor local
npm run build        # Build de produção (validar antes de PR)
npm run test         # Jest unit + a11y tests
npm run test:e2e     # Playwright E2E
npm run storybook    # Storybook dev
```

## Convenções de commits
- Padrão: `tipo(escopo): descrição em português`
- Exemplos: `feat(hero):`, `fix(header):`, `chore(deps):`, `test:`, `ci:`, `docs:`
- **Sem** `Co-Authored-By` nas mensagens

## Arquitetura de componentes
```
src/
  components/         # Componentes React
    effects/          # GlitchText, NeonButton, TypingText, AnimateOnScroll...
    AudioToggle/      # Controle de som
    AnimatedCounter/  # Contador animado com IntersectionObserver
    ScrollProgress/   # Barra de progresso de scroll
    FloatingContact/  # Botão flutuante de contato
  hooks/              # Hooks custom (useInView, useActiveSection, useScrollProgress...)
  contexts/           # AudioContext (AudioProvider global)
  pages/              # Next.js pages (index, _app, _document, project/[project])
  data/               # Dados estáticos (projects)
  schemas/            # Types (projectData)
  utils/              # slugify, consoleEasterEggs
  styles/             # globals.css, reset.css, cursor.css
```

## Design system (Tailwind)
- **Cores neon**: `text-neon-cyan`, `text-neon-green`, `text-neon-pink`, `text-neon-purple`
- **Sombras neon**: `shadow-neon-cyan`, `shadow-neon-green`, `shadow-neon-pink`
- **Animações**: `animate-glow`, `animate-glitch`, `animate-pulse-neon`, `animate-float`
- **Breakpoints**: sm=320px, md=960px, lg=1200px

## Observações importantes
- Sempre envolver renders com `<AudioProvider>` nos testes do Header
- Excluir `**/*.stories.{ts,tsx}` e `src/stories/**` do `collectCoverageFrom` no Jest
- `tsconfig.json` exclui arquivos de teste/storybook da compilação Next.js
- Na mobile, a nav fica fixada no bottom via `style.module.css` do Header
- `ScrollProgress` deve ter z-index acima do header (≥ z-51)
- `FloatingContact` é visível apenas em desktop (oculto em mobile pela nav bottom)

## LinkedIn
https://www.linkedin.com/in/vilson-padilha
