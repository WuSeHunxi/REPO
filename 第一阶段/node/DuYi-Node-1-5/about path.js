const path = require("path");

/**
 * xxx都是自己传的
 * path.basename(xxx):返回的是path的最后一部分，如果有第二个参数的话，返回的值就没有后缀名了
 * path.dirname(xxx) 方法返回 path 的目录名
 * path.extname(xxx) 方法返回 path 的扩展名
 * path.join():将所有给定的 path 片段连接在一起，然后规范化生成的路径
 * path.relative(from,to):根据当前工作目录返回 from 到 to 的相对路径
 * path.resolve():将路径或路径片段的序列解析为绝对路径。
 * 
 * 
 */

// const basename = path.basename("fdg/dfgdfg/adfaf/fdgdfgd/a.asf", ".html");
// console.log(basename);

// console.log(path.sep);

// console.log(process.env.PATH.split(path.delimiter));

// const dir = path.dirname("a/b/c/d");
// console.log(dir);

// const ext = path.extname("a/b/c/a.js");
// console.log(ext);
// const basePath = "a/b";
// const fullpath = path.join(basePath, "../", "d.js");
// console.log(fullpath);

// const rel = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// console.log(rel)

const absPath = path.resolve(__dirname, "./a.js");
console.log(absPath);
