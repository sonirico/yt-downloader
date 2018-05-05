const config = require('../settings');
const readline = require('readline');
const ytdl     = require('ytdl-core');
const ffmpeg   = require('fluent-ffmpeg');
const asyncHandler = require('../utils/async');
const redisClient = require('../providers/redis');

async function getOrSetAudioById (video_id) {
    await redisClient.select(config.REDIS.DDBB.AUDIO_FILES);

    let res = await redisClient.get(video_id);

    if (! res) {
        let info = await cntrl.informer.getInfo(url);

        await redisClient.set(url, JSON.stringify(info));

        return info;
    }

    return JSON.parse(res);
};

async function download_to_mp3 (video_id) {
    let stream = ytdl(video_id, {
      quality: 'highestaudio',
      //filter: 'audioonly',
    });

    let start = Date.now();
    let audio_path = `/srv/${video_id}.mp3`

    return new Promise((res, rej) => {
        ffmpeg(stream)
            .audioBitrate(128)
            .save(audio_path)
            .on('progress', (p) => {
                readline.cursorTo(process.stdout, 0);
                process.stdout.write(`${p.targetSize}kb downloaded`);
            })
            .on('end', () => {
                console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`);
                res();
            });
    });
}

module.exports.download_to_mp3 = download_to_mp3;