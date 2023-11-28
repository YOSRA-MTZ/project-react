import { useEffect, useState } from "react";
import {  getProductById, updateProduct } from "../services/product.services";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductEdit(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
       fetchProduct();

    },[]);
    async function fetchProduct(){
        const resp=await getProductById(id);
        const p =resp.data;
        setName(p.name);
        setPrice(p.price);
    }
    function handlForm(event){
       
        event.preventDefault();
        const p={"_id":id,"name":name, "price":price}
        updateProduct(p);
        navigate("/products");
      }

      return (<>

<div className="form-wrapper " >
  <form onSubmit={(e) => handlForm(e)}>
    <label className="form-label"htmlFor="name"> Name :</label>
    <input className="form-control"type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    <br />

    <label className="form-label" htmlFor="price"> Price :</label>
    <input className="form-control"type="number" id="price"value={price} onChange={(e) => setPrice(e.target.value)} />
    <br />

    <input type='submit'className="btn btn-primary" value={"Enregister"} />
    <input type='reset' className="btn btn-primary" value={"Annuler"} />
  </form>
</div>

   
      </>
        
      )
}
