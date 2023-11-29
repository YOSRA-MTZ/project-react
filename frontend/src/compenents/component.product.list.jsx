import { useEffect, useState } from "react";

import { deleteProductByID, getAllProducts } from "../services/product.services";
import {Link} from "react-router-dom";
export function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    const res = await getAllProducts()
    setProducts(res.data);
  }

  async function deleteProduct(id) {
    const res = await deleteProductByID(id)
    fetchProducts();
  }

  return (<>
<Link to={"/categories"} class=" btn btn-ajouter" > <i class="fas fa-plus"></i> Nouveau produit</Link>
    <div class="table-wrapper">
      <table class="fl-table">
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Price</th>
          <th class="text-center">Categorie</th>
          <th class="text-center">Action</th>

        </tr>
        <tbody id="tbody">
          {products.map((elem, index) => (
            <tr key={index}>
              <td class="text-center">{elem.name}</td>
              <td class="text-center">{elem.price}</td>
              <td class="text-center">{elem.category.name}</td>
              <td class="text-center">
                
                <button class="btn btn-supprimer" onClick={() => deleteProduct(elem._id)}>
                  <i class="fas fa-trash icon-rouge"></i> 
                </button>

              
                <Link to={`/products/edit/${elem._id}`} class="btn btn-modifier" >
                  <i class="fas fa-pencil-alt icon-bleue"></i>
               </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      
    </div>

  </>);

}