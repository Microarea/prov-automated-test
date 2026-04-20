import { request } from '@playwright/test';
import { getServiceConfig } from '../config/env';

let cachedToken: string | null = null;

export async function getJwtToken(): Promise<string> {
  console.log('getJwtToken chiamato, cachedToken =', !!cachedToken);
  cachedToken = null; // SOLO per debug
  //cache: se esiste, riusalo
  if (cachedToken) {
    return cachedToken;
  }

  const user = process.env.GWAM_USER;
  const password = process.env.GWAM_PASSWORD;

  if (!user || !password) {
    throw new Error('Credenziali GWAM non impostate');
  }

  const { baseUrl } = getServiceConfig('gwam');

  const api = await request.newContext({
    baseURL: baseUrl
  });

  const res = await api.post('gwam_login/api/login', {
    data: {
      accountName: user,
      appId: 'CC',
      overwriteLogin: false,
      password,
      token: '',
      version: 3
    }
  });

  if (!res.ok()) {
    throw new Error(`Login GWAM fallita: ${res.status()}`);
  }

  const body = await res.json();
  console.log(JSON.stringify(body?.JwtToken));

  const token = body?.JwtToken;


  if (!token || typeof token !== 'string') {
    console.error('Response login GWAM:', body);
    throw new Error('JwtToken non trovato nella response di login GWAM');
  }

  cachedToken = token;

  await api.dispose();
  return cachedToken;
}
