var EventEmitter = require('events').EventEmitter,
              emitter = new EventEmitter();
      
setTimeout(function(){
            emitter.emit("say", "Hello World")
        }, 2000) 

emitter.addListener("say", function(what){
            console.log(what)
        })
