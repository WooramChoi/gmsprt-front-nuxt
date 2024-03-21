FROM node:18-alpine

RUN mkdir app
WORKDIR app
COPY plugins .
COPY public .
COPY server .
COPY app.vue .
COPY nuxt.config.ts .
COPY package.json .
COPY tsconfig.json .

RUN npm install
RUN npm run build

ENV NITRO_HOST "0.0.0.0"
ENV NITRO_PORT 3000
EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]