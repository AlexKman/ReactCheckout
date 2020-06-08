import React, { useState } from "react";
import "./App.css";
import "../src/footer.css";

function Header(props) {
  return <h1>Shopping Cart</h1>;
}

function Footer(props) {
  return <h2>Footer</h2>;
}

function App(props) {
  const items = props.items;
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
