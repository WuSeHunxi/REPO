const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./a.txt");
const ws = fs.createWriteStream(filename, {
  encoding: "utf-8",
  highWaterMark:4,
});

let i = 0;
function write() {
  let flag = true;
  if (i < 10 * 1024 * 1024 && flag) {
    flag = ws.write("a");
    i++;
  }
}

write();
ws.on("drain", () => {
  write();
});
