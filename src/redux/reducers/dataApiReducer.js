import data from "../../apis/data";

const initialState = { dataStore: data };

const dataApiReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dataApiReducer;
