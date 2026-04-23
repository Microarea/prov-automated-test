import { test, expect } from '@playwright/test';
import { gwamClient } from '../../clients/gwam.client';

test('Health Check Gwam Account', async () => {
  const api = await gwamClient();
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await api.get(
    'gwam_account/api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});