import { test, expect } from '@playwright/test';
import { consoleClient } from '../../clients/console.client';
import parameters from '../../data/parameters.json';

test('GET subscription package returns 200', async () => {
  
  const api = await consoleClient();
  const subscription = parameters.default.subscriptionCode;
  const instance = parameters.default.instance;
  const res = await api.get(
    `be/api/subscriptionPackage/${subscription}/${instance}`
  );

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});