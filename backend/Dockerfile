FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm i
# RUN npm i express
# RUN npm i nodemon -D
RUN npm i -g nodemon
RUN npm i -g express -D

CMD ["npx", "nodemon", "server"]