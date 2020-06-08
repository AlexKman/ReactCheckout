import React, { useState } from "react";
import "./App.css";
import "../src/footer.css";

function Header(props) {
  return <h1>Shopping Cart</h1>;
}

function Footer(props) {
  return (
    <div>
      <h2>Items: </h2>
      <h2>Price: </h2>
    </div>
  );
}

function App(props) {
  const items = props.items;
  const [cart, setCart] = useState([]);
  //Sets the items as a list of buttons for good functionality to add to your shopping basket
  const ItemsList = Object.keys(items).map(itemName => (
    <li key={itemName}>
      <button onClick={() => setCart([...cart, itemName])}>{itemName}</button>
    </li>
  ));

  return (
    <div className="App">
      <Header></Header>
      <ul id="items">{ItemsList}</ul>
      <Footer cart={cart} items={items}></Footer>
    </div>
  );
}

export default App;
