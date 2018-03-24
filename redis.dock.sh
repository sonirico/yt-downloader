#!/bin/bash

function run () {
  docker run -it \
    --rm \
    -p 6379:6379 \
    -v "$(pwd)/data":/data \
    --net ytdownloader_yt_web_net \
    --name ytdownloader_redis_1 \
    redis redis-server
};

function build () {
  docker build \
    -f docker/web-no-compose.dockerfile \
    -t ytdownloader_redis_1 .
}


if [ $# -eq 0 ] || [ "$1" == "run" ]; then
  run;
else
  build;
fi