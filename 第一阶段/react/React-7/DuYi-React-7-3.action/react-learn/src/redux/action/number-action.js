import * as actionTypes from "./action-type";

/**
 * 得到一个用于增加数字操作的action
 */
export function getIncreaseAction() {
  return {
    type: actionTypes.INCREASE,
  };
}

export function getDecreaseAction() {
  return {
    type: actionTypes.DECREASE,
  };
}

//设置新的数据
export function getSetAction(newNumber) {
  return {
    type: actionTypes.SET,
    payload: newNumber,
  };
}
