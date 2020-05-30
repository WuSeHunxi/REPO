const path = require("path");
const fs = require("fs");
const dirname = path.resolve(__dirname, "./index.txt");
// const ws = fs.createWriteStream(dirname, {
//   encoding: "utf-8",
//   flags: "a",
//   highWaterMark: 3,
//   autoClose: true,
// });
// ws.write("aaaa");
// ws.on("close", () => {
//   console.log("文件写入完成，关闭写入流");
//   //   ws.end();
// });
const ws = fs.createWriteStream(dirname, {
  encoding: "utf-8",
  autoClose: true,
  highWaterMark: 16 * 1024,
});
let i = 0;
function write() {
  var flag = true;
  while (i < 1024 * 1024 * 10 && flag) {
    flag = ws.write("a");
    i++;
  }
}

write();
ws.on("drag", () => {
  write();
});
