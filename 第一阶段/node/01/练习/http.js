var http = require("http");
var fs = require("fs");
var serve = http.createServer();

serve.on("request", function (request, response) {
  var url = request.url;
  console.log(url);
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (url === "/index") {
    response.end("访问了主页");
  } else if (url === "/login") {
    response.end("登录");
  } else {
    fs.readFile("./ab2.jpg", function (err, data) {
      if (err) {
        response.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败，请稍后重试！");
      } else {
        response.setHeader("Content-Type", "image/jpeg");
        response.end(data);
      }
    });
  }
});

serve.listen(3000, function () {
  console.log("serve is listening~");
});
