import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div className="text-center">
        <Product />
        <p>product list</p>
      </div>
    );
  }
}
