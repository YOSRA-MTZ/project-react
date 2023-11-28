import http from "./http-common";

export async function getAllProducts(){
    return await http.get("/products");
}

export async function getProductById(id){
    return await http.get(`/products/${id}`);
}

export async function deleteProductByID(id){
    return await http.delete(`/products/${id}`);
}

export async function addProduct(product){
    return await http.post("/products",product);
}

export async function updateProduct(product){
    return await http.patch(`/products/${product._id}`,product);
}