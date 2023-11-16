# Development
FROM node:lts-alpine as development
WORKDIR /var/www/html

# Layer for node_modules
ADD package.json .
ADD yarn.lock .
RUN yarn install --prefer-offline --frozen-lockfile --non-interactive --production=false

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "dev"]

# Build stage
FROM node:lts-alpine as build
WORKDIR /app

# Layer for node_modules
ADD package.json .
ADD yarn.lock .
RUN yarn install --prefer-offline --frozen-lockfile --non-interactive --production=false

# Build project
ADD . .
RUN yarn build

# Production
FROM node:lts-alpine
WORKDIR /var/www/html

COPY --from=build /app/.output .

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]