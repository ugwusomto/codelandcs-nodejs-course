const http = require("http");

const WebServer = http.createServer((req,res) => {
    res.end("Welcome to codelandcs.com");
})

WebServer.listen(4000,'127.0.0.1',()=>{
    console.log("Our server is listening for request from port 4000")
})