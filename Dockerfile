# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY app ./app
COPY bootstrap ./bootstrap
COPY config ./config
COPY database ./database
COPY public ./public
COPY routes ./routes
COPY resources ./resources

RUN npm run build:prod

# ---- Production Stage ----
FROM node:22-alpine

RUN npm install -g pm2

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy the entire dist/ contents as the app root
COPY --from=builder /app/dist/ ./
COPY ecosystem.config.js ./

ENV NODE_ENV=production
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV APP_PORT=3000

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]
