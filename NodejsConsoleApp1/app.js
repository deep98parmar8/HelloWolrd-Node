'use strict';
//require the https moduel so we can send request

var http = require('http')

//Create our webServer that listends on the port 3000 of localhost / 127.0.01
http.createServer(function (req, res){
    //tell the server to expect some text!
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    //End the request with some text
    res.end('Hello World');

}).listen(3000);
console.log('Server listening on port 3000');