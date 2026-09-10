import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Verify PassKey', async () => {
  const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const user = process.env.GWAM_USER;
  const productcode = parameters.GeneratePassKey.productCode;
  const otpToken = process.env.OTP_TOKEN;

  const res = await api.post(
    `be/api/IsPassKeyEnabled`,
    {
      data: [
        { "AccountName": user,
          "Otp": otpToken,
          "ProductCode": productcode }
      ]
    }
  );

  const body = await res.json();
  
  console.log('REQUEST PARAMETERS:', {
    user,
    productCode: productcode,
  });
  console.log(body);
  console.log('OTP ricevuto:', otpToken);

  await api.dispose();
});