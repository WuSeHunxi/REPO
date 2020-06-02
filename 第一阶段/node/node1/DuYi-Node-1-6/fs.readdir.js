const fs = require("fs");
const path = require("path");
//子目录
const dirname = path.resolve(__dirname, "./myfiles/");
async function test() {
  const pathes = await fs.promises.readdir(dirname);
  console.log(pathes);
}

test();
