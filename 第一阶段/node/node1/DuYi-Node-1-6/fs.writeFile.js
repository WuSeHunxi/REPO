const fs = require("fs");
const path = require("path");

//文件可以不存在，但是目录必须存在
const filename = path.resolve(__dirname, "./myfiles/2.txt");

async function test() {
  // await fs.promises.writeFile(filename, "阿斯顿发发放到发", {
  //   flag: "a" //追加内容
  // });
  //写入的内容是Buffer
  const buffer = Buffer.from("abcde", "utf-8");
  await fs.promises.writeFile(filename, buffer);
  console.log("写入成功");
}

test();
