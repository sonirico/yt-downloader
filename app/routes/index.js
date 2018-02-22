var express = require('express');
var router = express.Router();
var youtubedl = require('youtube-dl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YT Downloader' });
});

router.get('/info/', (req, res, next) => {
  let url = req.query.url;
  console.log(url);



  // var url = 'http://www.youtube.com/watch?v=WKsjaOqDXgg';
  // Optional arguments passed to youtube-dl.
  var options = ['--username=user', '--password=hunter2'];
  options = [];

  youtubedl.getInfo(url, options, function(err, info) {
    if (err) throw err;

    // console.log(info);

    // console.log('id:', info.id);
    // console.log('title:', info.title);
    // console.log('url:', info.url);
    // console.log('thumbnail:', info.thumbnail);
    // console.log('description:', info.description);
    // console.log('filename:', info._filename);
    // console.log('format id:', info.format_id);

    res.render('info', info);
  });
});

module.exports = router;
