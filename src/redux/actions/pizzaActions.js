import {
  ADD_CART_PIZZA,
  REMOVE_CART_PIZZA,
  QUANTITY_CART_PIZZA,
  // CLEAR_CART_PIZZA,
} from "../constants/pizzaTypes";

export const addToCart = (itemId) => {
  return {
    type: ADD_CART_PIZZA,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_CART_PIZZA,
    payload: {
      id: itemId,
    },
  };
};

export const quantityCart = (itemId, value) => {
  return {
    type: QUANTITY_CART_PIZZA,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
