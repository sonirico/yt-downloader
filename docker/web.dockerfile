FROM node:9.5-alpine

## ffmpeg https://ffmpeg.org/
RUN apk add --update --no-cache ffmpeg

ADD ./app /yt

WORKDIR /yt

RUN npm install
CMD npm start

EXPOSE 3000