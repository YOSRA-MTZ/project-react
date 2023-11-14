const http=require("http");
const url=require("url");
const querystring=require("querystring");

const httpserver=http.createServer((req,res)=>{
    const query=querystring.parse(url.parse(req.url).query);
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Liste de produits" + query.prix + "" + query.quantite + " <h1>");
    res.end();
});
httpserver.listen(8080,()=>console.log("server running"));