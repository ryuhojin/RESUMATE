import React from "react";
import Header from "../base/Header";
import styles from "./style/BaseTemplate.module.css";

import { Inter } from "next/font/google";

interface BaseTemplateProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div className={`${inter.className} ${styles.Container}`}>
      <Header />
      <main className={styles.Wrapper}>{children}</main>
    </div>
  );
};
export default BaseTemplate;
