
var http = require("http");

http.createServer((req, res) =>{
    res.statusCode  = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World \n");
}).listen(8081)

console.log("Server runs at localhost : HelloWorld")
