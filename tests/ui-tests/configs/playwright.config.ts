import { defineConfig, devices } from '@playwright/test';
import { getEnv } from './env';

const ENV = process.env.TEST_ENV || 'dev';
const cfg = getEnv(ENV);

export default defineConfig({
  testDir: '../tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  reporter: [
    ['html', { outputFolder: '../reports/html' }],
    ['junit', { outputFile: '../reports/junit/results.xml' }]
  ],
  use: {
    baseURL: cfg.appUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } }
  ],
  workers: 4
});