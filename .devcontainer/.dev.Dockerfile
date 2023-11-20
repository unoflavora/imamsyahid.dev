FROM node:lts-alpine3.18 as builder
RUN apk update
RUN apk add git
RUN apk add openssh

WORKDIR /usr/app
COPY package*.json .
RUN npm install
COPY . .
ENTRYPOINT [ "/bin/sh", "-c" ]
ENV IMAGE_API='http://cmsimamsyahiddev_devcontainer-cms-1:3001'
ENV CMS_API='http://cmsimamsyahiddev_devcontainer-cms-1:3001'
CMD ["npm", "run", "dev"]
