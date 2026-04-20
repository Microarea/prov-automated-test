/// <reference types="node" />

import { request, APIRequestContext } from '@playwright/test';
import { getServiceConfig } from '../config/env';
import { getJwtToken } from './auth.client';

export async function mapperClient(): Promise<APIRequestContext> {
  const { baseUrl } = getServiceConfig('mapper');

  const jwt = await getJwtToken();

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