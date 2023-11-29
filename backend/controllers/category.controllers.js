//Appeller le model au niveau du controller
const Category = require('../models/Category');

async function getAllCategories(req,res){
    try{
        const categories = await Category.find(); 
        res.status(200).json(categories);
    }catch(error){
        
        res.status(500).send('error dans le serveur');
    }
}

async function getCategoryById(req,res){
    const idP=req.params.id;
    try{
        const category= await Category.findById(idP);
        res.status(200).json(category);
    }catch(error){
        res.status(500).send('error dans le serveur');
    }
}

//Await toujours avec fct asynchrone 
async function addCategory(req,res){
    try{
        const category = await Category.create(req.body);
        res.status(201).json(category);
    }catch(error){
        res.status(500).send('error d ajout');
    }
}


async function deleteCategoryById(req,res){
    const idp=req.params.id;
    try{
        const category = await Category.findByIdAndRemove(idp);
        res.status(200).json(category);
    }catch(error){
        console.log(error)
        res.status(500).send('error de suppression');
    }
}


async function updateCategory(req,res){
    const idp=req.params.id;
    await Category.findByIdAndUpdate(idp,req.body);
    res.json("La categorie a été bien modifié");
}

module.exports={getAllCategories,getCategoryById,addCategory,deleteCategoryById,updateCategory};