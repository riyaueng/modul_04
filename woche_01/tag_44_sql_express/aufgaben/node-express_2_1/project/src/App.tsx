import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import CardList from "./pages/cardList/CardList"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:linkParam" element={<CardList />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
