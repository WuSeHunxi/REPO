const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("请求来了");
  const urlobj = url.parse(req.url);
  res.setHeader("a", "1");
  //   res.write();
  res.end("你好");
  console.log(urlobj);
  console.log(req.method);
  console.log(req.headers);
  res.on("data", (chunk) => {
    console.log(chunk.toString("utf-8"));
  });
  req.on("end", () => {
    console.log("请求体发送结束");
  });
});

server.listen(9572);
server.on("listening", () => {
  console.log("server listening 9572");
});
