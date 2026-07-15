FROM oven/bun:1.2 AS base

WORKDIR /usr/src/app

ENV NODE_ENV=production

FROM base AS deps

WORKDIR /temp/prod

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile --production

FROM base AS builder

COPY --from=deps /temp/prod/node_modules ./node_modules
COPY . .

RUN bun ts:check && bun run build

FROM base AS app

COPY --from=deps --chown=bun:bun /temp/prod/node_modules ./node_modules
COPY --from=builder --chown=bun:bun /usr/src/app/.output ./.output
COPY --from=builder --chown=bun:bun /usr/src/app/files/ai ./files/ai

USER bun

CMD ["bun", ".output/server/index.mjs"]
