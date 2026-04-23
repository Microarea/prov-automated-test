import { test, expect } from '@playwright/test';
import { pingClient } from '../../clients/ping.client';
   
test('Health Check Ping', async () => {
  const api = await pingClient();
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await api.get(
    'api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});