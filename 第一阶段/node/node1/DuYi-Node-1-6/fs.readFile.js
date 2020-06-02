const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./myfiles/1.txt");
//第一个参数是文件路径，如果要写相对路径的话是相对于当前的命令行的路径
// fs.readFile(filename, "utf-8", (err, content) => {
//   console.log(content);
// });

// Sync函数是同步的，会导致JS运行阻塞，极其影响性能（通常情况下不用）
// 通常，在程序启动时运行有限的次数即可
// const content = fs.readFileSync(filename, "utf-8");
// console.log(content);

//新的API，也是异步读取文件
async function test() {
  const content = await fs.promises.readFile(filename, "utf-8");
  console.log(content);
}

test();
