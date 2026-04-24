import { test, expect } from '@playwright/test';
import { pingClient } from '../../clients/ping.client';
   
test('Health Check Ping', async () => {
  
  const api = await pingClient();
  const res = await api.get(
    'api/assemblyversion'
  );

  console.log('REQUEST URL:', res.url());
  console.log('STATUS:', res.status());

  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});