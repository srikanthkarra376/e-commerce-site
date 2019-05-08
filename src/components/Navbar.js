import React, { Component } from "react";
import logo from "../shophere.png";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" width="100" height="70" />
          </NavLink>
          <ul className="navbar-nav mr-5 mt-0 mt-lg-0 ">
            <li className="nav-item mr-3">
              <NavLink to="/details" className="nav-link  ">
                <h6>
                  {" "}
                  Products <i className="fab fa-product-hunt" />{" "}
                </h6>
              </NavLink>
            </li>
            <li className="nav-item mr-2">
              <NavLink to="/cart" className="nav-link pr-2  ">
                <h6>
                  Cart <i className="fas fa-shopping-cart" />
                </h6>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
