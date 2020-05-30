const net = require("net");
const server = net.createServer();
const fs = require("fs");
const path = require("path");

server.listen(9527);

server.on("listening", () => {
  console.log("server listen 9527");
});

//客户端和服务端已经建立连接 得到数据都是在连接的时候做的
server.on("connection", (socket) => {
  //服务端也需要sokect发送数据
  console.log("有客户端连接在服务器上");
  //读请求 客户端给服务端发送了什么
  socket.on("data", async (chunk) => {
    const filename = path.resolve(__dirname, "../hsq.jpg");
    const buffer = await fs.promises.readFile(filename);
    const header = Buffer.from(
      `
        HTTP/1.1 200 OK
Content-Type: image/jpeg

`,
      "utf-8"
    );
    const result = Buffer.concat([header, buffer]);
    socket.write(result); //服务端发送响应到客户端
    socket.end();
  });
  socket.on("close", () => {
    console.log("连接关闭了");
  });
});
