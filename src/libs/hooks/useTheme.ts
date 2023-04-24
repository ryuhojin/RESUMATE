import { useCallback } from "react/ts5.0";
import { useRecoilState } from "recoil";
import { themeState } from "../store/atom";

const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const onToggle = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return [theme, onToggle] as [string, typeof onToggle];
};

export default useTheme;
