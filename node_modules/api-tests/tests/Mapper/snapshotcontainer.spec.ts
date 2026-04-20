import { test, expect } from '@playwright/test';
import { mapperClient } from '../../clients/mapper.client';

test('GET snapshotcontainer returns 200', async () => {
  const api = await mapperClient();

  const res = await api.get(
    'api/snapshotcontainer?subscriptionKey=DEV-24-08F692'
  );

  console.log('REQUEST URL:', res.url());
  console.log('STATUS:', res.status());

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});