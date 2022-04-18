import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { connect } from "react-redux";
import { removeFromCart, quantityCart } from "../../redux/actions/pizzaActions";
import "./CartItemPage.style.css";

const CartItemPage = ({ CartList, removeFromCart, quantityCart }) => {
  const [itemQt, setItemQt] = useState(CartList.qty);

  const onChangeHandler = (e) => {
    setItemQt(e.target.value);
    quantityCart(CartList.id, e.target.value);
  };

  return (
    <div className="card-container shadow-sm">
      <img src={CartList.imageURL} className="foodpicture" alt="Food Images" />

      <span>
        <small>
          <p>{CartList.title}</p>
          <p>{CartList.description}</p>
        </small>
        <b>₹{CartList.price}</b>
      </span>

      <span>
        <p>
          <b>Quantity </b>
        </p>
        <p>
          <input
            type="number"
            // id="qty"
            name="qty"
            min="1"
            max="7"
            size="2"
            value={itemQt}
            onChange={onChangeHandler}
          />
        </p>
      </span>

      <h2 className="btn btn-sm" onClick={() => removeFromCart(CartList.id)}>
        <BsTrash />
      </h2>
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
