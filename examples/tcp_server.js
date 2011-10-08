var net = require('net'),
    spawn = require('child_process').spawn,
    tail = spawn("tail", ["-f", './lol']);

String.prototype.chomp = function (){
  return this.replace(/(\n|\r)+$/, '');
}

var server = net.createServer(function (c) {
    c.on("connect", function () {
        console.info("Connection from " + c.remoteAddress);
        c.write("Hello Stranger\n");
    });
    c.on('data', function(data){
        if(data.toString().chomp() === 'trigger timer') {
          setTimeout(function() {
            c.write("Hey man here I am after 2 seconds\n");
          }, 2000)
        } else {
          console.log('Stranger entered something like: %s', data);
        }
    });
});
server.listen(8124, 'localhost');
