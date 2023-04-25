import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../store/atom";

const useTheme = () => {

  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if(theme) return;
    setTheme(
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light"
    );
  },[]);

  const onToggle = useCallback(() => {
    setTheme(theme == "light" ? "dark" : "light");
  }, [theme]);

  return [theme, onToggle] as [string, typeof onToggle];
};

export default useTheme;
