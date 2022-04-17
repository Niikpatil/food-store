import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

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
        <div className="card-title text-bold">
          <b>{CartList.title}</b>
          <h2
            className="btn btn-sm"
            onClick={() => removeFromCart(CartList.id)}
          >
            <BsTrash />
          </h2>
        </div>
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
