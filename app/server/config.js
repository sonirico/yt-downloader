let config_module = process.env.NODE_ENV;

module.exports = require('./settings/' + config_module);