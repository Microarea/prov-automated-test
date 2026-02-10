import { test, expect } from '@playwright/test';
import { billingClient } from '../../clients/billing.client';

test('Billing health', async () => {
  const api = await billingClient();
  const res = await api.get('/health');
  expect(res.status()).toBe(200);
  await api.dispose();
});