import Footer from "../base/Foorter";
import styles from "./style/HomeTemplate.module.css";

interface BaseTemplateProps {
  children: React.ReactNode;
}

const HomeTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div className={styles.Container}>
      {children}
      <Footer />
    </div>
  );
};

export default HomeTemplate;
