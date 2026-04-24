import { test, expect } from '@playwright/test';
import { mapperClient } from '../../clients/mapper.client';

test('Health Check Mapper', async () => {

  const api = await mapperClient();
  const res = await api.get(
    'api/assemblyversion'
  );

  console.log('REQUEST URL:', res.url());
  console.log('STATUS:', res.status());

  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});