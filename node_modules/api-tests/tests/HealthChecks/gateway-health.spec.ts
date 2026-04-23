import { test, expect } from '@playwright/test';
import { gatewayClient } from '../../clients/gateway.client';

test('Health Check Gateway', async () => {
  const api = await gatewayClient();
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await api.get(
    'version.html'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});