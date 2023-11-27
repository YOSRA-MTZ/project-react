import { useState } from "react";
import { addProduct } from "../services/product.services";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductAddForm(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const navigate=useNavigate();

    function handlForm(event){
        //pour ne pas actualiser la page quand j'envoie le formulaire 
        event.preventDefault();
        const p={"name":name, "price":price}
        addProduct(p);
        navigate("/products");
      }

      return (<>

<div className="form-wrapper" >
  <form onSubmit={(e) => handlForm(e)}>
    <label className="form-label"htmlFor="name"> Name :</label>
    <input className="form-control"type="text" id="name" onChange={(e) => setName(e.target.value)} />
    <br />

    <label className="form-label" htmlFor="price"> Price :</label>
    <input className="form-control"type="number" id="price" onChange={(e) => setPrice(e.target.value)} />
    <br />

    <input type='submit'className="btn btn-primary" value={"Enregister"} />
    <input type='reset' className="btn btn-secondary" value={"Annuler"} />
  </form>
</div>

   
      </>
        
      )
}
