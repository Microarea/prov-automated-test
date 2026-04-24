import { test, expect } from '@playwright/test';
import { gatewayClient } from '../../clients/gateway.client';

test('Health Check Gateway', async () => {
  
  const api = await gatewayClient();
  const res = await api.get(
    'version.html'
  );

  console.log('REQUEST URL:', res.url());
  console.log('STATUS:', res.status());

  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});