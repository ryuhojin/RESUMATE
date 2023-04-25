import React from "react";
import HeaderContainer from "@/containers/base/HeaderContainer";
import styles from "./style/BaseTemplate.module.css";
import { Inter } from "next/font/google";
import useTheme from "@/libs/hooks/useTheme";

interface BaseTemplateProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  const [Mode] = useTheme();

  return (
    <div className={`${inter.className} ${styles.Container} ${styles[Mode]}`}>
      <HeaderContainer />
      <main className={styles.Wrapper}>{children}</main>
    </div>
  );
};
export default BaseTemplate;
