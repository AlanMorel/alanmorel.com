FROM node:alpine as base

WORKDIR /app

RUN npm install pm2@latest --global

COPY package.json yarn.lock ./

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build-all

CMD ["yarn", "start"]

FROM base as production