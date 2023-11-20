FROM node:lts-alpine as development
WORKDIR /var/www/html

# Layer for node_modules
ADD package.json .
ADD yarn.lock .
RUN yarn install --prefer-offline --frozen-lockfile --non-interactive --production=false

EXPOSE 3000

CMD ["yarn", "dev"]

FROM node:lts-alpine as build
WORKDIR /app

# Layer for node_modules
ADD package.json .
ADD yarn.lock .
RUN yarn install --prefer-offline --frozen-lockfile --non-interactive --production=false

ADD . .
RUN yarn build

FROM nginx:stable-alpine
WORKDIR /var/www/html

COPY --from=build /app/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]