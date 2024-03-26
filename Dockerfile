FROM node:18-alpine AS builder
WORKDIR /src
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
VOLUME ["/app/conf.d"]
COPY --from=builder /src/.output /app/.output
ENV NITRO_HOST "0.0.0.0"
ENV NITRO_PORT 3000
EXPOSE 3000
ENTRYPOINT ["node", ".output/server/index.mjs"]