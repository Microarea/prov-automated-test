import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Research Incidents by ProductCode and Release', async () => {
  const api = await portalClient();

  const account = parameters.magoPortal.account;
  const productCode = parameters.magoPortal.productCode;
  const ProxyAuthToken = parameters.magoPortal.ProxyAuthToken;

  const res = await api.post(
    `be/api/getIncidents/${account}` + 
      `?productCode=${encodeURIComponent(productCode)}` +
      `&releaseFrom=4.2` +
      `&releaseTo=4.2`,
    {
      data: {
        ProxyAuthToken
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    account,
    productCode,
    releaseFrom: '4.2',
    releaseTo: '4.2'
  });

  console.log(body);

  await api.dispose();
});