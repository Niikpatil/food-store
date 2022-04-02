import React from "react";
import { connect } from "react-redux";
import PizzaItemPage from "../PizzaItemPage/PizzaItemPage";

const PizzaPage = ({ pizzaList }) => {
  return (
    <div>
      {pizzaList.map((plist) => (
        <PizzaItemPage key={plist.id} PizzaList={plist} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaList: state.pizza.pizzaList,
  };
};

export default connect(mapStateToProps)(PizzaPage);
