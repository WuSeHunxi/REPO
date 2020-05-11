import loginService from "../services/loginService.js";

export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
  },
  mutations: {
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setUser(state, userObj) {
      state.data = userObj;
    },
  },
  actions: {
    //根据仓库中的数据在action中进行副作用操作：登录，退出登录，初始化等操作
    async login(context, payload) {
      context.commit("setIsLoading", true);
      const resp = await loginService.login(payload.loginId, playload.loginPwd);
      if (resp) {
        context.commit("setUser", resp);
        localStorage.setItem("loginUser", JSON.stringify(resp));
        return true;
      }
      context.commit("setIsLoading", false);
      return false;
    },
    loginOut(context) {
      context.commit("setUser", null);
      localStorage.removeItem("loginUser");
    },
    syncLocal(context) {
      const local = localStorage.getItem("loginUser");
      if (local) {
        const user = JSON.parse(local);
        context.commit("setUser", user);
      }
    },
  },
};
