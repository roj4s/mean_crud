FROM node:latest

MAINTAINER Luis Rojas

WORKDIR /var/www/nodeapp

COPY ./package.json ./

RUN npm install

RUN npm install -g nodemon

EXPOSE 4000

ENTRYPOINT ["nodemon", "./server.js"]
