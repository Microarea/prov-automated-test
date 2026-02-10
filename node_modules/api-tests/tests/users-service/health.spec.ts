import { test, expect } from '@playwright/test';
import { usersClient } from '../../clients/users.client';

test('Users health', async () => {
  const api = await usersClient();
  const res = await api.get('/health');
  expect(res.status()).toBe(200);
  await api.dispose();
});