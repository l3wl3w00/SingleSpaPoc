# Build stage
FROM node:20 AS build
WORKDIR /app/root
COPY root/package*.json ./
RUN npm ci --force
COPY common ../common
COPY root .
RUN npm run build:prod

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/root/dist ./dist
EXPOSE 9000
CMD ["serve", "-s", "dist", "-l", "9000"]
