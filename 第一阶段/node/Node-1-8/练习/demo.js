const net = require("net");
const socket = net.createConnection(
  {
    host: "duyi.ke.qq.com",
    port: 80,
  },
  () => {
    console.log("连接成功");
  }
);

var receive = null;
socket.write(`GET / HTTP/1.1
Host:duyi.ke.qq.com
Connection:keep-alive

`);

socket.on("data", (chunk) => {
  const response = chunk.toString("utf-8");
  if (!receive) {
    receive = parseResponse(response);
    if (isOver()) {
      socket.end();
    }
    return;
  }
  receive.body += response;
  if (isOver()) {
    socket.end();
    return;
  }
});

socket.on("close", () => {
  console.log(receive.body);
  console.log("结束了");
});

function parseResponse(response) {
  const index = response.indexOf("\r\n\r\n");
  const head = response.substring(0, index);
  const body = response.substring(index + 2);
  const headParts = head.split("\r\n");
  const headArray = headParts.slice(1).map((str) => {
    return str.split(":").map((s) => s.trim());
  });
  const header = headArray.reduce((a, b) => {
    a[b[0]] = b[1];
    return a;
  }, {});
  return {
    header,
    body: body.trimStart(),
  };
}

function isOver() {
  const contentLength = +receive.header["Content-Length"];
  const cuReceivedLength = Buffer.from(receive.body, "utf-8");
  return cuReceivedLength > contentLength;
}
