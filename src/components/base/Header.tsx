import styles from "./style/Header.module.css";
import useScrollPosition from "@/libs/hooks/useScrollPosition";
import Link from "next/link";

const Header = () => {
  const scrollPosition = useScrollPosition() != 0 ? "Scrolled" : "";

  return (
    <header className={`${styles.Container} ${styles[scrollPosition]}`}>
      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          <h3>
            <Link href={""}>RESUMATE</Link>
          </h3>
        </div>
        <div className={styles.Nav}>
          <ul>
            <li>
              <Link href={""}>RESUME</Link>
            </li>
            <li>
              <Link href={""}>COMPANY</Link>
            </li>
            <li>
              <Link href={""}>CAREERS</Link>
            </li>
            <li>/</li>
            <li>
              <Link href={""}>LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
