// const express = require("express");
// const compression = require("compression");

// const app = express();
// //先压缩再托管
// app.use(compression());
// app.use(express.static("./dist"));

// app.listen(80, () => {
//   console.log("server running at http://127.0.0.1");
// });

const express = require('express')
 
  // 导入包compression
const compression = require('compression')
 
const app = express()
 
// 一定要把这行代码写在 静态资源托管之前
app.use(compression())
app.use(express.static('./dist'))
 
app.listen(8998,()=>{
    console.log("server running at http://127.0.0.1:8998")

})