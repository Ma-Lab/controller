var Twitter = require('twit');
console.log(process.env);
var t = new Twitter({
	consumer_key: process.env.TWIT_KEY,
	consumer_secret: process.env.TWIT_SECRET,
	access_token: process.env.TWIT_TOKEN,
	access_token_secret: process.env.TWIT_TOKEN_SECRET
});
var watchSymbols = ['@mediacollegelab', '#malab'];
var last;
var watchList = {
	total: 0,
	symbols: {}
};

var stream = t.stream('statuses/filter', {
	track: watchSymbols
})

stream.on('tweet', function(tweet) {
 
});
