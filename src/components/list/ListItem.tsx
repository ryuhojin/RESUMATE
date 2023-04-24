import styles from "./style/ListItem.module.css";
const ListItem = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Question}>
        <span className={styles.Bold}>Q. </span>이것은 질문에 대한 요약입니다.
      </div>
      <div className={styles.Answer}>
        <span className={styles.Bold}>A. </span>이것은 답변에 대한 간단한 요약
        내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다. 감사합니내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다. 감사합니다.내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다. 감사합니다.내용입니다. 이를 참조하여 앞으로도 작성해주시면 됩니다. 감사합니다.다.
      </div>
    </div>
  );
};

export default ListItem;
