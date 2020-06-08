import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const items = {
  A: {
    price: 50,
    special: [3, 130]
  },
  B: {
    price: 30,
    special: [2, 45]
  },
  C: {
    price: 20
  },
  D: {
    price: 15
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>,
  document.getElementById("root")
);
