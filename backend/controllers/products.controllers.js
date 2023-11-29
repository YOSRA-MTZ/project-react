//Appeller le model au niveau du controller
const Product = require('../models/Product');

async function getAllProducts(req,res){
    try{
        const products = await Product.find().populate("category"); 
        res.json(products);
    }catch(error){
        
        res.status(500).send('error dans le serveur');
    }
}

async function getProductById(req,res){
    const idP=req.params.id;
    try{
        const product= await Product.findById(idP);
        res.status(200).json(product);
    }catch(error){
        res.status(500).send('error dans le serveur');
    }
}

//Await toujours avec fct asynchrone 
async function addProduct(req,res){
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }catch(error){
        res.status(500).send('error d ajout');
    }
}


async function deleteProductById(req,res){
    const idp=req.params.id;
    try{
        const product = await Product.findByIdAndRemove(idp);
        res.status(200).json(product);
    }catch(error){
        console.log(error)
        res.status(500).send('error de suppression');
    }
}


async function updateProduct(req,res){
    const idp=req.params.id;
    await Product.findByIdAndUpdate(idp,req.body);
    res.json("Le produit a été bien modifié");
}

module.exports={getAllProducts,getProductById,addProduct,deleteProductById,updateProduct};