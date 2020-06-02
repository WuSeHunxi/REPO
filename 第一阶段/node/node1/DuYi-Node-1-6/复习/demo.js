const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./index.txt");
//读文件
// async function test() {
//   const content = await fs.promises.readFile(dirname, {
//     encoding: "utf-8",
//   });
//   console.log(content);
//   console.log("读取成功");
// }
// test();

//写文件
// async function test() {
//   await fs.promises.writeFile(dirname, "hahahahhaha", {
//     encoding: "utf-8",
//     flag: "a",
//   });
//   console.log("写文件成功");
// }
// test();

//手动复制文件
// const filepath = path.resolve(__dirname, "./index.txt");
// const newPath = path.resolve(__dirname, "./demo.txt");
// async function test() {
//   const content = await fs.promises.readFile(filepath, "utf-8");
//   if (content) {
//     await fs.promises.writeFile(newPath, content, {
//       encoding: "utf-8",
//       flag: "a",
//     });
//     console.log("文件读取成功");
//   } else {
//     console.log("文件内容不存在，无需复制");
//   }
// }
// test();

// async function test() {
//   const status = await fs.promises.stat(dirname);
//   console.log(status);
//   console.log(status.isDirectory());
// }
// test();

const dirpath = path.resolve(__dirname, "./dir");
async function exit() {
  try {
    await fs.promises.stat(dirpath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}
async function test() {
  const result = await exit();
  if (result) {
    console.log("目录已存在，无需再创建");
  } else {
    await fs.promises.mkdir(dirpath);
    console.log("目录创建成功");
  }
}
test();
