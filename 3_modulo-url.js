var http=require('http');
var url=require('url');
var server=http.createServer(function (req,res) {
    var page=url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(page=='/')
        res.write('Sei nella reception, possiamo aiutarti?');
    else if (page=='/basement')
        res.write('Sei in cantina.');
    else if(page=='/floor/1/bedroom')
        res.write('Stanza da letto primo piano');
    else
        res.write('Pagina non esistente.')
    res.end();
})
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');

