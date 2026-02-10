import { test, expect } from '@playwright/test';
  // Scenario
test('Health Check DbTools', async ({ request }) => {
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await request.get('https://test-dbtools.mago.cloud/dbtools/api/assemblyversion');
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});