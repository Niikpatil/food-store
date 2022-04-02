import { ADD_PIZZA_CART, REMOVE_PIZZA_CART } from "../constants/pizzaTypes";

const initialState = {
  numOfPizza: 10,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART:
      return {
        ...state,
        numOfPizza: state.numOfPizza + 1,
      };

    case REMOVE_PIZZA_CART:
      return {
        ...state,
        numOfPizza: state.numOfPizza - 1,
      };

    default:
      return state;
  }
};

export default pizzaReducer;
