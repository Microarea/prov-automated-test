import { test, expect } from '@playwright/test';
import { dbtoolsClient } from '../../clients/dbtools.client';

test('Health Check DbTools', async () => {
  const api = await dbtoolsClient();
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await api.get(
    'dbtools/api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});