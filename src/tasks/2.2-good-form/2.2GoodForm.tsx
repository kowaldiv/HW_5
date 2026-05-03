import { useForm } from "react-hook-form";
import { schema, type FormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { Button } from "../../components/Button";

const fakeApi = async (data: FormData): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export default function GoodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const renderCount = useRef(0); // счетчик
  renderCount.current += 1;

  const onSubmit = async (data: FormData) => {
    try {
      await fakeApi(data);
      reset();
      alert("Успешно!"); // тут должно переносить пользователя на другую страницу или нормальный UI
    } catch {
      setError("email", { message: "Этот email уже занят" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Хорошая форма!</h2>
      <p>Счетчик ререндеров: {renderCount.current}</p>

      <div>
        <label htmlFor="firstName">Имя</label>
        <input
          id="firstName"
          type="text"
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          {...register("firstName")}
          className="border"
        />
        {errors.firstName && (
          <span id="firstName-error" role="alert">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="lastName">Фамилия</label>
        <input
          id="lastName"
          type="text"
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          {...register("lastName")}
          className="border"
        />
        {errors.lastName && (
          <span id="lastName-error" role="alert">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className="border"
        />
        {errors.email && (
          <span id="email-error" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          aria-invalid={!!errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password")}
          className="border"
        />
        {errors.password && (
          <span id="password-error" role="alert">
            {errors.password.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Подтверждение пароля</label>
        <input
          id="confirmPassword"
          type="password"
          aria-invalid={!!errors.confirmPassword}
          aria-describedby={
            errors.confirmPassword ? "confirmPassword-error" : undefined
          }
          {...register("confirmPassword")}
          className="border"
        />
        {errors.confirmPassword && (
          <span id="confirmPassword-error" role="alert">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="role">Роль</label>
        <select
          id="role"
          aria-invalid={!!errors.role}
          aria-describedby={errors.role ? "role-error" : undefined}
          {...register("role")}
          className="border"
        >
          <option value="">Выберите роль</option>
          <option value="student">Студент</option>
          <option value="teacher">Преподаватель</option>
        </select>
        {errors.role && (
          <span id="role-error" role="alert">
            {errors.role.message}
          </span>
        )}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            aria-invalid={!!errors.agree}
            aria-describedby={errors.agree ? "agree-error" : undefined}
            {...register("agree")}
            className="border"
          />
          Принимаю условия
        </label>
        {errors.agree && (
          <span
            id="agree-error"
            role="alert"
            style={{ color: "red", fontSize: 14 }}
          >
            {errors.agree.message}
          </span>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправляем..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
}
