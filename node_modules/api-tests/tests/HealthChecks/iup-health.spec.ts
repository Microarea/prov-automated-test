import { test, expect } from '@playwright/test';
import { iupClient } from '../../clients/iup.client';

test('Health Check Instance Updater', async () => {
  const api = await iupClient();
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await api.get(
    'be/api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});