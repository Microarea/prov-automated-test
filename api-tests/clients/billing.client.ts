import { request } from '@playwright/test';
import { getServiceConfig } from '../config/env';

export async function billingClient() {
  const { baseUrl } = getServiceConfig('billing');
  return request.newContext({ baseURL: baseUrl });
}