FROM python:3.6.4-alpine3.7
ADD . /app
WORKDIR /app
RUN npm install
CMD npm start
EXPOSE 3000