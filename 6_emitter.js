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

var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message){
  console.log(message);
});

game.on('temposcaduto',function(valore){
    console.log(valore+2);
})

game.on('vittoria', function(message){
    console.log('Hai vinto!');
  });

game.emit('gameover', 'Hai perso!');
game.emit('temposcaduto',1);
game.emit('vittoria');

