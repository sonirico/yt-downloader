var express = require('express');
var router = express.Router();

const redis_cli = require('redis').createClient(6379, 'yt_redis_1');

const ytdl = require('ytdl-core');
const cntrl = require('../controllers');

let validate_url = function (url) {
  return ytdl.validate_url(url);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YT Downloader' });
});



router.get('/info/', (req, res, next) => {
  let url = req.query.url;

  cntrl.informer.getInfo(url).then((info) => {
    // Set info to redis
    redis_cli.set(url, JSON.stringify(info), (err, res) => {
      console.log(err, res);
    });

    //
    let context = {};
    let duration = parseInt(info.length_seconds);

    context.valid_duration = duration <= 60 * 4;
    context.video = info;

    res.render('info', context);

  }).catch((err) => {
    console.error(err);
    res.render('error', err);
  });
});

router.post('/download/', (req, res, next) => {
  let video_id = req.body.video_id;


  // redis video id
});

module.exports = router;
