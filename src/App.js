import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HeaderNavbar from './app/components/HeaderNavbar';
import Home from './app/components/Home';
import CartItems from './app/components/CartItems';
import ProductDetails from './app/components/ProductDetails';
import ProccedToCheckout from "./app/components/ProccedToCheckout";


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <HeaderNavbar />
          <Home />
        </Route>

        <Route path="/cart">
          <HeaderNavbar />
          <CartItems />
        </Route>

        <Route path="/details/:productID">
          <HeaderNavbar />
          <ProductDetails />
        </Route>

        <Route path="/procced">
          <HeaderNavbar />
          <ProccedToCheckout />
        </Route>

        <Route path="*">
          <center><Link to="/">Back To Home</Link><h1>404 route not found</h1></center>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
