# 使用基础的Node.js镜像
FROM node:20.9.0 AS build
WORKDIR /app

RUN npm install tyarn -g

COPY . ./
RUN tyarn

ENV NODE_ENV production
ENV NODE_OPTIONS --openssl-legacy-provider

RUN tyarn run build

FROM nginx
COPY --from=build /build /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80