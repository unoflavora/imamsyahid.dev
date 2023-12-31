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
RUN --mount=type=secret,id=aws_region \
    aws configure set default.region "$(cat /run/secrets/aws_region)"
RUN --mount=type=secret,id=aws_access_key_id \
    aws configure set aws_access_key_id "$(cat /run/secrets/aws_access_key_id)"
RUN --mount=type=secret,id=aws_secret_access_key \
    aws configure set aws_secret_access_key "$(cat /run/secrets/aws_secret_access_key)"
RUN aws configure set default.output json
RUN --mount=type=secret,id=aws_bucket \
    aws s3 rm s3://"$(cat /run/secrets/aws_bucket)"/app --recursive
RUN --mount=type=secret,id=aws_bucket \
    aws s3 cp /app/.next/static s3://"$(cat /run/secrets/aws_bucket)"/app/_next/static --recursive --acl public-read

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
