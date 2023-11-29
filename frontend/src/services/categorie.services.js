import http from './http-common'; 

export async function getAllCategories(){
       return await http.get("/categories");
}
