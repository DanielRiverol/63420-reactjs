import { useState } from "react";

export default function ItemCount({
  producto,
  initial = 1,
  stock = 10,
  onAdd,
}) {
  const [count, setCount] = useState(initial);

  function handleIncrement() {
    if (count < stock) setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <h3>{producto}</h3>
      <button onClick={handleDecrement} disabled={count === 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count === stock}>
        +
      </button>
      <button onClick={() => onAdd(count, producto)}>AGREGAR AL CARRITO</button>
    </div>
  );
}
