import { memo } from "react";
import { Button } from "../../components/Button";
import { useTheme } from "./ThemeProvider";
import type { Todo } from "./Todo";

export const TodoItem = memo(
  ({
    todo,
    toggleTodo,
    deleteTodo,
  }: {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
  }) => {
    console.log("dfsasdfas");
    const { theme } = useTheme();
    return (
      <div
        className={`border p-3 rounded-xl ${theme === "light" ? "bg-gray-300" : "bg-gray-700"} flex flex-col gap-2 `}
      >
        <div>
          <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
            {todo.name}
          </p>
          <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
            {todo.isDone ? "Выполнено!" : "Невыполнено"}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            value="Сделано!"
            onClick={() => toggleTodo(todo.id)}
            className={`${theme === "light" ? "text-black" : "text-white"}`}
          />
          <Button
            value="Удалить!"
            onClick={() => deleteTodo(todo.id)}
            className={`${theme === "light" ? "text-black" : "text-white"}`}
          />
        </div>
      </div>
    );
  },
);
