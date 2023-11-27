
//serveur avec express
//mongodb+srv://yosra_moumtaz:yousra15@cluster0.kmjqwyw.mongodb.net/product_db?retryWrites=true&w=majority
const express = require('express')//importer express
const app = express();//demarer express
const cors=require("cors");
const productrouter=require("./routes/products.routes")//charger les routs ici
const mongoose = require('mongoose');
const dotenv=require("dotenv");

dotenv.config()
//const URL = 'mongodb+srv://yosra_moumtaz:yousra15@cluster0.kmjqwyw.mongodb.net/product_db?retryWrites=true&w=majority'
//const URL="mongodb://127.0.0.1:27017/db_catalogue";
mongoose.connect(process.env.DB_URL)
.then(result=>app.listen(process.env.SERVER_PORT,()=>console.log("server running")))
.catch(err=>console.log(err));

app.use(cors());
//app.use(express.urlencoded());//convertir les donnes saisi dans postman en un format objet 
app.use(express.json());
app.use("/products",productrouter); //aller vers le fichier du routage tout les routes commence par /