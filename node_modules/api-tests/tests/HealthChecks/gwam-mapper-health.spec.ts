import { test, expect } from '@playwright/test';
import { mapperClient } from '../../clients/mapper.client';

test('Health Check Mapper', async () => {
  const api = await mapperClient();
  // Azione - Verifica che la pagina di versione del Gwam App sia accessibile 
  const res = await api.get(
    'gwam_mapper/api/assemblyversion'
  );
  // Verifica - Controlla che la risposta abbia uno status code di 200 (OK)
  expect(res.status()).toBe(200);
});