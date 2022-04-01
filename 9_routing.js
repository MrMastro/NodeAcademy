var express = require('express');
var path = require('path');
const { contentType } = require('express/lib/response');
var app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Sei nella Reception. Posso aiutarti?');
});

app.get('/basement', function(req, res) {
  res.setHeader('Content-Type','' );
  res.sendFile(path.join(__dirname,'9_routing.html'));
});

app.get('/floor/:floornum/bedroom', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Sei nella camera da letto al piano n^' + req.params.floornum);
});

app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('La pagina non esiste');
});

app.listen(8080);
console.log('In ascolto su porta 8080');