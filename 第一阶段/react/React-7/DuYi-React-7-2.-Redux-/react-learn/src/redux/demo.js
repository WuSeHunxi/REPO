import { createStore } from "react";

//先写reducer
function reducer(state, action) {
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  }
  return state;
}

const store = createStore(reducer, 10);

const action={
    type:"increase"
}

console.log(store.getState());

store.dispatch(action)

console.log(store.getState())