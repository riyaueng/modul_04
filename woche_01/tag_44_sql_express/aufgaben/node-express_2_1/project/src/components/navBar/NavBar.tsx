import { NavLink } from "react-router"

export default function NavBar() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/people"}>People</NavLink>
        <NavLink to={"/starships"}>Starships</NavLink>
      </nav>
    </>
  )
}
