import React from "react";
import './style.css';
import product from "./products.json";
import Cart from "./components/cart";
import Cards from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {




  return (
    <div className="App">

      <Cart />
      <div className="row">{product.map((product) => < Cards {...product} />)}</div>
    </div>

  );
};

export default App;