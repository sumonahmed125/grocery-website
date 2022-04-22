import logo from './logo.svg';
import './App.css';

const products=()=>{
  // const url = '../product.json';
  fetch('../product.json')
  .then(res=>res.json())
  .then(data =>productShop(data))
}
function App() {
  // const product = {name,price};
  const productShop(){

  }
  return (
    <div className="App">
        <h1>Grocery website</h1>
        <a target="blank"  href='https://facebook.com'>Website</a>
    </div>
  );
}

export default App;
