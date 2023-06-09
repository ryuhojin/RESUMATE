import styles from "./style/Header.module.css";
import useScrollPosition from "@/libs/hooks/useScrollPosition";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const [menuState, setMenuState] = useState("");
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
              <Link href={"/template"}>TEMPLATE</Link>
            </li>
            <li>
              <Link href={"/module"}>MODULE</Link>
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
        <div className={`${styles.Menu}`}>
          <div
            className={`${styles.Hamburger} ${
              menuState ? styles[menuState] : ""
            }`}
            onClick={() => {
              menuState == "" ? setMenuState("active") : setMenuState("");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul
          className={`${styles.DropDown} ${menuState ? styles[menuState] : ""}`}
        >
          <li>
            <Link href={"/template"}>TEMPLATE</Link>
          </li>
          <li>
            <Link href={"/module"}>MODULE</Link>
          </li>
          <li>
            <Link href={"/career"}>CAREERS</Link>
          </li>
          <li>
            <Link href={"/login"}>LOGIN</Link>
          </li>
          <li>
            <label className={styles.Switch} onChange={toggleTheme}>
              <input type="checkbox" />
              <span className={`${styles.Slider} ${styles.Round}`}></span>
            </label>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
