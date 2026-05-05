import { test, expect } from '@playwright/test';
import { portalClient } from '../../clients/portal.client';
import parameters from '../../data/parameters.json';

test('GET Timezone returns 200', async () => {
  
  const api = await portalClient();
  const account = parameters.magoPortal.account;
  const isocountrycode = parameters.magoPortal.isocountrycode;
  const res = await api.get(
    `be/api/gettimezone/${account}?isocountrycode=${isocountrycode}`
  );

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});