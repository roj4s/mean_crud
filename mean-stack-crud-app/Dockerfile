FROM node:latest

MAINTAINER Luis Rojas

WORKDIR /var/www/frontend

COPY ./package.json ./

RUN npm install

EXPOSE 4200

ENTRYPOINT ["npm", "start"]
