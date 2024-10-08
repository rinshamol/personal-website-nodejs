var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('home.html', function(err, data) {
        if (data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);  
        }
    });
}).listen(8080);