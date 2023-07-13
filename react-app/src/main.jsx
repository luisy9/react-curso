import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
import './styles.css'


// const luis = "Luis";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={5} />
  </React.StrictMode>
);