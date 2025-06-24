# Build stage
FROM node:20 AS build
WORKDIR /app
COPY common ./common
WORKDIR /app/dino-details
COPY dino-details/package*.json ./
RUN npm ci --force
COPY dino-details .
RUN npm run build:prod

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dino-details/dist/dino-details ./dist
EXPOSE 4203
CMD ["serve", "-s", "dist", "-l", "4203"]
