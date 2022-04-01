var http = require('http');

var server = http.createServer(function(req, res) { 
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write('<p>Sono un paragrafo <strong>HTML</strong>!</p>');
  res.end();
});

server.listen(8080);
console.log('Porta in ascolto su 8080');