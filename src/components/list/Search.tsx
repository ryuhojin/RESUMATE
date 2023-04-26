import Link from "next/link";
import styles from "./style/Search.module.css";
const Search = () => {
  return (
    <>
      <div className={styles.Container}>
        <input type={"text"} placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>
      <Link className={styles.WriteBtn} href={"/write"}>
        자기소개서 문항 작성
      </Link>
    </>
  );
};
export default Search;
