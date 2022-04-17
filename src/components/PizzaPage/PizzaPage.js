import React from "react";
import { connect } from "react-redux";
import PizzaItemPage from "../PizzaItemPage/PizzaItemPage";
import "./PizzaPage.style.css";

const PizzaPage = ({ pizzaList }) => {
  return (
    <div className="basic-grid">
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
