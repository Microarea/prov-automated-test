# UI Tests (Playwright)

## Comandi
```bash
npm i
npm run install:pw
npm test       # esegue tutti i test
npm run smoke  # solo smoke su Chromium
npm run report # apre il report HTML
```

## Ambiente
Usa `TEST_ENV` per puntare a local/dev/qa (vedi `configs/env.ts`).
```bash
TEST_ENV=qa npm test
```

## Convenzioni
- Page Object in `pages/`
- Dati di test in `fixtures/`
- Test organizzati in `tests/smoke` e `tests/regression`
- Artifacts in `reports/`
```