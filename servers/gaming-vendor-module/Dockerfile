FROM node:latest

ENV NODE_ENV=production

WORKDIR /gaming-vendor-module

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["sh", "-c", "node index.js && npm start"]

