const http = require("http");
const request = http.request(
  "http://yuanjin.tech:5005/api/movie",
  {
    method: "GET",
  },
  (resp) => {
    console.log(resp.statusCode);
    console.log(resp.headers);
    let result = "";
    resp.on("data", (chunk) => {
      result += chunk.toString("utf-8");
    });
    resp.on("end", (chunk) => {
      console.log(JSON.parse(result));
    });
  }
);
//发送请求
request.end();
