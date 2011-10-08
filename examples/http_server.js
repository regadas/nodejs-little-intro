var http = require('http');
      
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>With love from Node.Js</h1>");
    res.end();

}).listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');
