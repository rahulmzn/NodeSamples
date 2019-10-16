var http = require("http");

var server = http.createServer(function(req, res){
    console.log("Started Server Successfully");
    
});

server.listen(8082);