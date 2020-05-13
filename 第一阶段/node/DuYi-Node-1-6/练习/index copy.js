const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/1.txt");
fs.readFile(filename, "utf-8", (err, content) => {
  console.log(content);
});

async function test() {
  const content = await fs.promises.readFile(filename, "utf-8");
  console.log(content);
}
test();
