import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Parks Passport</h1>
      </NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </header>
  );
}

export default Header;
