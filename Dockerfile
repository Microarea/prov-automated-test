FROM mcr.microsoft.com/playwright:v1.48.0-jammy
WORKDIR /app
COPY package*.json ./
COPY api-tests/package*.json ./api-tests/
RUN npm ci
COPY . .
WORKDIR /app/api-tests
CMD ["npx", "playwright", "test"]
