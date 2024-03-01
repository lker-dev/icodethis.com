FROM node:20.11.1-alpine3.19

WORKDIR /app

RUN npm install --save-dev parcel

COPY src .

CMD npx parcel index.html
