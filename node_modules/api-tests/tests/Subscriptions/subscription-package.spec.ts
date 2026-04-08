import { test, expect } from '@playwright/test';
import { consoleClient } from '../../clients/console.client';

test('GET subscription package returns 200', async () => {
  const api = await consoleClient();

  const res = await api.get(
    '/be/api/subscriptionPackage/DEV-21-2AC518/I-DEVELOP'
  );

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});