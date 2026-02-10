import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login smoke', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('admin@example.com', 'password');
  await expect(page).toHaveURL(/dashboard/);
});