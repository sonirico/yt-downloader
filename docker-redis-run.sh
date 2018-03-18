#!/bin/sh

docker run -it \
    --rm \
    -p 6379:6379 \
    -v "$(pwd)/data":/data \
    --net yt_webnet \
    --name yt_redis_1 \
    yt_redis \
    redis-server