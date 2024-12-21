# 使用基础的Node.js镜像
FROM node:20.9.0 AS build
WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com

COPY . ./
RUN yarn config set registry https://registry.npmmirror.com
RUN yarn

ENV NODE_ENV production
ENV NODE_OPTIONS --openssl-legacy-provider

RUN yarn run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80