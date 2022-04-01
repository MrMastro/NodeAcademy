/*
    Parametri get: contenuti nell'URL, dopo il percorso del file
    http://localhost:8080/page?firstname=Cristian&lastname=Sacco


*/

var http=require('http');
var url=require('url');
var querystring=require('querystring');

var server=http.createServer( function (req,res) {
    var params=querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"Content-type":"text/plain"});
    if ('firstname' in params && 'lastname' in params)
        res.write('Il tuo nome e: '+params['firstname']+' '+params['lastname']);
    else
        res.write('Tu hai un nome giusto?');
        res.end();
});

server.listen(8080);
console.log('Server running at 8080/');
