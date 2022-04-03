import React from "react";
import { connect } from "react-redux";
import CartItemPage from "../CartItemPage/CartItemPage";

const CartPage = ({ cart }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mt-4 cart">
          {cart.map((itemList) => (
            <CartItemPage key={itemList.id} CartList={itemList} />
          ))}
        </div>

        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            {/* <span className="badge bg-primary rounded-pill">3</span> */}
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Items</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product MRP</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            {/* <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
              </div>
              <span className="text-success">−$5</span>
            </li> */}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-danger">
                <h6 className="my-0">Total</h6>
              </div>
              <strong>$20</strong>
            </li>
          </ul>
        </div>
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
