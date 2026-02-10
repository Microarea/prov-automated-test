import { test, expect } from '@playwright/test';
import { usersClient } from '../../clients/users.client';

test('GET /users 200 e array non vuoto', async () => {
  const api = await usersClient();

  const res = await api.get('/users');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);

  await api.dispose();
});