const fs = require("fs");
const path = require("path");

async function method() {
  const from = path.resolve(__dirname, "./a.txt");
  const to = path.resolve(__dirname, "./b.txt");
  const rs = await fs.promises.readFile(from);
  await fs.promises.writeFile(to, rs);
  console.log("复制完成");
}

// method()

async function method1() {
  const from = path.resolve(__dirname, "./a.txt");
  const to = path.resolve(__dirname, "./b.txt");
  const rs = fs.createReadStream(from);
  const ws = fs.createWriteStream(to);
  rs.on("data", (chunk) => {
    const flag = ws.write(chunk);
    if (!flag) {
      rs.pause();
    }
  });

  ws.on("drain", () => {
    rs.resume();
  });

  rs.on("resume", () => {
    console.log("继续写入");
  });

  rs.on("close", () => {
    ws.end();
    console.log("复制完成");
  });
}
method1()