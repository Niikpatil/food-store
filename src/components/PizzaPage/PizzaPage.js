import React from "react";
import { connect } from "react-redux";
import { addPizza, removePizza } from "../services";

const PizzaPage = (props) => {
  return (
    <div>
      <h4>Welcome to our PizzaShop </h4>
      <p>You Order {props.numOfPizza} Pizza's</p>
      <button onClick={props.addPizza}>Add</button>{" "}
      <button onClick={props.removePizza}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPizza: state.numOfPizza,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: () => dispatch(addPizza()),
    removePizza: () => dispatch(removePizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaPage);
