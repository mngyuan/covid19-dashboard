import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

(window as any).React = React;

let element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
let container = document.getElementById("app");

if (process.env.NODE_ENV === "development") {
  ReactDOM.render(element, container);
} else {
  ReactDOM.hydrate(element, container);
}
