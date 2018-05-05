const redis = require('redis');
const config = require('../settings');
const asyncRedis = require('async-redis');

let client = redis.createClient({
    'host': config.REDIS.HOST,
    'port': config.REDIS.PORT
});

const asyncClient = asyncRedis.decorate(client);

asyncClient.on("error", function (err) {
    console.error("Error " + err);
});

module.exports = asyncClient;