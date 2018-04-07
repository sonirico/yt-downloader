# docker file intended to be used when no compose file
# is present
FROM node:9.5-alpine

## ffmpeg https://ffmpeg.org/
RUN apk add --update --no-cache ffmpeg

ADD ./app /yt

WORKDIR /yt

RUN npm install
CMD npm start

EXPOSE 3333
EXPOSE 8080

VOLUME ["/yt"]