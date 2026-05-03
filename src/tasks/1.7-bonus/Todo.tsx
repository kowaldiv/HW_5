import { useCallback, useReducer, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { TodoItem } from "./TodoItem";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export interface Todo {
  id: number;
  name: string;
  isDone: boolean;
}

type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

function reducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Date.now(),
          name: action.text,
          isDone: false,
        },
      ];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");
  const { theme, changeTheme } = useTheme();

  const handleAddTodo = useCallback(() => {
    if (inputValue.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: inputValue });
    setInputValue("");
  }, [inputValue]);

  const toggleTodo = useCallback(
    (id: number) => dispatch({ type: "TOGGLE_TODO", id: id }),
    [],
  );

  const deleteTodo = useCallback(
    (id: number) => dispatch({ type: "DELETE_TODO", id: id }),
    [],
  );

  return (
    <div
      className={`flex-1 grid gap-3 p-6 ${theme === "light" ? "bg-gray-100" : "bg-gray-900"}`}
    >
      <div className="flex flex-col items-center gap-2">
        <Button
          value="Поменять тему"
          onClick={changeTheme}
          className={`${theme === "light" ? "text-black" : "text-white"}`}
        />
        <Input
          value={inputValue}
          placeholder="Название"
          onChange={setInputValue}
          className={`${theme === "light" ? "text-black" : "text-white"}`}
        />
        <Button
          value="Добавить"
          onClick={() => handleAddTodo()}
          className={`${theme === "light" ? "text-black" : "text-white"}`}
        />
      </div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}
