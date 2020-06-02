const fs = require("fs");
const path = require("path");

async function test() {
//   const dirname = path.resolve(__dirname, "./file/children");
//   await fs.promises.mkdir(dirname);
//   console.log("目录创建成功");
    const filename=path.resolve(__dirname,'./file/children/1.txt')
    await fs.promises.writeFile(filename, "oqoqoqooq");
    console.log("成功创建文件");
    console.log(__dirname)
}
test();
