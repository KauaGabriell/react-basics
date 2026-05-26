import "./global.module.css";
import { Button } from "./components/button";

import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <Button onClick={() => alert("Testando")} name="Adicionar" />
      <span>0</span>
      <Button onClick={() => alert("Testando")} name="Remover" />
    </div>
  );
}
