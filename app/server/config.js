let config_module = process.env.NODE_ENV || "develop";

module.exports = require('./settings/' + config_module);