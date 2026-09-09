import { test, expect } from '@playwright/test';
import { portalClient } from '../../../clients/portal.client';
import parameters from '../../../data/parameters.json';

test('Get Improvement Requests', async () => {
  const api = await portalClient();

//l'utente autorizzato a fare la chiamata è quello settato nelle variabili d'ambiente
  const user = process.env.GWAM_USER;
  const productCode = parameters.GetImprovementRequests.productCode;
  const companyCode = parameters.GetImprovementRequests.companyCode;
  const status = parameters.GetImprovementRequests.status;
  const searchString = parameters.GetImprovementRequests.searchString;
  const ProxyAuthToken = parameters.magoPortal.ProxyAuthToken;
  
  const res = await api.post(
    `be/api/getImprovementRequests/${user}` + 
      `?productCode=${encodeURIComponent(productCode)}` +
      `&companyCode=${encodeURIComponent(companyCode)}` +
      `&status=${encodeURIComponent(status)}` +
      `&searchString=${encodeURIComponent(searchString)}`,
    {
      data: {
        ProxyAuthToken
      }
    }
  );

  expect(res.status()).toBe(200);

  const body = await res.json();

  console.log('REQUEST PARAMETERS:', {
    user,
    productCode,
    companyCode,
    status,
    searchString
  });
  console.log(body);

  await api.dispose();
});