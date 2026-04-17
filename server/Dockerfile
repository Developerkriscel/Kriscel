# Server Dockerfile for Express API
FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
EXPOSE 5000

ENV NODE_ENV=production
CMD ["npm", "run", "start"]
