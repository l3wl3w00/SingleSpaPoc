# Build stage
FROM node:20 AS build
WORKDIR /app
COPY common ./common
WORKDIR /app/navbar
COPY navbar/package*.json ./
RUN npm ci --force
COPY navbar .
RUN npm run build:prod

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/navbar/dist ./dist
EXPOSE 4202
CMD ["serve", "-s", "dist", "-l", "4202"]
