let config_module = process.env.SETTINGS || 'default';

module.exports = require(`./settings/${config_module}`);