#!/bin/bash

function run () {
  docker run \
    -p 3333:3000 \
    --rm \
    -it \
    --net ytdownloader_yt_web_net \
    --mount type=bind,source="$(pwd)"/app,target=/yt \
    --name ytdownloader_web_1 \
    yt_web \
    sh
};

function build () {
  docker build \
    -f docker/web-no-compose.dockerfile \
    -t ytdownloader_web_1 .

}


if [ $# -eq 0 ] || [ "$1" == "run" ]; then
  run;
else
  build;
fi