import { Outlet } from "react-router"
import Header from "../components/header.tsx/Header"

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
