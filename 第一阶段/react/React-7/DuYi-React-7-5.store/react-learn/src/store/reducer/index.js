//导入进来的是函数
import loginUserReducer from "./loginUser";
import usersReducer from "./users";
import { combineReducers } from "redux";

//将多个reducer合并成一个
export default (state = {}, action) => {
  const newState = {
    //reducer需要state和action
    loginUser: loginUserReducer(state.loginUser, action),
    users: usersReducer(state.users, action),
  };
  return newState;
};

// export default combineReducers({
//     loginUser: loginUserReducer,
//     users: usersReducer
// })
