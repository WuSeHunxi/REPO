const fs = require("fs");
const path = require("path");

async function test() {
  /**
   * 复制：先把文件内容读出来，然后在写入另一个文件中
   */
  const fromFilename = path.resolve(__dirname, "./myfiles/1.jpeg");
  const buffer = await fs.promises.readFile(fromFilename);
  const toFilename = path.resolve(__dirname, "./myfiles/1.copy.jpeg");
  await fs.promises.writeFile(toFilename, buffer);
  console.log("copy success！");
}

test();
