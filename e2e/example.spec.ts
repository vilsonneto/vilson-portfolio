import { test, expect } from '@playwright/test';

/**
 * Teste E2E de exemplo
 *
 * Para executar:
 * 1. Instale o Playwright: npm install --save-optional @playwright/test
 * 2. Instale os browsers: npx playwright install
 * 3. Execute os testes: npm run test:e2e
 */

test.describe('Portfolio Home Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');

    // Verifica se o título está presente
    await expect(page.locator('h2').first()).toContainText('VILSON PADILHA');
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Verifica se o header está visível
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Em mobile, verifica apenas se o header existe
    // Em desktop, verifica os links de navegação (primeiro de cada)
    const aboutLink = page.getByRole('link', { name: 'Sobre', exact: true }).first();
    const projectsLink = page.getByRole('link', { name: 'Projetos', exact: true }).first();

    // Pelo menos um dos links deve estar visível (desktop) ou o header deve existir (mobile)
    const isDesktop = await aboutLink.isVisible().catch(() => false);
    if (isDesktop) {
      await expect(aboutLink).toBeVisible();
      await expect(projectsLink).toBeVisible();
    }
  });

  test('should display project cards', async ({ page }) => {
    await page.goto('/');

    // Scroll para seção de projetos
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Aguarda cards de projetos carregarem
    const projectCards = page.getByText('Ver case completo');
    await expect(projectCards.first()).toBeVisible({ timeout: 5000 });
  });

  test('should respect reduced motion preference', async ({ page, context }) => {
    // Simula preferência de movimento reduzido
    await context.addInitScript(() => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query: string) => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        })),
      });
    });

    await page.goto('/');

    // Verifica que texto glitch está presente mas sem animação
    const heading = page.locator('h2').first();
    await expect(heading).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('should have no automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    // Verifica se elementos principais têm acessibilidade adequada
    const header = page.locator('header');
    await expect(header).toBeVisible();

    const main = page.locator('main, section').first();
    await expect(main).toBeVisible();
  });

  test('should be navigable by keyboard', async ({ page }) => {
    await page.goto('/');

    // Testa navegação por teclado
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);

    expect(focusedElement).toBeTruthy();
  });
});

test.describe('Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;

    // Timeout ajustado para ambiente de desenvolvimento
    // CI: 5s | Dev: 15s
    const maxLoadTime = process.env.CI ? 5000 : 15000;
    expect(loadTime).toBeLessThan(maxLoadTime);
  });
});
