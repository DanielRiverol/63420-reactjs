import { useState, useEffect } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("El valor de contador es: ", count );
  }, [count]);

  function incrementar() {
    setCount((prev) => prev + 1);
  }
  return <div>
    <p>Valor contador: {count}</p>
    <button onClick={incrementar}>Incrementar</button>
  </div>;
};

export default Contador;
