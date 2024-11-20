FROM node:18-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3000

RUN chmod +x ./dist/broadcast-server.js

ENTRYPOINT [ "./dist/broadcast-server.js" ]