#!/bin/sh


docker run \
  -p 3333:3000 \
  --rm \
  -it \
  --net yt_webnet \
  --mount type=bind,source="$(pwd)"/app,target=/yt \
  --name yt_web_1 \
  yt_web \
  sh
;
