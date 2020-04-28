/***
 * nodejs的模块运行在一个函数中
 * function xyz(exports, require, module, __filename, __dirname) {
 *   return module.exports;
 * }
 * 
 */
function xyz(exports, require, module, __filename, __dirname) {
  return module.exports;
}
// console.log(arguments); //得到的结果是5个参数，如下：
// console.log(arguments[0] == exports);
// console.log(arguments[1] == require);
// console.log(arguments[2] == module);
// console.log(arguments[3] == __filename);
// console.log(arguments[4] == __dirname);

var a = 123;
var b = 1;
exports = a;
module.exports = b;
console.log(arguments);
console.log(arguments[2]);
