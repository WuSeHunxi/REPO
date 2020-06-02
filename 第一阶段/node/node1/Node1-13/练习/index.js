// const { EventEmitter } = require("events");
// const ee = new EventEmitter();
// ee.on("abc", (...args) => {
//   console.log("abc事件被触发了");
//   console.log(...args);
// });

// ee.emit("abc", 1, 2, 3);
const MyRequest = require("./MyRequest");
const request = new MyRequest("http://duyi.ke.qq.com");

request.send();
request.on("res", (headers, body) => {
  console.log(headers, body);
});
