import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItemPage from "../CartItemPage/CartItemPage";

const CartPage = ({ cart }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setCartItem(items);
    setTotalAmount(price);
  }, [cart, totalAmount, cartItem, setTotalAmount, setCartItem]);

  return (
    <div className="row justify-content-around">
      {/* Responsible for Cart List item */}
      <div className="col-4 mt-4 cart">
        {cart.length !== 0 ? (
          cart.map((itemList) => (
            <CartItemPage key={itemList.id} CartList={itemList} />
          ))
        ) : (
          <h3>Cart is Empty</h3>
        )}
      </div>

      {/* Responsible for price,total, summry */}

      <div className="col-4 col-lg-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          {/* <span className="badge bg-primary rounded-pill">{cartItem}</span> */}
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product Items</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted"> {cartItem} </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Discount</h6>
              <small className="text-muted">Limited Offer</small>
            </div>
            <span className="text-muted"> - ₹10 </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">MRP</h6>
              <small className="text-muted">With CGST+SGST </small>
            </div>
            <span className="text-muted">₹ {totalAmount}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-danger">
              <h6 className="my-0">Total</h6>
              <small className="text-muted">Including Discount</small>
            </div>
            <strong>{totalAmount <= 0 ? "0" : `₹ ${totalAmount - 10}`}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.pizza.cart,
  };
};

export default connect(mapStateToProps)(CartPage);
