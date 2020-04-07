import { combineReducers } from "redux";
import initialState from "./initialState";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const collapseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN":
      return Object.assign({}, state, { open: action.payload });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  collapse: collapseReducer,
});

export default rootReducer;
