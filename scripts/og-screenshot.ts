/**
 * Gera screenshot do hero para Open Graph (og:image).
 * Espera 10s para as animações (contadores, typing) terminarem.
 *
 * Uso:
 *   1. npm run dev (em outro terminal)
 *   2. npx playwright test scripts/og-screenshot.ts
 *
 * Ou direto:
 *   npx tsx scripts/og-screenshot.ts
 */

import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
  })

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })

  // Espera 10s para contadores e typing animation terminarem
  await page.waitForTimeout(10_000)

  await page.screenshot({
    path: 'public/og-image.png',
    type: 'png',
  })

  await browser.close()
  console.log('Screenshot salvo em public/og-image.png (1200x630)')
}

main().catch(console.error)
