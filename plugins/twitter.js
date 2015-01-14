var Twitter = require('twit');
var debug = true;
var t = new Twitter({
  consumer_key: process.env.TWIT_KEY,
  consumer_secret: process.env.TWIT_SECRET,
  access_token: process.env.TWIT_TOKEN,
  access_token_secret: process.env.TWIT_TOKEN_SECRET
});
var watchSymbols = ['@mediacollegelab', '#malab'];

var stream = t.stream('statuses/filter', { track: watchSymbols})

stream.on('tweet', function (tweet) {
	console.log(tweet)
})

function postTweet(tweet) {
T.post('statuses/update', { status: tweet, }, function(err, data, response) {
  console.log(data)
})
}
