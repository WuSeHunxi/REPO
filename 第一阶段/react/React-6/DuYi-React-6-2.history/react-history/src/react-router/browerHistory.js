import { createBrowserHistory } from "history";

window.createBrowserHistory = createBrowserHistory;
window.h = createBrowserHistory({
  basename: "/news",
  forceRefresh: false,
  keyLength: 4,
  getUserConfirmation: (msg, callback) => {
    callback(window.confirm(msg));
  },
});

window.unblock = window.h.block((location, action) => {
  //返回信息
  return `你真的要跳转进入${location.pathname}吗？${action}`;
});
