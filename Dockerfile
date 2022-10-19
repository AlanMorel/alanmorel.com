FROM node:alpine as base

ARG ENV

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm ts:check && pnpm build:client

CMD ["sh", "-c", "pnpm cross-env NODE_ENV=production node --loader @bleed-believer/path-alias/esm ./server/core/Server.ts"]

FROM base as production
