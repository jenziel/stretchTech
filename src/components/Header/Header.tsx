import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <NavLink to="/" style={{color: `inherit`, textDecoration: `inherit`}}>
        <h1>Parks Passport</h1>
      </NavLink>
      <NavLink to="/favorites" style={{color: `inherit`, textDecoration: `inherit`}}>Favorites</NavLink>
    </header>
  );
}

export default Header;
