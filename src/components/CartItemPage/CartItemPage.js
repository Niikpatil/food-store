import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, quantityCart } from "../../redux/actions/pizzaActions";

const CartItemPage = ({ CartList, removeFromCart, quantityCart }) => {
  const [itemQt, setItemQt] = useState(CartList.qty);

  const onChangeHandler = (e) => {
    setItemQt(e.target.value);
    quantityCart(CartList.id, e.target.value);
  };

  return (
    <div className="card m-2">
      <div className="card-header">
        <p className="card-title text-bold">
          <b>{CartList.title}</b>
        </p>
        <button
          onClick={() => removeFromCart(CartList.id)}
          // type="button"
          className="btn-close btn-sm"
          aria-label="Close"
        ></button>
      </div>
      <div className="card-body">
        <p className="card-text">{CartList.description}</p>
        <p className="card-text">₹{CartList.price}</p>

        <div className="input-group input-group-sm ">
          <span className="input-group-text" id="qty">
            Quntity
          </span>
          <input
            type="number"
            min="1"
            id="qty"
            name="qty"
            value={itemQt}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    quantityCart: (id, value) => dispatch(quantityCart(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemPage);
