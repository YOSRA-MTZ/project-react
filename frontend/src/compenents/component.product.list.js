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
<Link to={"/products/new"} class=" btn btn-ajouter" > <i class="fas fa-plus"></i> Nouveau produit</Link>
    <div class="table-wrapper">
      <table class="fl-table">
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Price</th>
          <th class="text-center">Action</th>

        </tr>
        <tbody id="tbody">
          {products.map((elem, index) => (
            <tr key={index}>
              <td class="text-center">{elem.name}</td>
              <td class="text-center">{elem.price}</td>
              <td class="text-center">
                {/* Bouton de suppression avec une icône de FontAwesome */}
                <button class="btn btn-supprimer" onClick={() => deleteProduct(elem._id)}>
                  <i class="fas fa-trash icon-rouge"></i> 
                </button>

                {/* Bouton de modification avec une icône de FontAwesome */}
                <button   class="btn btn-modifier" onClick={() => deleteProduct(elem._id)}>
                  <i class="fas fa-pencil-alt icon-bleue"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      
    </div>

  </>);

}