# Build stage
FROM node:20 AS build
WORKDIR /app
COPY common ./common
WORKDIR /app/dino-list
COPY dino-list/package*.json ./
RUN npm ci --force
COPY dino-list .
RUN npm run build:prod

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dino-list/dist/dino-list ./dist
EXPOSE 4201
CMD ["serve", "-s", "dist", "-l", "4201"]
