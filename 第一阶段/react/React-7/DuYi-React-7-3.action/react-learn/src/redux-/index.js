import { createStore, bindActionCreators } from "redux";
import * as actionTypes from "./action/action-type";
import * as numberActions from "./action/number-action";

function reducer(state, action) {
  if (action.type === actionTypes.INCREASE) {
    return state + 1;
  } else if (action.type === actionTypes.DECREASE) {
    return state - 1;
  } else if (action.type === actionTypes.SET) {
    return action.payload;
  }
  return state;
}

const store = createStore(reducer, 10);
const boundActions = bindActionCreators(numberActions, store.dispatch);
boundActions.getIncreaseAction();

boundActions.getSetAction(3);
