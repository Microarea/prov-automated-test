import { test, expect } from '@playwright/test';
import { consoleClient } from '../../clients/console.client';

test('GET subscription package returns 200', async () => {
  const api = await consoleClient();

  const res = await api.get(
    'be/api/databases/validate/I-9B7F05/DEV-21-4290B2'
  );

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});