# Use Node.js 20 LTS
FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./
COPY api-tests/package*.json ./api-tests/

# Install dependencies
RUN npm ci

RUN npx playwright install --with-deps chromium

COPY . .

WORKDIR /app/api-tests

CMD ["npx", "playwright", "test"]
