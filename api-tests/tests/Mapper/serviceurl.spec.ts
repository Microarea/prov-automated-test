import { test, expect } from '@playwright/test';
import { mapperClient } from '../../clients/mapper.client';
import parameters from '../../data/parameters.json';


//Questa API serve, data una subscription ed un service type, a farsi tornare URL dello specifico servizio indicato. Usata da diversi servizi come MDM, DBTOOLS, ecc
test('GET serviceURL returns 200', async () => {
  
  const api = await mapperClient();
  const subscription = parameters.cloudConsole.subscriptionCode;
  const service = parameters.cloudConsole.service;
  const res = await api.get(
    `api/services/url/${subscription}/${service}`
  );

  console.log('REQUEST URL:', res.url());
  console.log('STATUS:', res.status());

  expect(res.status()).toBe(200);

  // leggo il body
  const body = await res.json();
  console.log(body);

  // controllo che Content esista
  expect(body.Content).toBeDefined();
  expect(body.Content).not.toBeNull();

  // controllo che sia una stringa
  expect(typeof body.Content).toBe('string');

  // controllo che sia una URL valida
  expect(() => new URL(body.Content)).not.toThrow();

  await api.dispose();
});