// const os = require("os");

// console.log(os.cpus().length);

// console.log(os.tmpdir());

// console.log(os.homedir())

// const path = require("path");

// const basename = path.basename("a/bc/d/a.html");
// console.log(basename);
// console.log(path.basename("/q/w/e/b.html", ".html"));

// console.log(path.dirname("html/node/index.js"));

// console.log(path.extname("html/ac/inde.js"));

// console.log(path.join("/foo", "bar", "baz/asdf", "quux"));
// console.log(path.join("/foo", "bar", "baz/asdf", "quux", "../"));
// console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));

// const basePath = "a/b";
// const fullpath = path.join(basePath, "../", "d.js");
// console.log(fullpath);

// const rel = path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb");
// console.log(rel);

// console.log(__dirname);

// const absPath = path.resolve(__dirname, "./a.js");
// console.log(absPath);

// const URL = require("url");

// const url =new  URL("https://nodejs.org:80/a/b/c?t=3&u=5#abc");
// console.log(url);
// console.log(url.searchParams.has("a"));
// console.log(url.searchParams.has("t"));
// console.log(url.searchParams.get("t"));

const util = require("util");

async function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

const delayCallback = util.callbackify(delay);

//传参
delayCallback(500, (err, d) => {
  console.log(d);
});
