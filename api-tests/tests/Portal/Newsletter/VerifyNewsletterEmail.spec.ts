import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Verify Newsletter Email return 200', async () => {
  const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const email = process.env.GWAM_USER;
  const companycode = parameters.VerifyNewsletterEmail.companyCode;
  const token = parameters.VerifyNewsletterEmail.token;
  const ProxyAuthToken = parameters.magoPortal.ProxyAuthToken;

  const res = await api.post(
    `be/api/verifyNewsletterEmail?email=${email}&companyCode=${companycode}&token=${token}`,
    {
      data: {
        ProxyAuthToken
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    email,
    companyCode: companycode,
    token
  });

  console.log(body);

  await api.dispose();
});