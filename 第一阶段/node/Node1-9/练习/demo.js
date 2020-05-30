const http = require("http");
const URL = require("url");
const path = require("path");
const fs = require("fs");

async function getStat(filename) {
  try {
    return await fs.promises.stat(filename);
  } catch {
    return null;
  }
}

async function getFileContent(url) {
  const urlobj = URL.parse(url);
  let filename;
  filename = path.resolve(__dirname, "public", urlobj.pathname.substr(1));
  let stat = await getStat(filename);
  if (!stat) {
    return null;
  } else if (stat.isDirectory()) {
    filename = path.resolve(
      __dirname,
      "public",
      urlobj.pathname.substr(1),
      "index.html"
    );
  }
  stat = await getStat(filename);
  if (!stat) {
    return null;
  } else {
    return await fs.promises.readFile(filename);
  }
}

function handle(req, res) {
    const info=await getFileContent(req.url);
    if(info){
        res.write(info);
    }else{
        res.statusCode=404;
        res.write('Resourse is not exits');
    }
    res.end();
}
const server = http.createServer(handle);
server.on('listening',()=>{
    console.log('server is listening');
})
server.listen(6100);
