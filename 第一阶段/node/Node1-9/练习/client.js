const http = require("http");
const request = http.request(
  "http://yuanjin.tech:5005/api/movie",
  {
    // hostname: "localhost",
    // headers: {
    //   a: 1,
    // },
    // port: 8090,
    method: "GET",
  },
  (res) => {
    console.log(res.statusCode);
    console.log(res.headers);
    res.on("data", (content) => {
      console.log(JSON.stringify(content.toString("utf-8")).split(","));
    });
    res.on("end", () => {
      console.log("结束");
    });
  }
);

request.end();
