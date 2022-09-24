import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
