import React from "react";

const CartItemPage = ({ CartList }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{CartList.title}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
};

export default CartItemPage;
