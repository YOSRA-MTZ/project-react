import {useEffect ,useState} from "react";

import { deleteProductByID, getAllProducts } from "../services/product.services";

export function ProductList(){

    const [products,setProducts] = useState([]);
  
    useEffect(()=>{
      fetchProducts();
    },[])
  
    async function fetchProducts(){
      const res=await getAllProducts()
      setProducts(res.data);
    }
  
    async function deleteProduct(id){
      const res=await deleteProductByID(id)
      fetchProducts();
    }

    return (<>
      
        <div class="table-wrapper">
              <table  class="fl-table">
                <tr>
                  <th class="text-center">Name</th>
                  <th class="text-center">Price</th>
                  <th class="text-center">Action</th>
                
                </tr>
                <tbody id="tbody"> 
                  
                  {products.map((elem,index)=>(
                    <tr key={index}>
                      <td class="text-center">{elem.name}</td>
                      <td class="text-center">{elem.price}</td>
                      <td class="text-center">
                      {/* Utilisation d'une icône de suppression de FontAwesome */}
                      <i class="fas fa-trash icon-rouge" onClick={() => deleteProduct(elem._id)}></i>
                      <i class="fas fa-pencil-alt icon-bleue" onClick={() => deleteProduct(elem._id)}></i>
                    </td>
                      </tr>
                  ))}
                
                </tbody>
              </table>
            </div>
       
        </> );

}