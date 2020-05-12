import { SETLOGINUSERTYPE } from "../action/loginUserAction";

const initialState = null;

//导出的是箭头函数 是loginUserReducer
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SETLOGINUSERTYPE:
      return payload;
    default:
      return state;
  }
};
