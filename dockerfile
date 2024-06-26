FROM node:18.19.1-alpine3.19

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . . 
RUN npm run build

CMD [ "npm", "run", "serve" ]
