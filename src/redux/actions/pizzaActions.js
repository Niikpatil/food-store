import {
  ADD_CART_PIZZA,
  REMOVE_CART_PIZZA,
  QUANTITY_CART_PIZZA,
  CLEAR_CART_PIZZA,
} from "../constants/pizzaTypes";

export const addPizza = (itemId) => {
  return {
    type: ADD_CART_PIZZA,
    payload: {
      id: itemId,
    },
  };
};

export const removePizza = (itemId) => {
  return {
    type: REMOVE_CART_PIZZA,
    payload: {
      id: itemId,
    },
  };
};

export const quantityPizza = (itemId, value) => {
  return {
    type: QUANTITY_CART_PIZZA,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};
