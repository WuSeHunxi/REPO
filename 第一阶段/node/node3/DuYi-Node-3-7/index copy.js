require("./models/relation");
require("./mock/mockStudent");
require("./mock/mockClass");
// require("./spider/fetchBooks");
const adminServ = require("./services/adminService");
// adminServ.login("bcd", "abc").then((r) => {
//   console.log(r);
// });
adminServ.getAdminById(1).then((r) => {
  console.log(r);
});
