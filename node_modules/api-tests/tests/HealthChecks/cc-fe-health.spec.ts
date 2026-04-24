import { test, expect } from '@playwright/test';
import { consoleClient } from '../../clients/console.client';

test('health check Frontend Console', async () => {
  
  const api = await consoleClient();
  // Azione - Verifica che la pagina di versione del Frontend della Cloud Console sia accessibile 
  const res = await api.get(
    'version.html'
  );
  
  console.log('REQUEST URL:', res.url());
  console.log('RESPONSE STATUS:', res.status());

  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});