FROM oven/bun:1.2 AS base

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS deps

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS builder

COPY --from=deps /temp/prod/node_modules ./node_modules
COPY . .

RUN bun ts:check && bun run build

FROM base AS app

COPY --from=deps /temp/prod/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.env ./.env
COPY --from=builder /usr/src/app/package.json ./package.json

CMD ["bun", "start"]
