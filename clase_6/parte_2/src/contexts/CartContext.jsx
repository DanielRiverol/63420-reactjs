import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
//   console.log(cart);
  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existItem = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existItem >= 0) {
        //si existe el item aculiizo la cantidad
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  function removeItem() {
    // logica
  }

  function clear() {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{ cart, clear, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
