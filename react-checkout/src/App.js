import React from "react";
import "./App.css";
import "../src/footer.css";

function Header(props) {
  return <h1>Shopping Cart</h1>;
}

function Footer(props) {
  return <h2>Footer</h2>;
}

function App() {
  const Items = [
    { itemName: "A", UnitPrice: 50 },
    { itemName: "B", UnitPrice: 30 },
    { itemName: "C", UnitPrice: 20 },
    { itemName: "D", UnitPrice: 15 }
  ];
  const ItemsList = Items.map(item => <li>{item.itemName}</li>);

  return (
    <div className="App">
      <Header></Header>
      <ul id="items">{ItemsList}</ul>
      <Footer></Footer>
    </div>
  );
}

export default App;
