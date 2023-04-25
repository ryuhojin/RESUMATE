import Header from "@/components/base/Header";
import useTheme from "@/libs/hooks/useTheme";
import { useEffect } from "react";

const HeaderContainer = () => {
  const [, toggleMode] = useTheme();

  return <Header toggleTheme={toggleMode} />;
};
export default HeaderContainer;
