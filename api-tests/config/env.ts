// api-tests/config/env.ts

export type ServiceName = 'users' | 'billing' | 'mapper' | 'ccbe'; // aggiungi i servizi che vuoi testare
type EnvKey = 'local' | 'test' | 'release' | 'prod';

type ServiceConfig = { baseUrl: string };

const map: Record<EnvKey, Record<ServiceName, ServiceConfig>> = {
  local: {
    users:    { baseUrl: 'http://localhost:8081' },
    billing:  { baseUrl: 'http://localhost:8082' },
    mapper:   { baseUrl: 'http://localhost:8083' },
    ccbe:     { baseUrl: 'http://localhost:8084' }
  },
  test: {
    users:    { baseUrl: 'https://test-pippo' },
    billing:  { baseUrl: 'https://dev.api.acme.com/billing' },
    mapper:   { baseUrl: 'https://test-gwam.mago.cloud/gwam_mapper' },
    ccbe:     { baseUrl: 'https://test-console.mago.cloud/be' }
  },
  release: {
    users:    { baseUrl: 'https://release-pippo' },
    billing:  { baseUrl: 'https://qa.api.acme.com/billing' },
    mapper:   { baseUrl: 'https://qa.api.acme.com/orders' },
    ccbe:     { baseUrl: 'https://qa.api.acme.com/payments' }
  },
  prod: {
    users:    { baseUrl: 'https://pippo' },
    billing:  { baseUrl: 'https://api.acme.com/billing' },
    mapper:   { baseUrl: 'https://api.acme.com/orders' },
    ccbe:     { baseUrl: 'https://api.acme.com/payments' }
  }
};

export function getEnvKey(): EnvKey {
  const key = (process.env.TEST_ENV || 'dev').toLowerCase() as EnvKey;
  return (['local', 'dev', 'qa', 'prod'] as EnvKey[]).includes(key) ? key : 'dev';
}

export function getServiceConfig(service: ServiceName): ServiceConfig {
  return map[getEnvKey()][service];
}