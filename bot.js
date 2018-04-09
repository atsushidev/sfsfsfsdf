var request = require('request');
const fs = require("fs");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var playerName = "robi62");
var options = {
	method: "GET",
	url: `https://fortnite.y3n.co/v2/player/${playerName}`,
	strictSSL: false,
	headers: {
		'User-Agent': 'nodejs request',
		'X-Key': "I0hTZZRfChQTGZwlSmlM"
	}

}
request(options, (error, response, body) => {
	console.log(response.statusCode);
	if (!error && response.statusCode == 200) {
		var stats = JSON.parse(body);
		console.log(`robi62 k/d: ${stats.br.stats.pc.all.kpd}`);
		console.log(stats);
	}
});