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
    { item: "A", UnitPrice: 50 },
    { item: "B", UnitPrice: 30 },
    { item: "C", UnitPrice: 20 },
    { item: "D", UnitPrice: 15 }
  ];

  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
