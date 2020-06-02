const MyRequest = require("./MyRequest");

const request = new MyRequest("http://duyi.ke.qq.com");

request.send(); //发送完请求就会触发res事件

request.on("res", (headers, body) => {
  console.log(headers);
  console.log(body);
});
