import logo from './logo.svg';
import './App.css';
import { ProductList } from './compenents/component.product.list';
import { ProductAddForm } from './compenents/component.product.add';

function App() {
  return (
    <div>
      <ProductList/>
      <ProductAddForm/>
    </div>
  );
}

export default App;
