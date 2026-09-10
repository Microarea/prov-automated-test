import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Get All Categories', async () => {
  const api = await portalClient();

//l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const user = process.env.GWAM_USER;
  const onlyactives = parameters.GetAllCategories.onlyActives;
  
  const res = await api.post(
    `be/api/getAllCategories/${user}` + 
      `?onlyactives=${onlyactives}`
  );
  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    user,
    onlyActives: onlyactives,
  });
  console.log(body);

  expect(res.status()).toBe(200);
  expect(body.Content).toBeDefined();

  await api.dispose();
});