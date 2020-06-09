import React, { useState } from "react";
import "./App.css";
import "../src/footer.css";

function Header(props) {
  return <h1>Shopping Cart</h1>;
}

function Footer(props) {
  //function to break down props taken from the shopping cart functionality which will return the accumulator(acc)
  const counts = props.cart.reduce((acc, cv) => {
    acc[cv] ? ++acc[cv] : (acc[cv] = 1);
    return acc;
  }, {});
  const discountMap = {};

  Object.entries(props.items).forEach(([itemName, { special }]) => {
    if (special && counts[itemName] >= special[0]) {
      const discounts = Math.floor(counts[itemName] / special[0]);
      discountMap[itemName] = {
        itemsDiscounted: discounts * special[0],
        discountedPrice: special[1] * discounts
      };
    }
  });

  const cart = [...props.cart].sort();
  let startingPrice = 0;
  Object.entries(discountMap).forEach(
    ([itemName, { itemsDiscounted, discountedPrice }]) => {
      const index = cart.indexOf(itemName);
      cart.splice(index, itemsDiscounted);
      startingPrice += discountedPrice;
    }
  );
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + props.items[curr].price;
  }, startingPrice);
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
