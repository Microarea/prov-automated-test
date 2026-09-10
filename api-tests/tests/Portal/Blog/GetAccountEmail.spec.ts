import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test.describe('Portal > Blog', () => {
  test('Get Account Email', async () => {
    const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
    const user = process.env.GWAM_USER;
    
    const res = await api.post(
      `be/api/getAccountEmail/${user}`
    );
    const body = await res.json();

    console.log(body);

    expect(res.status()).toBe(200);
    expect(body.Content).toBeDefined();
    expect(body.Content).toBe(user);

    await api.dispose();
  });
});