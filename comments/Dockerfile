# Build stage
FROM node:20 AS build
WORKDIR /app
COPY common ./common
WORKDIR /app/comments
COPY comments/package*.json ./
RUN npm ci --force
COPY comments .
RUN npm run build

# Production stage
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/comments/dist ./dist
EXPOSE 4204
CMD ["serve", "-s", "dist", "-l", "4204"]
