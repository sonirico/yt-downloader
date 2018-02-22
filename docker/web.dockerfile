FROM node:9.5-alpine

# Install python3 dependencies for
# youtube_dl library https://rg3.github.io/youtube-dl/
RUN apk add --no-cache python python-dev python3 python3-dev \
    linux-headers build-base bash git ca-certificates && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    rm -r /root/.cache

RUN pip install --upgrade youtube_dl

ADD ./app /yt
WORKDIR /yt
RUN npm install
CMD npm start
EXPOSE 3000