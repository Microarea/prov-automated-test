# API Tests (Postman + Newman)

## Esecuzione locale
```bash
bash newman/run-api.sh collections/users.postman_collection.json environments/dev.postman_environment.json
```

## Struttura
- `collections/` una per microservizio
- `environments/` local/dev/qa con baseUrl_* e token
- `schemas/` JSON Schema per validazione response
- `scripts/` script riutilizzabili (es. auth)
- `newman/reports/` report HTML e JUnit
```