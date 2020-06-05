const express = require("express");
const app = express();
app.get(
  "/news",
  (req, res, next) => {
    console.log("handle1");
    next(new Error("abc"));
  }
  // require("./errorMiddleware")
);

app.get("/news", (req, res, next) => {
  console.log("handle2");
  next();
});
app.use(require("./errorMiddleware"));

const port = 4400;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
