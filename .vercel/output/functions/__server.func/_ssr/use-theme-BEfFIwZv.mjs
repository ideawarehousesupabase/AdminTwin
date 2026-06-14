import { r as reactExports } from "../_libs/react.mjs";
function useTheme() {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("admintwin_theme") ?? "light";
    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("admintwin_theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  return { theme, toggle };
}
export {
  useTheme as u
};
