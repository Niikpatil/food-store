import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/pizzaActions";

const CartItemPage = ({ CartList, removeFromCart }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{CartList.title}</h5>
        <p className="card-text">{CartList.description}</p>
        <p className="card-text">{CartList.price}</p>

        <div
          class="btn-toolbar justify-content-between"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="input-group p-2">
            <button type="button" class="btn btn-outline-secondary">
              +
            </button>
            <span className="badge  form-control">cartItem</span>
            <button type="button" class="btn btn-outline-secondary">
              -
            </button>
          </div>
        </div>

        <button
          onClick={() => removeFromCart(CartList.id)}
          className="btn btn-sm btn-danger"
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemPage);
