FROM node:18-bookworm-slim as builder
RUN apt-get -y update; apt-get -y install curl; apt-get -y install unzip
#aws
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip
RUN ./aws/install && aws --version

#build
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
ENV CMS_API=https://cms.imamsyahid.dev
RUN npm run build
RUN npm run sitemap

#cdn
RUN --mount=type=secret,id=github_token \
    aws configure set default.region ${aws_region} \
    aws configure set aws_access_key_id ${aws_access_key_id} \
    aws configure set aws_secret_access_key ${aws_secret_access_key} \
    aws configure set default.output json \
    aws s3 cp /app/.next s3://${aws_bucket}/app/_next --recursive

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
