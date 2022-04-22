import { createStore } from "redux";
import rootReducer from "./rootReducers";

function saveToLocalStorage(state) {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem("persistantState", serialisedState);
}

function loadFromLocalStorage() {
  const serialisedState = localStorage.getItem("persistantState");
  if (serialisedState === null) {
    return undefined;
  }
  return JSON.parse(serialisedState);
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  // {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
