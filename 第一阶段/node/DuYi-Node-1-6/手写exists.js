const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myfiles/3");

async function exists(filename) {
  try {
    //读取状态，存在的话就是true，反之为false
    await fs.promises.stat(filename);
    return true;
  } catch (err) {
    if (err.code === "ENOENT") {
      //文件不存在
      return false;
    }
    throw err;
  }
}

async function test() {
  const result = await exists(dirname);
  if (result) {
    console.log("目录已存在，无需操作");
  } else {
    await fs.promises.mkdir(dirname);
    console.log("目录创建成功");
  }
}

test();
