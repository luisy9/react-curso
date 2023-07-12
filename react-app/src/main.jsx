import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./HelloWorld";
import { FirstApp } from "./FirstApp";
import './styles.css'


const luis = "Luis";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorld luis={luis} caca={"cacas"}/>
    <div className="">
      <h1>Abajo este el First App</h1>
      <FirstApp />
    </div>
  </React.StrictMode>
);
