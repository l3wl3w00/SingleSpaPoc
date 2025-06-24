# Build stage
FROM node:20 AS build
WORKDIR /app
COPY common ./common
WORKDIR /app/home
COPY home/package*.json ./
RUN npm ci --force
COPY home .
RUN npm run build:prod

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/home/dist ./dist
EXPOSE 4200
CMD ["serve", "-s", "dist", "-l", "4200"]
