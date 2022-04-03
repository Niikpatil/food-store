import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <nav className="navbar navbar-expand-lg navbar-secondary bg-light shadow-sm">
      <div className="container-fluid">
        <nav className="navbar navbar-light ">
          <h5>
            <a href="/" className="text-decoration-none">
              Delicious Pizza 🍕
            </a>
          </h5>
        </nav>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExampleDefault"
        >
          <Link to="cart" className="btn btn-secondary btn-sm ml-3">
            <i className="fa fa-shopping-cart"></i>Cart
            <span className="badge badge-light">{cartCount}</span>
            <div className="cart">
              <i className="fa fa-shopping-cart"></i>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.pizza.cart,
  };
};

export default connect(mapStateToProps)(Header);
