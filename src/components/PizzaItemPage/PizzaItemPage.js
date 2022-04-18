import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/pizzaActions";
import { connect } from "react-redux";
import "./Card.style.css";

const PizzaItemPage = ({ PizzaList, addToCart }) => {
  return (
    <div className="card-item">
      <div className="basic-grid">
        <img src={PizzaList.imageURL} alt="Food Images" />
        <div>
          <b>{PizzaList.title}</b>
          <p>
            <small>{PizzaList.description}</small>
          </p>
          <h5>₹ {PizzaList.price}</h5>
        </div>
        <div>
          <span className="desc">
            <button
              onClick={() => addToCart(PizzaList.id)}
              className="btn btn-sm btn-warning me-md-2"
            >
              Add Cart
            </button>
            <Link to="cart">
              <button className="btn btn-sm btn-danger ">View Cart</button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(null, mapDispatchToProps)(PizzaItemPage);
