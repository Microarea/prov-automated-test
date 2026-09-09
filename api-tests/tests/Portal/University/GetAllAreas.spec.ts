import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('POST All MagoUniversity Areas returns 200', async () => {
  const api = await portalClient();
  
  const user =  process.env.GWAM_USER;
  const res = await api.post(
    `be/api/university/getAllAreas/${user}`
  );

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});