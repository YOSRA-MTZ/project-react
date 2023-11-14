
//serveur avec express
const express = require('express')//importer express
const app = express();//demarer express

app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.send('<h1> La page d acceuil</h1>');
});

//http://localhost:5000/products
app.get('/products', (req, res) => {
    const products=[
        {"id":1,"name":"HP","price":12000},
        {"id":2,"name":"DELL","price":19000},
        {"id":3,"name":"MAC","price":26000}
    ];
    res.setHeader('Content-type', 'application/json');
    res.json(products);
});

app.post('/products', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.send('<h1> Ajout produit</h1>');
});

//http://localhost:5000/products/3
app.get('/products/:id', (req, res) => {
    const idp=req.params.id; //c'est recuperer le parametre id
    const name=req.query.name;
    const price=req.query.price;
    console.log(name+ "" +price);
    res.setHeader('Content-type', 'text/html');
    res.send('<h1> Le produit Numero' +idp+ '</h1>');
});

app.listen(5000,()=>console.log("server running"));
