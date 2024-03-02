FROM node:20.11.1-alpine3.19

WORKDIR /app

RUN npm -g install parcel

COPY . .

ENTRYPOINT ["parcel", "src/index.html"]

