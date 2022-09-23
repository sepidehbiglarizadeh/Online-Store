import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="activeLink" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeLink" to="/cart">Cart</NavLink>
          </li>
        </ul>
        <div>Sepideh Shopping</div>
      </nav>
    </header>
  );
};

export default Navigation;
