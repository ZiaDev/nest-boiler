FROM node:12.13-alpine As development

WORKDIR /usr/src/abc

COPY package.json ./

RUN npm install --verbose

COPY . .

RUN npm run build