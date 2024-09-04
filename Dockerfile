FROM node:20.1.0-alpine AS base

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g pnpm@9.7.1

FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

FROM base AS builder

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN pnpm ts:check && pnpm build

FROM base AS app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./.env
COPY --from=builder /app/package.json ./package.json

CMD ["pnpm", "start"]
