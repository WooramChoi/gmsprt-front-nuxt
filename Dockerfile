FROM node:18-alpine AS builder
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /src/.output /app/.output
ENV NITRO_HOST "0.0.0.0"
ENV NITRO_PORT 3000
ENV NUXT_PROJECT_ID ""
ENV NUXT_CLIENT_EMAIL ""
ENV NUXT_PRIVATE_KEY ""
EXPOSE $NITRO_PORT
ENTRYPOINT ["node", ".output/server/index.mjs"]