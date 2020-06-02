const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./file/1.txt");
fs.writeFile(
  filename,
  "iqiqiqi",
  {
    encoding: "utf-8",
    flag: "a",
  },
  (err) => {
    console.log("成功写入");
    console.log(err);
  }
);

async function test() {
  await fs.promises.writeFile(filename, "pppp", {
    flag: "a",
  });
  console.log("Promise操作写入成功");
}
test();
