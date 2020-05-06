import React from "react";
import useReducer from './useReducer'

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

export default function App() {
//   const [n, setN] = useState(0);
//   function dispatch(action) {
//     const newState = reducer(n, action);
//     setN(newState);
//     // return newState;
//   }
 const [n,dispatch]=useReducer(reducer,10)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        -
      </button>
      <span>{n}</span>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        +
      </button>
    </div>
  );
}
