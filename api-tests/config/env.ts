// api-tests/config/env.ts

export type ServiceName = 'users' | 'mapper' | 'ccbe' | 'gwam' | 'iup'; // aggiungi i servizi che vuoi testare
type EnvKey = 'local' | 'test' | 'release' | 'prod';

type ServiceConfig = { baseUrl: string };

const map: Record<EnvKey, Record<ServiceName, ServiceConfig>> = {
  local: {
    users:    { baseUrl: 'http://localhost:8081' },
    gwam:     { baseUrl: 'http://localhost:8082' },
    mapper:   { baseUrl: 'http://localhost:8083' },
    ccbe:     { baseUrl: 'http://localhost:8084' },
    iup:      { baseUrl: 'http://localhost:8085' }
  },
  test: {
    users:    { baseUrl: 'https://test-pippo' },
    gwam:     { baseUrl: 'https://test-gwam.mago.cloud' },
    mapper:   { baseUrl: 'https://test-gwam.mago.cloud/gwam_mapper/' },
    ccbe:     { baseUrl: 'https://test-console.mago.cloud/' },
    iup:      { baseUrl: 'https://test-instance-updater.mago.cloud/' }
  },
  release: {
    users:    { baseUrl: 'https://release-pippo' },
    gwam:     { baseUrl: 'https://release-gwam.mago.cloud' },
    mapper:   { baseUrl: 'https://release-gwam.mago.cloud/gwam_mapper/' },
    ccbe:     { baseUrl: 'https://release-console.mago.cloud/' },
    iup:      { baseUrl: 'https://release-instance-updater.mago.cloud/' }
  },
  prod: {
    users:    { baseUrl: 'https://pippo' },
    gwam:     { baseUrl: 'manz8-https://gwam.mago.cloud' },
    mapper:   { baseUrl: 'manz8-https://gwam.mago.cloud/gwam_mapper/' },
    ccbe:     { baseUrl: 'manz8-https://console.mago.cloud/' },
    iup:      { baseUrl: 'manz8-https://instance-updater.mago.cloud/' }
  }
};

export function getEnvKey(): EnvKey {
  console.log('TEST_ENV =', process.env.TEST_ENV);
  const key = (process.env.TEST_ENV || 'test').toLowerCase() as EnvKey;
  return (['local', 'test', 'release', 'prod'] as EnvKey[]).includes(key) ? key : 'test';
}

export function getServiceConfig(service: ServiceName): ServiceConfig {
  return map[getEnvKey()][service];
}