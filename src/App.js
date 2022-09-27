import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AuthProvider from "./Providers/AuthProvider";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Switch>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/checkOut" component={CheckOutPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
