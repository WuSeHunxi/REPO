const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/1.txt");
async function test() {
  const stat = await fs.promises.stat(filename);
  console.log(stat);
  console.log(stat.isDirectory());
  console.log(stat.isFile());
}
test()