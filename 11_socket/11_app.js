const express = require('express');//uso il framework exspress
const app = express(); //parte back end
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");//richiedo la classe Server 
const io = new Server(server); //creo un server back end

app.get('/', (req, res) => { //imposto la giestione chiamate get (Serverlet)
  res.sendFile(__dirname + '/11_index.html');
});

io.on('connection', (socket) => { //boh
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.broadcast.emit('hi');
  socket.on('disconnect', () => {
    console.log('user disconnected');
    socket.broadcast.emit('disc');
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});

