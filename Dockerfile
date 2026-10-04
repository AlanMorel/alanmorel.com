FROM oven/bun:1.4 AS base

WORKDIR /usr/src/app

ENV NODE_ENV=production

FROM base AS install

RUN mkdir -p /temp

COPY package.json bun.lock /temp/

WORKDIR /temp

RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

FROM base AS build

COPY --from=install /temp/node_modules ./node_modules

COPY . .

RUN bun ts:check && bun run build

FROM oven/bun:1.4-slim AS app

WORKDIR /usr/src/app

RUN mkdir -p logs && chown bun:bun logs

USER bun

COPY --chown=bun:bun files/ai ./files/ai

COPY --chown=bun:bun --from=build /usr/src/app/.output ./.output

CMD ["bun", ".output/server/index.mjs"]
