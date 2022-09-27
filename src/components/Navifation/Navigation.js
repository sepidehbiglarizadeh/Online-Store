import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const userData= useAuth();

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
            <NavLink to={userData ? "/profile" : "/login"}>{userData? `${userData.name}` : "Log-in/sign-up"}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
