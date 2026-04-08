// api-tests/config/env.ts

export type ServiceName = 'users' | 'mapper' | 'ccbe' | 'gwam'; // aggiungi i servizi che vuoi testare
type EnvKey = 'local' | 'test' | 'release' | 'prod';

type ServiceConfig = { baseUrl: string };

const map: Record<EnvKey, Record<ServiceName, ServiceConfig>> = {
  local: {
    users:    { baseUrl: 'http://localhost:8081' },
    gwam:     { baseUrl: 'http://localhost:8082' },
    mapper:   { baseUrl: 'http://localhost:8083' },
    ccbe:     { baseUrl: 'http://localhost:8084' }
  },
  test: {
    users:    { baseUrl: 'https://test-pippo' },
    gwam:     { baseUrl: 'https://test-gwam.mago.cloud' },
    mapper:   { baseUrl: 'https://test-gwam.mago.cloud/gwam_mapper' },
    ccbe:     { baseUrl: 'https://test-console.mago.cloud/be' }
  },
  release: {
    users:    { baseUrl: 'https://release-pippo' },
    gwam:     { baseUrl: 'https://release-gwam.mago.cloud' },
    mapper:   { baseUrl: 'https://qa.api.acme.com/orders' },
    ccbe:     { baseUrl: 'https://release-console.mago.cloud/be' }
  },
  prod: {
    users:    { baseUrl: 'https://pippo' },
    gwam:     { baseUrl: 'manz8-https://gwam.mago.cloud' },
    mapper:   { baseUrl: 'https://api.acme.com/orders' },
    ccbe:     { baseUrl: 'manz8-https://console.mago.cloud/be' }
  }
};

export function getEnvKey(): EnvKey {
  const key = (process.env.TEST_ENV || 'test').toLowerCase() as EnvKey;
  return (['local', 'test', 'release', 'prod'] as EnvKey[]).includes(key) ? key : 'test';
}

export function getServiceConfig(service: ServiceName): ServiceConfig {
  return map[getEnvKey()][service];
}