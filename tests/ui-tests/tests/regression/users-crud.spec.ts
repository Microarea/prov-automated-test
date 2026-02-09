import { test, expect } from '@playwright/test';

// Scheletro di test CRUD utenti - da adattare alla tua app

test.describe('Regression - Users CRUD', () => {
  test('Crea un nuovo utente', async ({ page }) => {
    await page.goto('/users');
    await page.getByRole('button', { name: /nuovo utente/i }).click();
    await page.getByLabel(/email/i).fill('nuovo.utente@example.com');
    await page.getByLabel(/ruolo/i).selectOption('editor');
    await page.getByRole('button', { name: /salva/i }).click();
    await expect(page.getByText(/creato con successo/i)).toBeVisible();
  });
});