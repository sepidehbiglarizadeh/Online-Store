import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <ToastContainer/>
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </CartProvider>
    </Router>
  );
};

export default App;
