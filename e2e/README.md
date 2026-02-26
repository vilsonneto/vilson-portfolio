# Testes E2E com Playwright

## 🎯 Objetivo

Testes End-to-End para validar o fluxo completo da aplicação em diferentes browsers e dispositivos.

## 🚀 Setup

### 1. Instalar Playwright

```bash
# Instalar como dependência opcional
npm install --save-optional @playwright/test

# Instalar browsers
npx playwright install
```

### 2. Executar Testes

```bash
# Executar todos os testes E2E
npm run test:e2e

# Executar com UI interativa
npm run test:e2e:ui

# Executar em modo debug
npm run test:e2e:debug

# Executar em browser específico
npx playwright test --project=chromium
```

## 📁 Estrutura

```
e2e/
├── example.spec.ts           # Testes de exemplo
└── README.md                 # Este arquivo
```

## 🧪 Testes Implementados

### Home Page
- ✅ Carregamento da página
- ✅ Navegação funcionando
- ✅ Cards de projetos visíveis
- ✅ Respeita reduced motion

### Acessibilidade
- ✅ Sem erros automáticos de acessibilidade
- ✅ Navegação por teclado

### Performance
- ✅ Tempo de carregamento < 3s

## 📊 Relatórios

Após executar os testes, abra o relatório HTML:

```bash
npx playwright show-report
```

## 🎨 Visual Regression (Futuro)

Para adicionar testes visuais:

```typescript
test('visual comparison', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage.png');
});
```

## 🔧 Configuração Avançada

Edite `playwright.config.ts` para:

- Adicionar mais browsers/dispositivos
- Configurar timeouts
- Ajustar retries
- Modificar relatórios

## 📚 Recursos

- [Playwright Docs](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-test)

---

**Nota:** Para uso em produção:
1. Instale o Playwright
2. Execute `npx playwright install`
3. Rode `npm run test:e2e`
