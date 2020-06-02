const path = require("path");
const fs = require("fs");
// const dirname = path.resolve(__dirname, "./index.txt");

// const rs = fs.createReadStream(dirname, {
//   encoding: "utf-8",
//   autoClose: true,
//   highWaterMark: 5,
// });

// rs.on("open", () => {
//   console.log("文件被打开了");
// });

// rs.on("data", (content) => {
//   console.log("读取文件", content);
//   rs.pause();
// });

// rs.on("pause", () => {
//   console.log("暂停读取");
//   setTimeout(() => {
//     rs.resume();
//   }, 1000);
// });

// rs.on("resume", () => {
//   console.log("恢复读取");
// });

// rs.on("close", () => {
//   console.log("文件读取完毕，关闭文件读取流");
// });



async function copyFile() {
  const from = path.resolve(__dirname, "./index.txt");
  const to = path.resolve(__dirname, "./index1.txt");
  console.time("方式2");

  const rs = fs.createReadStream(from);
  const ws = fs.createWriteStream(to);
  rs.on("data", (chunk) => {
    //读到一部分数据
    const flag = ws.write(chunk);
    if (!flag) {
      //表示下一次写入，会造成背压
      rs.pause(); //暂停读取
    }
  });

  ws.on("drain", () => {
    //可以继续写了
    rs.resume();
  });

  rs.on("close", () => {
    //写完了
    ws.end(); //完毕写入流
    console.timeEnd("方式2");
    console.log("复制完成");
  });
}

copyFile();
