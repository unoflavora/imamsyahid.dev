FROM node:lts-alpine3.18 as builder
RUN apk update
RUN apk add git
RUN apk add openssh

WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
