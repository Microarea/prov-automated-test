import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Generate Pass Key', async () => {
  const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const user = process.env.GWAM_USER;
  const productcode = parameters.GeneratePassKey.productCode;

  const res = await api.post(
    `be/api/generatePassKey/${user}?productCode=${productcode}`
  );

  expect(res.status()).toBe(200);

  const body = await res.json();
  const otpToken = body.Content?.OTPToken;
  
  expect(otpToken).toBeDefined();
  process.env.OTP_TOKEN = otpToken;
  
  console.log('REQUEST PARAMETERS:', {
    user,
    productCode: productcode,
  });
  console.log(body);
  console.log('OTP_TOKEN salvato:', process.env.OTP_TOKEN);

  await api.dispose();
});