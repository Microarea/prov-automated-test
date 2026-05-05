import { test, expect } from '@playwright/test';
import { portalClient } from '../../clients/portal.client';
import parameters from '../../data/parameters.json';

test('POST Contracts By Codice Titolare returns 200', async () => {
  const api = await portalClient();

  const account = parameters.magoPortal.account;
  const partnercode = parameters.magoPortal.partnercode;
  const res = await api.post(
    'be/api/getContractsByCodiceTitolare',
    {
      data: {
        accountname: account,
        partnercode: partnercode
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();
  console.log('REQUEST BODY:', { account: account, partnercode: partnercode });
  console.log(body);

  await api.dispose();
});