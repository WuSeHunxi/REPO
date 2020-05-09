/**
 * 登录信息
 */

export default {
  loginFlag: false,
  login() {
    this.loginFlag = true;
  },
  logout() {
    this.loginFlag = false;
  },
};
