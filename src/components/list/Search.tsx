import Link from "next/link";
import styles from "./style/Search.module.css";
interface SearchProps {
  writeText: string;
}
const Search = ({ writeText }: SearchProps) => {
  return (
    <>
      <div className={styles.Container}>
        <input type={"text"} placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>
      <Link
        className={styles.WriteBtn}
        href={window.location.pathname + "/write"}
      >
        {writeText}
      </Link>
    </>
  );
};
export default Search;
