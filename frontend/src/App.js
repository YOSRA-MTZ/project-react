import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/component.product.list';
import { ProductAddForm } from './compenents/component.product.add';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />}/> 
      <Route path='/products/new'element={<ProductAddForm/>}/>

    </Routes>
   
    
  );
}

export default App;
