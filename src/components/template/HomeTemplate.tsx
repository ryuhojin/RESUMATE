import styles from "./style/HomeTemplate.module.css";

interface BaseTemplateProps {
  children: React.ReactNode;
}

const HomeTemplate = ({ children }: BaseTemplateProps) => {
  return <div className={styles.Container}>{children}</div>;
};

export default HomeTemplate;
