import {
  ADD_CART_PIZZA,
  REMOVE_CART_PIZZA,
  QUANTITY_CART_PIZZA,
} from "../constants/pizzaTypes";

import dataPizza from "../../api/dataPizza";

const initialState = {
  pizzaList: dataPizza,
  cart: [],
  currentItem: null,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_PIZZA:
      // Great Item data from products array
      const item = state.pizzaList.find(
        (plist) => plist.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((x) =>
        x.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((x) =>
              x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case REMOVE_CART_PIZZA:
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload.id),
      };

    case QUANTITY_CART_PIZZA:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};

export default pizzaReducer;
