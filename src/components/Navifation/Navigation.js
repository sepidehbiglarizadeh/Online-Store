import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div>Sepideh Shopping</div>
          <li>
            <NavLink activeClassName="activeLink" exact to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink activeClassName="activeLink" to="/cart">
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
          <li>
            <NavLink to="/login">Log-in/sign-up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
