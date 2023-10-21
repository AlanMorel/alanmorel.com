FROM node:20.1.0-alpine AS base

ARG ENV

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm ts:check && pnpm build

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["pnpm", "start"]
