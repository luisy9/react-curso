import PropTypes from "prop-types";
import { useState } from "react";

export function CounterApp({ value }) {
  const [count, setCount] = useState(value);

  function handleSubmit(event) {
    setCount( (c) => c + 1);
  }
  function handleMenos(event) {
    setCount( (c) => c - 1);
  }
  function handleReset(event) {
    console.log("hola")
    setCount( value );
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {count} </h2>
      <button onClick={handleSubmit}>+1</button>
      <button onClick={handleMenos}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number,
};
