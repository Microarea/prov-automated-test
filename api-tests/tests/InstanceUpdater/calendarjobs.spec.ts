import { test, expect } from '@playwright/test';
import { iupClient } from '../../clients/iup.client';

//Questa API serve per la discovery, nel caso non risponda nessuno riesce a reperire i servizi. 
test('GET calendarjobs returns 200', async () => {
  const api = await iupClient();

  const res = await api.get(
    'be/api/calendarjobs?SubscriptionKey=DEV-24-08F692'
  );

  console.log('REQUEST URL:', res.url());
  console.log('STATUS:', res.status());

  expect(res.status()).toBe(200);
  console.log(await res.json());

  await api.dispose();
});