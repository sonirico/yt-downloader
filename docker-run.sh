#!/bin/sh


docker run \
  -p 3333:3000 \
  -it \
  --mount type=bind,source="$(pwd)"/app,target=/yt \
  --name yt_web_1 \
  test \
  bash
;