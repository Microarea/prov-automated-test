import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test.describe('Portal > Blog', () => {
  test('Get Blog Account', async () => {
    const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
    const user = process.env.GWAM_USER;
    const companycode = parameters.GetBlogAccount.companyCode;
    const email = process.env.GWAM_USER;
    
    const res = await api.post(
      `be/api/getBlogAccount/${user}` + 
        `?companyCode=${companycode}` + 
        `&email=${email}`
    );
    const body = await res.json();

    console.log('REQUEST PARAMETERS:', {
      email,
      companyCode: companycode,
    });
    console.log(body);

    expect(res.status()).toBe(200);
    expect(body.Content).toBeDefined();
    expect(body.Content?.Email).toBe(user);

    await api.dispose();
  });
});