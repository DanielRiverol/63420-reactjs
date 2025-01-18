import { useState } from "react";

// function ItemCount({product}) {
function ItemCount({cant, handleDecrement, handleIncrement}) {
//   const [cant, setCant] = useState(1);
//   const handleIncrement = () => {
//     cant < product.stock && setCant(cant + 1);
//   };
//   const handleDecrement = () => {
//    cant > 1 && setCant(cant - 1);
//   };


  return (
    <div className='count'>
      <button onClick={handleDecrement}>-</button>
      <p>{cant}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default ItemCount;
