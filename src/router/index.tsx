import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";

const UseContext = lazy(() => import("../tasks/1.1UseContext"));
const UseCallBack = lazy(() => import("../tasks/1.2UseCallBack"));
const UseMemo = lazy(() => import("../tasks/1.3UseMemo"));
const UseRef = lazy(() => import("../tasks/1.4UseRef"));
const UseReducer = lazy(() => import("../tasks/1.5UseReducer"));
const ReactMemo = lazy(() => import("../tasks/1.6ReactMemo"));
const Bonus = lazy(() => import("../tasks/1.7-bonus/1.7Bonus"));
const BadForm = lazy(() => import("../tasks/2.1BadForm"));
const GoodForm = lazy(() => import("../tasks/2.2-good-form/2.2GoodForm"));
const GoodFormFormic = lazy(
  () => import("../tasks/2.3-good-form-formic/2.3GoodFormFormic"),
);

export function LazyPage({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={"Загрузка страницы..."}>{children}</Suspense>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "1.1",
        element: (
          <LazyPage>
            <UseContext />
          </LazyPage>
        ),
      },
      {
        path: "1.2",
        element: (
          <LazyPage>
            <UseCallBack />
          </LazyPage>
        ),
      },
      {
        path: "1.3",
        element: (
          <LazyPage>
            <UseMemo />
          </LazyPage>
        ),
      },
      {
        path: "1.4",
        element: (
          <LazyPage>
            <UseRef />
          </LazyPage>
        ),
      },
      {
        path: "1.5",
        element: (
          <LazyPage>
            <UseReducer />
          </LazyPage>
        ),
      },
      {
        path: "1.6",
        element: (
          <LazyPage>
            <ReactMemo />
          </LazyPage>
        ),
      },
      {
        path: "1.7",
        element: (
          <LazyPage>
            <Bonus />
          </LazyPage>
        ),
      },
      {
        path: "2.1",
        element: (
          <LazyPage>
            <BadForm />
          </LazyPage>
        ),
      },
      {
        path: "2.2",
        element: (
          <LazyPage>
            <GoodForm />
          </LazyPage>
        ),
      },
      {
        path: "2.3",
        element: (
          <LazyPage>
            <GoodFormFormic />
          </LazyPage>
        ),
      },
    ],
  },
]);
