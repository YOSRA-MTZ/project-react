//serveur avec java
const http=require("http");
const httpserver=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.query);
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Bonjour tout le monde <h1>");
    res.end();
});
httpserver.listen(8080,()=>console.log("server running"));