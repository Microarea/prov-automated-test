import { request, APIRequestContext, expect } from '@playwright/test';
import { getEnv } from '../configs/env';

export async function createApiClient(envKey = process.env.TEST_ENV || 'dev') {
  const { apiUrl } = getEnv(envKey);
  const ctx: APIRequestContext = await request.newContext({ baseURL: apiUrl });
  return {
    async login(email: string, password: string) {
      const res = await ctx.post('/auth/login', { data: { email, password } });
      expect(res.ok()).toBeTruthy();
      const body = await res.json();
      return { token: body.token as string };
    },
    async dispose() { await ctx.dispose(); }
  };
}