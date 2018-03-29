module.exports = {
    REDIS: {
        HOST: process.env.REDIS_HOST || 'redis',
        PORT: process.env.REDIS_PORT || 6379,
        DDBB: {
            VIDEO_INFO: process.env.REDIS_VIDEO_INFO_DB || 0,
            AUDIO_FILE: process.env.REDIS_AUDIO_FILE_DB || 1,
        }
    }
};