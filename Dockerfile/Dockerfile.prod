# Dockerfile.prod
FROM node:16.20.2-alpine3.18 AS build

WORKDIR /app

# 종속성 패키지 설치
COPY ./package*.json .
RUN npm install

# 빌드하기
COPY . .
RUN npm run build

# 빌드 결과물 불러와서 nginx에 올리기
FROM nginx:stable-alpine3.17-slim
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
