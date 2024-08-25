import { Link } from "react-router-dom";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          Главная
        </Link>
        <Link to="/coworking" className={styles.navItem}>
          Коворкинги
        </Link>
        <Link to="/support" className={styles.navItem}>
          Поддержка
        </Link>
        <Link to="/forbusiness" className={styles.navItem}>
          Для бизнеса
        </Link>
      </nav>

      <HeaderAuth />
    </header>
  );
}
