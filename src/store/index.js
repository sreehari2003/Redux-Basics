import { createStore, getState, subscribe } from "redux";

const initiaState = { showCounter: true, counter: 0 };

const counterReducer = (state = initiaState, action) => {
  if (action.type === "add") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "sub") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "toggle") {
    return {
      counter: 0,
      showCounter: state.showCounter ? false : true,
    };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;
