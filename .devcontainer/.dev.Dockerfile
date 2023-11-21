FROM node:lts-alpine3.18 as builder
RUN apk update
RUN apk add git
RUN apk add openssh

WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
ENTRYPOINT [ "/bin/sh", "-c" ]
CMD ["npm", "run", "dev"]
