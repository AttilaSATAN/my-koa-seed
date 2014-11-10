'use strict';
var Twitter = require('node-twitter'),
  t = new Twitter.StreamClient(
    'vvvL8gX9qmHs2q78GQIvy71s6',
    'yKgKGKamRhstQt8MeJxBmzvLVPPrbqMRyoZkYdc9VidNyvrRIg',
    '270657981-ezJh1y2vvQZDvR3cLRD3SvEE2dJjahlWzn37RXdA',
    'zfo7TnKJ7ZCJqOw6eMfQRt0OlIO06in5vfAShla8iML4k'
  );

t.on('tweet', function(tweet) {
  console.log('Tweet: ', tweet);
});
t.on('close', function() {
    console.log('Connection closed.');
});
t.on('end', function() {
    console.log('End of Line.');
});
t.on('error', function(err) {
  console.log('Oh no', err);
});

t.start(['nodejs']);
console.log('Started');
