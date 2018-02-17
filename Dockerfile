FROM node:9.5-alpine
ADD . /app
WORKDIR /app
RUN npm install
CMD npm start
EXPOSE 3000