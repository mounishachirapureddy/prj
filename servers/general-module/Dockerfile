FROM node:latest

ENV NODE_ENV=production

WORKDIR /general-module

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3004

CMD ["sh", "-c", "node app.js && npm start"]
