const express = require('express');//uso il framework exspress
const app = express(); //parte back end
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");//richiedo il contenuto di socket.io dentro Server
//creo un server (Constructor?) back end, lo chiamo io (input/output)
const io = new Server(server);//l'input output (connessione socket tra il server e i client) 

app.get('/', (req, res) => { //imposto la giestione chiamate get (Serverlet)
  res.sendFile(__dirname + '/11_index.html');
});


//sul Server Constructor gli dico cosa deve fare quando riceve eventi connection
//Gli eventi connection sono eventi che il client manda al server (?)
//Il parametro della funzione di call back è la socket, la quale a sua volta può ascoltare eventi
io.on('connection', (socket) => { 
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.broadcast.emit('hi'); //meccanismo broadcast
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    socket.broadcast.emit('disc');
  });

});

//dico in quale porta deve ascoltare il server e cosa deve fare all'avvio (?)
server.listen(3000, () => {
  console.log('listening on *:3000');
});

