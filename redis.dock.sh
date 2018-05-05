#!/bin/bash

function run () {
  docker run -it \
    --rm \
    -p 6379:6379 \
    -v "$(pwd)/data":/data \
    --net ytdownloader_yt_web_net \
    --name ytdownloader_redis_1 \
    --network-alias redis \
    --network-alias redis_db \
    redis sh
};

run;