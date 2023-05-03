import Link from "next/link";
import styles from "./style/ListItem.module.css";
const ListItem2 = () => {
  return (
    <Link href={""} className={styles.Container}>
      <div className={styles.Question}>
        <span className={styles.Bold}>Q. </span>이것은 질문에 대한 요약입니다.
      </div>
      <div className={styles.Answer}>
        <span className={styles.Bold}>A. </span>이것은 답변에 대한 간단한 요약
        내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다.
        감사합니내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다.
        감사합니다.내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다.
        감사합니다.내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다.
        감사합니다.다.
      </div>
      <div className={styles.Footer}>
        <p className={styles.FooterItem}>
          <span>모듈 수 : 3</span> <span>글자 수 : 800</span>
        </p>
        <p className={styles.FooterDate}>마지막 수정일 : 2022.03.24</p>
      </div>
    </Link>
  );
};

export default ListItem2;
