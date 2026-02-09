# QA Automation Template

Template per avviare test **API** (Postman + Newman) e **UI** (Playwright + TypeScript) con struttura pronta all'uso.

## Struttura
- `tests/api-tests`: collection Postman per microservizi, environment, script e report Newman
- `tests/ui-tests`: test E2E con Playwright (Page Object), fixture e configurazioni

## Requisiti
- Node.js 18+ (consigliato 20)
- Postman (opzionale per editing), Newman per esecuzione CLI

## Avvio rapido
### API
```bash
cd tests/api-tests
bash newman/run-api.sh collections/users.postman_collection.json environments/dev.postman_environment.json
```

### UI
```bash
cd tests/ui-tests
npm i
npm run install:pw
npm test
npm run report
```

Per registrare una bozza di test UI:
```bash
npx playwright codegen https://dev.web.acme.com
```