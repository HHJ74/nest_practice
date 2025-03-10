FROM node:22.13.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . ./

ENTRYPOINT [ "npm", "run", "start" ]

EXPOSE 8080