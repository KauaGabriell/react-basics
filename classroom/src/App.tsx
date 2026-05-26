import "./global.module.css";
import { Button } from "./components/button";

import styles from "./app.module.css";
import { useMessage } from "./hooks/useMessage";

export function App() {
  const name = useMessage();

  return (
    <div className={styles.container}>
      <Button onClick={() => name.show("Kauã")} name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}
