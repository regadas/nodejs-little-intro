var spawn = require('child_process').spawn,
          filename = process.ARGV[2],
          http = require("http");

var server_port = 8000;

if (!filename)
    return console.log("Usage: node watcher.js filename");

var tail = spawn("tail", ["-f", filename]);

http.createServer(function(req,res){
    res.writeHeader(200,{"Content-Type": "text/plain;charset=UTF-8"});

    tail.stdout.on("data", function (data) {
        console.log(data.toString())
        res.write(data);
    });

}).listen(server_port);
console.log("listening on "+server_port);
