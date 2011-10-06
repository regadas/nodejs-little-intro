var spawn = require('child_process').spawn;

var filename = process.ARGV[2];

if (!filename)
    return sys.puts("Usage: node watcher.js filename");

// Look at http://nodejs.org/api.html#_child_processes for detail.
var tail = spawn("tail", ["-f", filename]);
console.log("start tailing");

// From nodejs.org/jsconf.pdf slide 56
var http = require("http");
    http.createServer(function(req,res){
    res.writeHeader(200,{"Content-Type": "text/plain"});

    tail.stdout.on("data", function (data) {
        res.write(data);
    });

}).listen(8000);
console.log("listening on "+8000);
