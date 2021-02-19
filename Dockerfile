FROM node:13.7

WORKDIR /api-server
COPY package*.json /api-server/

RUN npm i
RUN npm install @nestjs/cli -g
CMD [ "yarn", "start:dev"]