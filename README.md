# QA Automation – Playwright (API & UI)

Questo repository contiene il framework di test automatici API e UI basato su Playwright
per il progetto 13313 di test automatici per il provisioning.

Il progetto è pensato per essere:
- utilizzato anche dai testatori
- scalabile nel tempo
- sicuro (gestione del token e delle login senza dati sensibili hardcoded)
- utilizzabile in locale e in CI/CD

---

## Obiettivi del progetto

- Automatizzare i test API dei microservizi
- Automatizzare i test UI end-to-end
- Usare un unico strumento (Playwright)
- Supportare più ambienti (dev / test / release / prod)
- Evitare hardcode di URL, token e credenziali
- Rendere il progetto manutenibile

---

## Architettura del framework

Il framework è strutturato come segue:

config/   → definisce DOVE puntano i test (ambienti, baseURL)  
clients/  → definisce COME chiamare le API (auth, token, header)  
tests/    → definisce COSA verificare (logica dei test)

Regola fondamentale:
I test NON devono mai contenere URL, token, password o logica di autenticazione.

---

## Requisiti
- Node.js 18+ (consigliato 20)
- VS Code

---

## Struttura del repository

api-tests/
├── config/
│   └── env.ts                # mapping ambienti → servizi
│
├── clients/
│   ├── auth.client.ts        # login e gestione JWT
│   ├── console.client.ts     # client API 
│   └── ...
│
└── tests/
    ├── console/
    │   ├── health.spec.ts
    │   └── subscription-package.spec.ts
    └── ...

(UI tests sono organizzati in modo analogo sotto ui-tests/)

---

## Gestione degli ambienti

Gli ambienti sono gestiti tramite la variabile d’ambiente TEST_ENV.

Valori supportati:
- dev
- test
- release
- prod

Esempi di esecuzione:

Windows PowerShell:
$env:TEST_ENV="release"; npx playwright test

Tutti gli URL dei servizi sono definiti esclusivamente in config/env.ts.

---

## Autenticazione

Il progetto è fornito dell'autenticazione gwam.

### Come funziona

1. Viene eseguita una chiamata POST /login verso il gwam login 
2. La risposta contiene un campo JwtToken
3. Il token viene:
   - estratto dalla response
   - validato
   - cachato in memoria per l’intera esecuzione
4. Il token viene inserito negli header delle API nel formato richiesto dal backend

### File coinvolti

- clients/auth.client.ts  
  Responsabile della login GWAM e del recupero del JwtToken

- client generico
  Usa il JwtToken per autenticare le chiamate alla Console API

Regole:
- Il token non deve mai essere scritto nei test
- Il token non deve mai essere committato
- Il login deve avvenire automaticamente tramite client

---

## Variabili d’ambiente richieste

Prima di eseguire i test è necessario impostare:

GWAM_USER=<accountName>
GWAM_PASSWORD=<password>

Opzionale:
TEST_ENV=dev | test | release | prod

---

## Scrittura dei test

Esempio di test corretto:

const api = await consoleClient();
const res = await api.get('/be/api/**chiamata api**/**eventuali parametri**');
expect(res.status()).toBe(200);

Il test:
- non conosce il baseURL
- non conosce il token
- non conosce il login
- verifica solo il comportamento dell’API

---

## Esecuzione dei test

Tutti i test API:
npx playwright test

Una “collection” (cartella):
npx playwright test api-tests/tests/console

Un singolo test:
npx playwright test api-tests/tests/console/subscription-package.spec.ts

---

## Report HTML

Dopo l’esecuzione dei test viene generato automaticamente un report HTML.

Per aprirlo:
npx playwright show-report

Il report include:
- elenco test passati / falliti
- struttura per cartelle
- dettagli sugli errori
- log di esecuzione

---

## Regole di contributo

- Non hardcodare URL nei test
- Non hardcodare token o password
- Usare sempre env.ts per i baseURL
- Usare i client per l’autenticazione
- Un file di test per endpoint
- I test devono essere deterministici e ripetibili
- Ogni modifica deve mantenere la compatibilità CI/CD

---

## Roadmap

Fase attuale:
- Health check dei servizi
- Test API autenticati
- Login automatico

Prossimi step:
- Parametrizzazione degli ID
- Test negativi (401 / 403 / 404)
- Gestione scadenza token
- Integrazione CI/CD

---

## NB

### Per reperire il token è necessario mettere le credenziali. 
    Nella powershell inserire: 
    $env:GWAM_USER="giovanni.farina@zucchetti.com"
    $env:GWAM_PASSWORD="password"
    I dati devono essere tra virgolette e tutto su una riga.
    Ed in coda lanciare l’npx con il test. 

### Per far uscire l’html con il report verificare di lanciare lo “show report” nella cartella giusta. 
    cd api-tests
    npx playwright test ….
    npx playwright show-report
    (in Teoria, se c’è errore si apre in automatico, altrimenti rimane il link con la possibilità di consultarlo nella powershell)
