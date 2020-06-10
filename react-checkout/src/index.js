import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const items = {
  A: {
    src: "http://dreamicus.com/data/apple/apple-05.jpg",
    price: 50,
    special: [3, 130]
  },
  B: {
    src:
      "https://www.activebeat.com/wp-content/uploads/2018/08/shutterstock_575528746.jpg",
    price: 30,
    special: [2, 45]
  },
  C: {
    src: "http://www.samcooks.com/wp-content/themes/2017/01/valencia.png",
    price: 20
  },
  D: {
    src:
      "http://www.goodwholefood.com/wp-content/uploads/2016/08/pear-single-green.jpg",
    price: 15
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>,
  document.getElementById("root")
);
