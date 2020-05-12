const os = require("os");
/***
 * os.homedir():返回当前用户的主目录的字符串路径。
 * os.hostname():以字符串的形式返回操作系统的主机名。
 * os.tmpdir():以字符串的形式返回操作系统的默认临时文件目录。
 * os.arch():返回为其编译 Node.js 二进制文件的操作系统的 CPU 架构。
 * os.freemem():以整数的形式返回空闲的系统内存量
 *
 *
 */

// console.log(os.EOL);

// console.log(os.arch())

// console.log(os.cpus().length);

// console.log(os.freemem() / 2 ** 30);

// console.log(os.homedir());

// console.log(os.hostname());

console.log(os.tmpdir());
