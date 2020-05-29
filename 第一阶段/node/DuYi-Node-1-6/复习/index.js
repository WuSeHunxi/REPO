// const os = require("os");
// console.log(os.cpus());

// const path = require("path");
// console.log(path.resolve(__dirname, "./a.js"));
// console.log(__dirname); //当前运行文件所在的路径
// console.log(__filename); //当前运行的文件路径

// const URL = require("url");
// const url = new URL.URL("https://baidu.com?o=0");
// console.log(url);
// console.log(url.searchParams.has("o"));

//获取子目录，文件以及相应的内容
/**
 * 得到的数据格式
 * [{name:'1',ext:'.js',getChilren:fn}]
 */
const fs = require("fs");
const path = require("path");
//写一个类，该文件类就包含这些信息
const dirname = path.resolve(__dirname, "./myfiles");
class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }
  //想要通过传递一个文件或者路径名就能够得到相应的信息
  static async getFile(filename) {
    const status = await fs.promises.stat(filename);
    const name = path.basename(filename);
    const ext = path.extname(filename);
    const isFile = status.isFile();
    const size = status.size;
    const createTime = new Date(status.birthtime);
    const updateTime = new Date(status.mtime);
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }

  async getChildren() {
    if (this.isFile) {
      return [];
    } else {
      let dirs = await fs.promises.readdir(this.filename);
      dirs = dirs.map((name) => {
        const result = path.resolve(this.filename, name);
        return File.getFile(result);
      });
      return Promise.all(dirs);
    }
  }

  async getContent() {
    const result = await File.getFile(this.filename);
    if (result.isFile) {
      const content = await fs.promises.readFile(this.filename, "utf-8");
      console.log(content);
    } else {
      return "";
    }
  }
}

async function test(dirname) {
  const file = await File.getFile(dirname);
  const result = await file.getContent(dirname);
  const chidlren = await file.getChildren();
  console.log(result);
  console.log(chidlren);
}
test(dirname);
