import { createHashHistory } from "history";

window.createHashHistory = createHashHistory();
window.h = createHashHistory({
  hashType: "slash",
  getUserConfirmation: (msg, callback) => {
    callback(window.confirm(msg));
  },
});

window.unblock = window.h.block((location, action) => {
  return `${location.pathname}，方式${action}`;
});
