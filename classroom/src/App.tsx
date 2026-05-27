import "./global.module.css";
import { Button } from "./components/button";
import { useCounter } from "./hooks/useCounter";

import styles from "./app.module.css";

export function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={increment} />
      <span>{count}</span>
      <Button name="Remover" onClick={decrement} />
    </div>
  );
}
