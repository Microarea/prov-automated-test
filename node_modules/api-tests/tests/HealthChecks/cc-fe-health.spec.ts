import { test, expect } from '@playwright/test';
  // Scenario
test('health check Frontend Console', async ({ request }) => {
  // Azione - Verifica che la pagina di versione del Frontend della Cloud Console sia accessibile 
  const res = await request.get('https://test-console.mago.cloud/version.html');
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});