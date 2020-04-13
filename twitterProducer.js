const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

const stream = client.stream('statuses/filter', {track: 'real madrid'});
stream.on('data', function(event) {
  console.log(`Fecha: ${event.created_at}\nUser: ${event.user.screen_name}\nText: ${event.text}\n`);
});
 
stream.on('error', function(error) {
  throw error;
});
