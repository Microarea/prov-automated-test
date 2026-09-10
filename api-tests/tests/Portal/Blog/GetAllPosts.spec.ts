import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test.describe('Portal > Blog', () => {
  test('Get All Posts', async () => {
    const api = await portalClient();

  //l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
    const user = process.env.GWAM_USER;
    const categorynames = parameters.GetAllPosts.categoryNames;
    
    const res = await api.post(
      `be/api/getAllPosts/${user}` + 
        `?categoryNames=${encodeURIComponent(categorynames)}`
    );

    expect(res.status()).toBe(200);

    const body = await res.json();

    console.log('REQUEST PARAMETERS:', {
      user,
      categoryNames: categorynames,
    });
    console.log(body);

    await api.dispose();
  });
});