FROM node:alpine as base

ARG ENV

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm build

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["sh", "-c", "pnpm cross-env NODE_ENV=production next start -p 8080"]

FROM base as production
