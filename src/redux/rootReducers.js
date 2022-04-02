import { combineReducers } from "redux";
import pizzaReducer from "./reducers/pizzaReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
});

export default rootReducer;
