import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions/pizzaActions";

const PizzaItemPage = ({ PizzaList, addToCart }) => {
  return (
    <div className="card m-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 bg-secondary text-white">
          {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{PizzaList.title}</h5>
            <p className="card-text">{PizzaList.description}</p>
            <p className="card-text">{PizzaList.price}</p>
            <p className="card-text ">
              <Link to="cart">
                <button className="btn btn-sm btn-danger">View Cart</button>
              </Link>

              <button
                onClick={() => addToCart(PizzaList.id)}
                className="m-3 btn btn-sm btn-warning"
              >
                Add Cart
              </button>
            </p>
          </div>
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
