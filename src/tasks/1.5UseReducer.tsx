import { useReducer, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
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
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
  }
}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: inputValue });
    setInputValue("");
  };

  return (
    <div>
      <Input value={inputValue} onChange={setInputValue} />
      <Button value="Добавить" onClick={() => handleAddTodo()} />
      <div>
        {todos.map((todo) => {
          return (
            <div className="border p-4 rounded-xl">
              <p>{todo.text}</p>
              <p>{todo.completed ? "Завершено" : "Незавершено"}</p>
              <Button
                value={todo.completed ? "Отменить завершение" : "Завершить"}
                onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
              />
              <Button
                value="Удалить"
                onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
