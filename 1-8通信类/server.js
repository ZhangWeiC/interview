var express = require('express')
var app = express()
var path = require('path')
var urllib = require('url')

app.get('/', function(req, res){
	res.sendfile(`${__dirname}/index.html`)
})

app.get('/test', function(req, res){
	res.send('llll')
})

var data = {
	'name': 'weichenz'
}

app.get('/jsonp', function(req, res){
	var params = urllib.parse(req.url, true);
	if(params.query.callback){
		console.log(params.query.callback);

		var str = `${params.query.callback}(${JSON.stringify(data)})`
		res.end(str)
	}else{
		res.end()
	}
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))