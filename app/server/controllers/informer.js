const ytdl = require('ytdl-core');

function getInfo (url, options=[]) {
    return ytdl.getInfo(url, options);
}

module.exports = {
    'getInfo': getInfo
};