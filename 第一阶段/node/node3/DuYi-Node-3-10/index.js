require("./init");

const stuServ = require("./services/studentService");
stuServ
  .addStudent({
    name: "adfd",
    birthday: "2010-3-5",
    sex: true,
    mobile: "15454545444",
    ClassId: 3,
    deletedAt: "2010-1-1",
    a: 3,
    b: 4,
  })
  .catch((err) => {
    console.log(err);
  });
stuServ.getStudentById(3).then((res)=>{
  console.log(res)
})
