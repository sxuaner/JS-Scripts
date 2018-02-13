
var http = require("http");

http.createServer((reqest, response) =>{
    response.statusCode  = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end("Hello World \n");
}).listen(8081)

console.log("Server runs at localhost : HelloWorld")
