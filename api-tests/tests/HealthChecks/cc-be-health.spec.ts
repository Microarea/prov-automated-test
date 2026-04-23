import { test, expect } from '@playwright/test';
import { consoleClient } from '../../clients/console.client';

test('Health Check Backend Console', async () => {
  const api = await consoleClient();
  // Azione - Verifica che la pagina di versione del Backend della Cloud Console sia accessibile 
  const res = await api.get(
    'be/api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});