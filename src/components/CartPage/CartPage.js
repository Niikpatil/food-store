import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItemPage from "../CartItemPage/CartItemPage";
import "./CartPage.style.css";

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
    // Responsible for Cart ListItem
    <div className="card-grid">
      <span>
        {cart.length !== 0 ? (
          cart.map((itemList) => (
            <CartItemPage key={itemList.id} CartList={itemList} />
          ))
        ) : (
          <h3>Oops ! Cart is Empty</h3>
        )}
      </span>

      {/* Responsible for price,total, summry */}
      <div className="cart-container">
        <table className="table shadow-sm">
          <thead className="table-light">
            <tr>
              <th colSpan="2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Product Items
                <p>
                  <small className="text-muted">(number of items)</small>
                </p>
              </td>
              <td>{cartItem}</td>
            </tr>
            <tr>
              <td>
                Discount
                <p>
                  <small className="text-muted">Mega offer</small>
                </p>
              </td>
              <td>₹ - 65</td>
            </tr>
            <tr>
              <td>MRP</td>
              <td>₹ {totalAmount}</td>
            </tr>
            <tr>
              <td>
                <b>Total Price</b>
              </td>
              <td>
                <b className="text-danger">
                  {totalAmount <= 0 ? "0" : `₹ ${totalAmount - 65}`}
                </b>
              </td>
            </tr>
          </tbody>
        </table>
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
