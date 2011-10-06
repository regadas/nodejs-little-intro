var fs = require('fs'),
    sys = require('sys'),
    http = require('http');

http.createServer(function (req, res) {

    fs.readFile('presentation.html',function (err, data){
        if(err)
            throw err;

        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });

}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
