const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./temp/abc.txt");

const ws = fs.createWriteStream(filename, {
  encoding: "utf-8",
  //highWaterMark 指定了字节的总数
  highWaterMark: 16 * 1024,
});

/**
 * 当调用 writable.write(chunk) 时，数据会被缓冲在可写流中。 当内部的可写缓冲的总大小小于
 *  highWaterMark 设置的阈值时，调用 writable.write() 会返回 true。 一旦内部缓冲的大小达
 * 到或超过 highWaterMark 时，则会返回 false。
 */

let i = 0;
//一直写，直到到达上限，或无法再直接写入
function write() {
  let flag = true;
  while (i < 1024 * 1024 * 10 && flag) {
    flag = ws.write("a"); //写入a，得到下一次还能不能直接写
    i++;
  }
}

write();

ws.on("drain", () => {
  write();
});
