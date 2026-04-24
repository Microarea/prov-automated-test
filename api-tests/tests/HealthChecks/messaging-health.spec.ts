import { test, expect } from '@playwright/test';
import { messagingClient } from '../../clients/messaging.client';

test('Health Check MicroMessaging', async () => {
  
  const api = await messagingClient();
  const res = await api.get(
    'api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});