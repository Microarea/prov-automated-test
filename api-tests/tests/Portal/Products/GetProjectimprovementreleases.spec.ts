import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Research project improvement by ProductCode and searchString', async () => {
  const api = await portalClient();

  const account = parameters.magoPortal.account;
  const productCode = parameters.magoPortal.productCode;
  const searchString = parameters.magoPortal.searchString;
  const authToken = parameters.magoPortal.authToken;

  const res = await api.post(
    `be/api/getProjectImprovementReleases/${account}` +
      `?productCode=${encodeURIComponent(productCode)}` +
      `&searchString=${encodeURIComponent(searchString)}`,
    {
      data: {
        authToken
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    account,
    productCode,
    searchString
  });

  console.log(body);

  await api.dispose();
});