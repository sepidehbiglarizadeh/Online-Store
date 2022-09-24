import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
};

export default App;
