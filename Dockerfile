FROM node:18-alpine as builder
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
ENV CMS_API=https://cms.imamsyahid.dev
RUN npm run build
RUN npm run sitemap

FROM node:18-alpine as runtime
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000
ENTRYPOINT ["/bin/sh", "-c"]
CMD ["npm run start"]
