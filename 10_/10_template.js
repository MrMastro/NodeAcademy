var express = require('express');
var app = express();

app.set('view engine', 'ejs');
/*
app.get('/count/:number', function(req, res) {
  var names = ['Roberto', 'Giacomo', 'Davide'];
  res.render('10_page.ejs', {counter: req.params.number, names: names});
});
*/
app.get('/:piano/:stanza',function(req,res){
    var pippo='Pippo';
    var numbers= [0,1,2,3];
    res.render('10_page.ejs',
    {piano:req.params.piano, stanza:req.params.stanza, variabile:pippo,numbers:numbers});
})
app.listen(8080);
console.log("In ascolto su porta 8080");
