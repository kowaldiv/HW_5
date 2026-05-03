import { ThemeProvider } from "./ThemeProvider";
import Todo from "./Todo";

export default function Bonus() {

  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}
