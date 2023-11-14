const mongoose= require('mongoose');

//Definir le schema 
const productSchema = new mongoose.Schema({

    name: String,
    price: Number,

});

const Product=mongoose.model("Product",productSchema);
module.exports = Product;