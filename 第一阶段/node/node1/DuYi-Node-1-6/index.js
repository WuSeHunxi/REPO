const fs = require("fs");
const path = require("path");

/**
 * 读取一个目录中的子目录和文件
 * 让每一个目录和文件都是有一个对象，有属性和方法
 * 先获取对象信息，然后分为文件和目录两种情况：getContent和getChildren
 */
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

  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return await fs.promises.readFile(this.filename);
      } else {
        return await fs.promises.readFile(this.filename, "utf-8");
      }
    }
    return null;
  }

  //返回一个新的数组
  async getChildren() {
    if (this.isFile) {
      //文件不可能有子文件
      return [];
    }
    //目录
    let children = await fs.promises.readdir(this.filename);
    //得到目录数组
    children = children.map((name) => {
      const result = path.resolve(this.filename, name);
      return File.getFile(result);
    });
    return Promise.all(children);
  }

  //该方法通过路径得到文件/目录对象
  static async getFile(filename) {
    //拿到文件的所有信息
    const stat = await fs.promises.stat(filename);
    const name = path.basename(filename);
    const ext = path.extname(filename);
    const isFile = stat.isFile();
    const size = stat.size;
    const createTime = new Date(stat.birthtime);
    const updateTime = new Date(stat.mtime);
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }
}

async function readDir(dirname) {
  const file = await File.getFile(dirname);
  return await file.getChildren();
}

async function test() {
  const dirname = path.resolve(__dirname, "./myfiles");
  const result = await readDir(dirname);
  const datas = await result[0].getChildren();
  console.log(datas);
}

test();
