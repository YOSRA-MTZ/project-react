import { useState , useEffect } from 'react';

import '../index.css';
import { addProduct, getAllProduct } from '../services/product.services';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../services/categorie.services';


export function CategorieAddForm(){
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [selectedCat,setSelectedCat]= useState(0);
  const [categories, setCategories]=useState([]);
  const navigate=useNavigate();
  
  useEffect(()=>{
    fetchCategories()
  },[])

  async function fetchCategories() {
      const res = await getAllCategories(); // Note the function call here
      setCategories(res.data);
  }

  async function handlForm(event){
    event.preventDefault(); 
    const p={"name":name,"price":price, "category":categories[selectedCat]}
    await addProduct(p);
    navigate("/products");
  
  }
  
  return (
    <>
    <div className="form-wrapper " >
  <h1>Ajouter un produits</h1>
  <form onSubmit={(e)=>handlForm(e)}>
    <label className="form-label" htmlFor='name'>Nom de produit :</label>
    <input className="form-control" type='text' id='name' placeholder='saisir un nom'  onChange={(event)=>setName(event.target.value)}></input>
    <label htmlFor='price'>Prix de produit :</label>
    <input className="form-control"type='number' id='price' placeholder='saisir un prix' onChange={(event)=>setPrice(event.target.value)}></input>
    <label className="form-label"  htmlFor='price'>Categorie :</label>
    <select className="form-control" onChange={(e)=>setSelectedCat(e.target.value)}>
      {categories.map((category,index)=><option key={index} value={index}>{category.name}</option>)}
    </select>

    <input type='submit' className="btn btn-primary" value='Ajouter '></input>
    <input type='reset'className="btn btn-primary" value='Annuler'></input>
    </form>
    </div>
    </>
);
}