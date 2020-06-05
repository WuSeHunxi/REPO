const express = require("express");
const app = express(); //创建一个express应用

//通过use使用静态资源处理的中间件
// app.use(require("./staticMiddleware"));

app.get(
  "/news",
  (req, res, next) => {
    console.log("handler1");
    // throw new Error("abc")
    // 相当于 next(new Error("abc"))
    next(new Error("abc"));
    // next();
  },
  (req, res, next) => {
    console.log("handler2");
    next();
  }
);
app.get("/news", (req, res, next) => {
  console.log("handler3");
  next();
});

//能匹配  /news  /news/abc   /news/123   /news/ab/adfs
//不能匹配  /n   /a   /   /newsabc
//错误处理通常放在所有处理函数的最后
app.use("/news", require("./errorMiddleware"));

const port = 5008;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
