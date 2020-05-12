export const SETLOGINUSERTYPE = Symbol("set-login-user");

export const createSetLoginUserAction = (user) => ({
  type: SETLOGINUSERTYPE,
  payload: user,
});
