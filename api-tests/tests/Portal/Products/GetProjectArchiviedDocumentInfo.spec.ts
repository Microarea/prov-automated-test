import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Get Project Archived Document Info', async () => {
  const api = await portalClient();

  const account = parameters.magoPortal.account;
  const ProxyAuthToken = parameters.magoPortal.ProxyAuthToken;

  const res = await api.post(
    `be/api/getProjectArchiviedDocumentInfo/${account}`,
    {
      data: {
        ProxyAuthToken
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    account
  });
  console.log(body);

  await api.dispose();
});