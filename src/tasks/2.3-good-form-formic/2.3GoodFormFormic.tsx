import { schema, type FormData } from "./schema";
import { useFormik } from "formik";
import { useRef } from "react";
import { Button } from "../../components/Button";

const fakeApi = async (data: FormData): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export default function GoodFormFormic() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      agree: false,
    },
    validationSchema: schema,
    onSubmit: async (values, { setFieldError, resetForm }) => {
      try {
        await fakeApi(values);
        resetForm();
      } catch {
        setFieldError("email", "Этот email уже занят");
      }
    },
  });

  const renderCount = useRef(0); // счетчик
  renderCount.current += 1;

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Хорошая форма! (Formik)</h2>
      <p>Счетчик ререндеров: {renderCount.current}</p>

      <div>
        <label htmlFor="firstName">Имя</label>
        <input
          id="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          aria-invalid={!!(formik.touched.firstName && formik.errors.firstName)}
          aria-describedby={
            formik.touched.firstName && formik.errors.firstName
              ? "firstName-error"
              : undefined
          }
          className="border"
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <span id="firstName-error" role="alert">
            {formik.errors.firstName}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          aria-invalid={!!(formik.touched.email && formik.errors.email)}
          aria-describedby={
            formik.touched.email && formik.errors.email
              ? "email-error"
              : undefined
          }
          className="border"
        />
        {formik.touched.email && formik.errors.email && (
          <span id="email-error" role="alert">
            {formik.errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          aria-invalid={!!(formik.touched.password && formik.errors.password)}
          aria-describedby={
            formik.touched.password && formik.errors.password
              ? "password-error"
              : undefined
          }
          className="border"
        />
        {formik.touched.password && formik.errors.password && (
          <span id="password-error" role="alert">
            {formik.errors.password}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Подтверждение пароля</label>
        <input
          id="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          aria-invalid={
            !!(formik.touched.confirmPassword && formik.errors.confirmPassword)
          }
          aria-describedby={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "confirmPassword-error"
              : undefined
          }
          className="border"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <span id="confirmPassword-error" role="alert">
            {formik.errors.confirmPassword}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="role">Роль</label>
        <select
          id="role"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
          aria-invalid={!!(formik.touched.role && formik.errors.role)}
          aria-describedby={
            formik.touched.role && formik.errors.role ? "role-error" : undefined
          }
          className="border"
        >
          <option value="">Выберите роль</option>
          <option value="student">Студент</option>
          <option value="teacher">Преподаватель</option>
        </select>
        {formik.touched.role && formik.errors.role && (
          <span id="role-error" role="alert">
            {formik.errors.role}
          </span>
        )}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={formik.values.agree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-invalid={!!(formik.touched.agree && formik.errors.agree)}
            aria-describedby={
              formik.touched.agree && formik.errors.agree
                ? "agree-error"
                : undefined
            }
            className="border"
          />
          Принимаю условия
        </label>
        {formik.touched.agree && formik.errors.agree && (
          <span id="agree-error" role="alert">
            {formik.errors.agree}
          </span>
        )}
      </div>

      <Button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Отправляем..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
}
