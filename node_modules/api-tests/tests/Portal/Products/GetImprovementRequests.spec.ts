import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Get Improvement Requests', async () => {
  const api = await portalClient();

  const account = parameters.magoPortal.account;
  const productCode = parameters.magoPortal.productCode;
  const companyCode = parameters.magoPortal.companyCode;
  const status = parameters.magoPortal.status;
  const searchString = parameters.magoPortal.searchString2;
  const ProxyAuthToken = parameters.magoPortal.ProxyAuthToken;

  const res = await api.post(
    `be/api/getImprovementRequests/${account}` + 
      `?productCode=${encodeURIComponent(productCode)}` +
      `&companyCode=${encodeURIComponent(companyCode)}` +
      `&status=${encodeURIComponent(status)}` +
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
    account,
    productCode,
    companyCode,
    status,
    searchString
  });

  console.log(body);

  await api.dispose();
});