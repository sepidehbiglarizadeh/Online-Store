import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const {cart}=useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="activeLink" exact to="/">Home</NavLink>
          </li>
          <li className="cartLink">
            <NavLink activeClassName="activeLink" to="/cart">Cart 
            </NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
        <div>Sepideh Shopping</div>
      </nav>
    </header>
  );
};

export default Navigation;
