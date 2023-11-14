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
      
        <div className="table-wrapper">
              <table  className="fl-table">
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Action</th>
                
                </tr>
                <tbody id="tbody"> 
                  
                  {products.map((elem,index)=>(
                    <tr key={index}>
                      <td className="text-center">{elem.name}</td>
                      <td className="text-center">{elem.price}</td>
                      <td className="text-center">
                      {/* Utilisation d'une icône de suppression de FontAwesome */}
                      <i className="fas fa-trash icon-rouge" onClick={() => deleteProduct(elem._id)}></i>
                      <i className="fas fa-pencil-alt icon-bleue" onClick={() => deleteProduct(elem._id)}></i>
                    </td>
                      </tr>
                  ))}
                
                </tbody>
              </table>
            </div>
       
        </> );

}