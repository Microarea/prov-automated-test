import { test, expect } from '@playwright/test';
  // Scenario
test('Health Check Backend Console', async ({ request }) => {
  // Azione - Verifica che la pagina di versione del Backend della Cloud Console sia accessibile 
  const res = await request.get('https://test-console.mago.cloud/be/api/assemblyversion');
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});