import React, { useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function BadForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const renderCount = useRef(0);
  renderCount.current += 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    if (!email.includes("@")) {
      alert("Email должен содержать @!");
      return;
    }

    if (!acceptedTerms) {
      alert("Необходими принять условия!");
      return;
    }

    alert("Успешно прошла регистрация!");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Плохая форма регистрации!</h2>
      <p>Счетчик ререндеров: {renderCount.current}</p>
      <div>
        <label>Имя:</label>
        <Input
          type="text"
          value={name}
          onChange={setName}
        />
      </div>

      <div>
        <label>Фамилия:</label>
        <Input
          type="text"
          value={lastName}
          onChange={setLastName}
        />
      </div>

      <div>
        <label>Email:</label>
        <Input
          type="email"
          value={email}
          onChange={setEmail}
        />
      </div>

      <div>
        <label>Пароль:</label>
        <Input
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>

      <div>
        <label>Подтверждение пароля:</label>
        <Input
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </div>

      <div>
        <label>Роль:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Студент</option>
          <option value="teacher">Преподаватель</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          Принимаю условия
        </label>
      </div>

      <Button type="submit">
        Зарегистрироваться
      </Button>
    </form>
  );
}
