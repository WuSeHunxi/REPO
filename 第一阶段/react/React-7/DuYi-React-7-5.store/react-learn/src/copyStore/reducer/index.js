import loginUserReducer from "./loginUsers";
import usersReducer from "./users";

export default (state = {}, action) => {
  const newState = {
    loginUsers: loginUserReducer(state.loginUsers, action),
    users: usersReducer(state.users, action),
  };

  return newState;
};
