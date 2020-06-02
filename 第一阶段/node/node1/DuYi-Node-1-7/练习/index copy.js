const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./a.txt");
const rs = fs.createReadStream(filename, {
  encoding: "utf-8",
  highWaterMark: 1,
  autoClose: true,
});

rs.on("open", () => {
  console.log("文件被打开了");
});

rs.on("error", () => {
  console.log("出错了！");
});

rs.on("data", (chunk) => {
  console.log(chunk);
  rs.pause();
});

rs.on("pause", () => {
  console.log("暂停了");
  setTimeout(() => {
    rs.resume();
  }, 1000);
});

// rs.on("resume", () => {
//   console.log("恢复了");
// });

rs.on("end", () => {
  console.log("全部数据读取完毕");
});


rs.on("close", () => {
  console.log("文件读完了，关闭");
});

// rs.close();
