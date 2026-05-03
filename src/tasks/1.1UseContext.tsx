import { createContext, useContext, useState } from "react";
import { Button } from "../components/Button";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  changeTheme: () => void;
}>({
  theme: "light",
  changeTheme: () => {},
});

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const localstoregeTheme = localStorage.getItem("theme");
    return localstoregeTheme === "light" || localstoregeTheme === "dark"
      ? localstoregeTheme
      : "light";
  });

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Child() {
  const { theme, changeTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-2xl flex flex-col items-center gap-3 ${theme === "light" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`}
    >
      <p className="text-xl">Тема: {theme}</p>
      <Button value="Поменять тему" className="text-xl" onClick={changeTheme} />
    </div>
  );
}

export default function UseContext() {
  return (
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  );
}
