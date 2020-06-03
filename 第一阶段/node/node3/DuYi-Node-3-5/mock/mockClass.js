const Mock = require("mockjs");
const result = Mock.mock({
  "datas|16": [
    {
      "id|+1": 1,
      name: "前端第 @id 期",
      openDate: "@date",
    },
  ],
}).datas;

//将数据添加到数据库中
const Class = require("../models/Class");
//批量添加的放法
Class.bulkCreate(result);
