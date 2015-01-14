var Twitter = require('twit');
var debug = true;
var t = new Twitter({
	consumer_key: process.env.TWIT_KEY,
	consumer_secret: process.env.TWIT_SECRET,
	access_token: process.env.TWIT_TOKEN,
	access_token_secret: process.env.TWIT_TOKEN_SECRET
});
var watchSymbols = ['@mediacollegelab', '#malab'];
var tweets = [];
var watchList = {
	total: 0,
	symbols: {}
};

var stream = t.stream('statuses/filter', {
	track: watchSymbols
})

stream.on('tweet', function(tweet) {
		var claimed = false;
		if (tweet.text !== undefined) {
			var text = tweet.text.toLowerCase();
			_.each(watchSymbols, function(v) {
				if (text.indexOf(v.toLowerCase()) !== -1) {
					watchList.symbols[v]++;
					claimed = true;
				}
			});
			if (claimed) {
				watchList.total++;
				var i = watchList.total;
				var tweetformat = "@" + tweet.user.screen_name + ": " + text;
				console.log("New tweet: " + tweetformat);
				console.log(watchList);
			}
		})

	function postTweet(tweet) {
		T.post('statuses/update', {
			status: tweet,
		}, function(err, data, response) {
			console.log(data)
		})
	}
