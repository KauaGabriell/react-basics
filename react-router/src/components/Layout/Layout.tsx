import { Outlet } from "react-router";
import styles from "./styles.module.css";

export function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <span>Olá Kauã</span>
      </header>
      <Outlet />
      <footer>Todos os direitos reservados para Kauã Gabriell</footer>
    </div>
  );
}
