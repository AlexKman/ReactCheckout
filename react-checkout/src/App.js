import React, { useState } from "react";
import "./App.css";
import "../src/footer.css";
import "./items.css";

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
      <h2>
        Items:{" "}
        {Object.entries(counts)
          .map(([itemName, count]) => `${itemName}: ${count}`)
          .sort()
          .join(",")}
      </h2>
      <h3>Price: {totalPrice}</h3>
    </div>
  );
}

function App(props) {
  const items = props.items;
  const [cart, setCart] = useState([]);
  //Sets the items as a list of buttons for good functionality to add to your shopping basket
  const ItemsList = Object.entries(items).map(([itemName, { src, price }]) => (
    <li key={itemName} className="card">
      <header>
        <span>{itemName}</span>
        <span className="price">${price}</span>
      </header>
      <img src={src} alt={itemName} />
      <button className="button" onClick={() => setCart([...cart, itemName])}>
        Add to Cart
      </button>
    </li>
  ));

  return (
    <div className="App">
      <Header></Header>
      <main>
        <ul id="items">{ItemsList}</ul>
        <Footer cart={cart} items={items}></Footer>
      </main>
    </div>
  );
}

export default App;
