import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Get All Company NewsletterEmails return 200', async () => {
  const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const user = process.env.GWAM_USER;
  const companycode = parameters.GetAllCompanyEmails.companyCode;

  const res = await api.post(
    `be/api/getAllCompanyNewsletterEmails/${user}?companyCode=${companycode}`
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    user,
    companyCode: companycode,
  });

  console.log(body);
  await api.dispose();
});