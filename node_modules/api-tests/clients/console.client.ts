/// <reference types="node" />

import { request, APIRequestContext } from '@playwright/test';
import { getServiceConfig } from '../config/env';

export async function consoleClient(): Promise<APIRequestContext> {
  const jwt = process.env.API_JWT;

  if (!jwt) {
    throw new Error('API_JWT non impostato');
  }

  const { baseUrl } = getServiceConfig('ccbe');

  const authPayload = {
    Type: 'JWT',
    AppId: 'M4',
    SecurityValue: jwt
  };

  return request.newContext({
    baseURL: baseUrl,
    extraHTTPHeaders: {
      Authorization: JSON.stringify(authPayload)
    }
  });
}