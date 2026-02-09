import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import users from '../../../fixtures/users.json';

test.describe('Smoke - Login', () => {
  test('Login valido porta alla dashboard', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.loginAs(users.validAdmin);
    await expect(page).toHaveURL(/dashboard/i);
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  });

  test('Login fallito mostra errore', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.loginAs(users.invalid);
    await login.expectError(/credenziali non valide/i);
  });
});