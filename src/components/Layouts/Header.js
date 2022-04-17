import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

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
      <div className="container">
        <h5>
          <a href="/" className="text-decoration-none">
            Delicious Pizza 🍕
          </a>
        </h5>

        <div className="collapse navbar-collapse justify-content-end">
          <Link to="cart">
            <i className="position-relative">
              <BsFillCartCheckFill />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            </i>
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
