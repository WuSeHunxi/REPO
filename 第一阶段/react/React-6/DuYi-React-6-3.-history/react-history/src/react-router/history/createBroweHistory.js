export default function createBrowerHistory(options = {}) {
  const {
    basename = "",
    forceRefresh = false,
    keyLength = 6,
    getUserConfirmation = (message, callback) => {
      callback(window.confirm(message));
    },
  } = options;

  function go(step) {
    window.history.go(step);
  }

  function goForward() {
    window.history.forward();
  }

  function goBack() {
    window.history.back();
  }

  function push(path,state) {
      changePage(path,state,true);
  }

  function createHref(location) {}
  const history = {
    action: "POP",
    go,
    goBack,
    push,
    goForward,
    createHref,
    length: window.history.length,
    location: createLocation(basename),
  };
  return history;
}

function createLocation(basename = "") {
  let pathname = window.location.pathname;
  const reg = new RegExp(`^${basename}`);
  pathname = pathname.replace(reg, "");
  const location = {
    hash: window.location.hash,
    search: window.location.hash,
    pathname,
  };
  let state;
  let historyState = window.history.state;
  if (historyState === null) {
    state = undefined;
  } else if (typeof historyState !== "object") {
    state = historyState;
  } else {
    if ("key" in historyState) {
      location.key = historyState.key;
      state = location.state;
    } else {
      state = historyState;
    }
  }
  location.state = state;
  return location;
}
