const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/1.txt");
async function test() {
  /**
   * 先读再写
   */
  const fileBuffer = await fs.promises.readFile(filename);
  const newPath = path.resolve(__dirname, "./file/1-copy.txt");
  await fs.promises.writeFile(newPath, fileBuffer);
  console.log("copy 成功");
}
test();
