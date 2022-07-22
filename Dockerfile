FROM node:alpine as base

ARG ENV

WORKDIR /app

COPY package.json yarn.lock ./

RUN npx browserslist@latest --update-db && rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build:client

CMD ["sh", "-c", "yarn cross-env NODE_ENV=production node --loader @bleed-believer/path-alias/esm --experimental-specifier-resolution=node ./server/core/Server.ts"]

FROM base as production
