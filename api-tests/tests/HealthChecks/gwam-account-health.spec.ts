import { test, expect } from '@playwright/test';
import { gwamClient } from '../../clients/gwam.client';

test.skip('Health Check Gwam Account', async () => {
  // Il GWAM-Account è stato dismesso perchè inglobato nel gwam app
  
  const api = await gwamClient();
  const res = await api.get(
    'gwam_account/api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});