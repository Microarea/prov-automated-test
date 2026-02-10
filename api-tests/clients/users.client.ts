// api-tests/clients/users.client.ts
import { request } from '@playwright/test';
import { getServiceConfig } from '../config/env';

export async function usersClient() {
  const { baseUrl } = getServiceConfig('users');
  return request.newContext({ baseURL: baseUrl });
}