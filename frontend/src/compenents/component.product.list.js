import { useEffect, useState } from "react";

import { deleteProductByID, getAllProducts } from "../services/product.services";

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
              <td className="text-center">{elem.name}</td>
              <td className="text-center">{elem.price}</td>
              <td className="text-center">
                {/* Bouton de suppression avec une icône de FontAwesome */}
                <button className="btn btn-supprimer" onClick={() => deleteProduct(elem._id)}>
                  <i className="fas fa-trash icon-rouge"></i> 
                </button>

                {/* Bouton de modification avec une icône de FontAwesome */}
                <button   className="btn btn-modifier" onClick={() => deleteProduct(elem._id)}>
                  <i className="fas fa-pencil-alt icon-bleue"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </>);

}