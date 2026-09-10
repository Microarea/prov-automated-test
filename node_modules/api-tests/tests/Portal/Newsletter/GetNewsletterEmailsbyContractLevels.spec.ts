import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Get Newsletter Email by ContractLevels return 200', async () => {
  const api = await portalClient();
  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const user = process.env.GWAM_USER;
  const res = await api.post(
    `be/api/getNewsletterEmailsByContractLevels/${user}`,
    {
      data: [
        { "ProductCode": "ma4", "Level": "silver", "Text": "Mago 4 platinum" },
        { "ProductCode": "ma4", "Level": "gold", "Text": "Mago 4 platinum" },
        { "ProductCode": "ma4", "Level": "platinum", "Text": "Mago 4 platinum" },
        { "ProductCode": "maweb", "Level": "platinum", "Text": "Mago Cloud platinum" }
      ]
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  // controllo che Content esista
  expect(body.Content).toBeDefined();
  expect(body.Content).not.toBeNull();

  console.log('REQUEST PARAMETERS:', {
    user
  });

  console.log(body);

  await api.dispose();
});