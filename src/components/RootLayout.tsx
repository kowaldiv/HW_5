import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function RootLayout() {
  return (
    <div className="grid gap-4">
      <Header />
      <Outlet />
    </div>
  )
}