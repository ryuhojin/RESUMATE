import styles from "./style/List.module.css";

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <div className={styles.Container}>{children}</div>;
};
export default List;
