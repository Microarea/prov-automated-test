// api-tests/config/env.ts

export type ServiceName = 'mapper' | 'ccbe' | 'gwam' | 'iup' | 'dbtools' | 'gateway' | 'messaging' | 'ping'; // aggiungi i servizi che vuoi testare
type EnvKey = 'local' | 'test' | 'release' | 'prod';

  type ServiceConfig = { baseUrl: string };

const map: Record<EnvKey, Record<ServiceName, ServiceConfig>> = {
  local: {
    gwam:     { baseUrl: 'http://localhost:8082' },
    mapper:   { baseUrl: 'http://localhost:8083' },
    ccbe:     { baseUrl: 'http://localhost:8084' },
    iup:      { baseUrl: 'http://localhost:8085' },
    dbtools:  { baseUrl: 'http://localhost:8086' },
    gateway:  { baseUrl: 'http://localhost:8087' },
    messaging:{ baseUrl: 'http://localhost:8088' },
    ping:     { baseUrl: 'http://localhost:8089' }
  },
  test: {
    gwam:     { baseUrl: 'https://test-gwam.mago.cloud/' },
    mapper:   { baseUrl: 'https://test-gwam.mago.cloud/gwam_mapper/' },
    ccbe:     { baseUrl: 'https://test-console.mago.cloud/' },
    iup:      { baseUrl: 'https://test-instance-updater.mago.cloud/' },
    dbtools:  { baseUrl: 'https://test-dbtools.mago.cloud/' },
    gateway:  { baseUrl: 'https://test-my.mago.cloud/' },
    messaging:{ baseUrl: 'https://test-messaging.mago.cloud/' },
    ping:     { baseUrl: 'https://test-ping.mago.cloud/' }
  },
  release: {
    gwam:     { baseUrl: 'https://release-gwam.mago.cloud/' },
    mapper:   { baseUrl: 'https://release-gwam.mago.cloud/gwam_mapper/' },
    ccbe:     { baseUrl: 'https://release-console.mago.cloud/' },
    iup:      { baseUrl: 'https://release-instance-updater.mago.cloud/' },
    dbtools:  { baseUrl: 'https://release-dbtools.mago.cloud/' },
    gateway:  { baseUrl: 'https://release-my.mago.cloud/' },
    messaging:{ baseUrl: 'https://release-messaging.mago.cloud/' },
    ping:     { baseUrl: 'https://release-ping.mago.cloud/' }
  },
  prod: {
    gwam:     { baseUrl: 'https://gwam.mago.cloud/' },
    mapper:   { baseUrl: 'https://gwam.mago.cloud/gwam_mapper/' },
    ccbe:     { baseUrl: 'https://console.mago.cloud/' },
    iup:      { baseUrl: 'https://instance-updater.mago.cloud/' },
    dbtools:  { baseUrl: 'https://dbtools.mago.cloud/' },
    gateway:  { baseUrl: 'https://my.mago.cloud/' },
    messaging:{ baseUrl: 'https://messaging.mago.cloud/' },
    ping:     { baseUrl: 'https://pings.mago.cloud/' }
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