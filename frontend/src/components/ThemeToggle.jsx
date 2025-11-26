import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") || "dark";
};

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/30 bg-base-200/80 hover:bg-base-200 transition-all duration-150 text-sm font-medium"
      aria-label={`Activer le mode ${isDark ? "clair" : "sombre"}`}
    >
      {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
      <span>{isDark ? "Mode clair" : "Mode sombre"}</span>
    </button>
  );
}

export default ThemeToggle;
