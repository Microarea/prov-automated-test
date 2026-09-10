import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';

test.describe('Portal > Roles', () => {
  test('Get All Roles for Download', async () => {
    const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
    const user = process.env.GWAM_USER;
    
    const res = await api.post(
      `be/api/getAllRolesForDownload/${user}`
    );
    const body = await res.json();

    console.log(body);

    expect(res.status()).toBe(200);
    expect(body.Content).toBeDefined();

    await api.dispose();
  });
});