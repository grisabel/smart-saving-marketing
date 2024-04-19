FROM node:21-alpine3.18

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
RUN npm build

CMD [ "npm", "run", "serve" ]
