import { useState } from "react";

export const useCount = ({ initial = 0, min, max }) => {
  if (initial < min || initial > max) initial = min;

  const [count, setCount] = useState(initial);

  const increment = () => {
    count < max || setCount((prev) => prev + 1);
  };
  const decrement = () => {
    count > min || setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(initial);
  };

  return { count, increment, decrement, reset };
};
