export type EnvConfig = { appUrl: string; apiUrl: string };

const map: Record<string, EnvConfig> = {
  local: { appUrl: 'http://localhost:4200', apiUrl: 'http://localhost:8080' },
  dev:   { appUrl: 'https://dev.web.acme.com', apiUrl: 'https://dev.api.acme.com' },
  qa:    { appUrl: 'https://qa.web.acme.com',  apiUrl: 'https://qa.api.acme.com' }
};

export const getEnv = (key: string): EnvConfig => map[key] ?? map.dev;