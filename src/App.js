import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Default from "./components/Default";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="/default" component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
