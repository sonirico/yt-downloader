var express = require('express');

const ytdl = require('ytdl-core');
const config = require('../config.js');
const cntrl = require('../controllers/index');
const redisClient = require('../providers/redis');
const asyncHandler = require('../utils/async');

var router = express.Router();


let validate_url = url => { ytdl.validate_url(url); };


router.get('/', (req, res, next) => {
  res.render('index', { title: 'YT Downloader' });
});


let getOrSetVideoInfo = async (url) => {
  await redisClient.select(config.REDIS.DDBB.VIDEO_INFO);

  let res = await redisClient.get(url);

  if (!res) {
    let info = await cntrl.informer.getInfo(url);

    await redisClient.set(url, JSON.stringify(info));

    return info;
  }

  return JSON.parse(res);
};


router.get('/info/', asyncHandler(async (req, res, next) => {
  let url = req.query.url;

  try {
    let info = await getOrSetVideoInfo(url);

    let context = {};
    let duration = parseInt(info.length_seconds);

    context.valid_duration = duration <= 60 * 4;
    context.video = info;

    res.render('info', context);
  } catch (e) {
    console.error('getOrSet', e);
    res.render('error', e);
  }
}));

router.post('/download/', asyncHandler(async (req, res, next) => {
  let video_id = req.body.video_id;

  await cntrl.downloader.download_to_mp3(video_id);

  res.render('index', { title: 'ok' });
}));

module.exports = router;
