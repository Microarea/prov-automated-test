import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['html'], ['junit', { outputFile: 'reports/results.xml' }]],
  workers: 4
});