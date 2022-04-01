var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Ciao a tutti!');
});
server.on('close', function() {
  // Siamo in ascolto dell'evento di chiusura
  console.log('Server chiuso, evento innescato.');
});
// Avviamo il server
server.listen(8080);
// Stoppialo il server. Questo attiverà l'evento close
server.close();