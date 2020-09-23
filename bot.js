const config = require('./config');
const Twit = require('twit');
const T = new Twit(config);
function retweet() {
    let params = {
        q: ['#pixelart', '#devlife'],
        count: 2,
    }
    T.get('search/tweets', params,(err, data, response) => {
        let tweets = data.statuses

        if(!err){
            for (let dat of tweets){
                let retweetId = dat.id_str;
                T.post('statuses/retweet/:id', { id: retweetId }, function (err, data, response) {
                    console.log(data)
                  })
            }
        }
    })
}

setInterval(retweet, 10000);

//hell