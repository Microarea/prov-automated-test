import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.getByLabel(/email/i);
    this.password = page.getByLabel(/password/i);
    this.submit = page.getByRole('button', { name: /accedi|login/i });
    this.error = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async loginAs(user: { email: string; password: string }) {
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.submit.click();
  }

  async expectError(message?: RegExp | string) {
    await expect(this.error).toBeVisible();
    if (message) await expect(this.error).toHaveText(message);
  }
}