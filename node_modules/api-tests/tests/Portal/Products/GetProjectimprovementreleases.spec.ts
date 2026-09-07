import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Research project improvement by ProductCode and searchString', async () => {
  const api = await portalClient();

  const user = process.env.GWAM_USER;
  const productCode = parameters.magoPortal.productCode;
  const searchString = parameters.magoPortal.searchString1;
  const ProxyAuthToken = parameters.magoPortal.ProxyAuthToken;

  const res = await api.post(
    `be/api/getProjectImprovementReleases/${user}` +
      `?productCode=${encodeURIComponent(productCode)}` +
      `&searchString=${encodeURIComponent(searchString)}`,
    {
      data: {
        ProxyAuthToken
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    user,
    productCode,
    searchString
  });

  console.log(body);

  await api.dispose();
});