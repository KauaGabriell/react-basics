import { useState, useEffect } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    console.log("Count mudou:", count);
  }, [count]);

  function increment() {
    console.log("Adicionei");
    setCount((currentCount) => currentCount + 1);
  }

  function decrement() {
    console.log("Removi");
    if (count > 0) setCount((currentCount) => currentCount - 1);
  }

  return { count, increment, decrement };
}
