import styles from "./style/Header.module.css";
import useScrollPosition from "@/libs/hooks/useScrollPosition";
import Link from "next/link";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const scrollPosition = useScrollPosition() != 0 ? "Scrolled" : "";

  return (
    <header className={`${styles.Container} ${styles[scrollPosition]}`}>
      <div className={styles.Wrapper}>
        <div className={styles.Title}>
          <h3>
            <Link href={"/"}>RESUMATE</Link>
          </h3>
        </div>
        <div className={styles.Nav}>
          <ul>
            <li>
              <Link href={"/company"}>COMPANY</Link>
            </li>
            <li>
              <Link href={"/career"}>CAREERS</Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link href={""}>LOGIN</Link>
            </li>
            <li>
              <label className={styles.Switch} onChange={toggleTheme}>
                <input type="checkbox" />
                <span className={`${styles.Slider} ${styles.Round}`}></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
