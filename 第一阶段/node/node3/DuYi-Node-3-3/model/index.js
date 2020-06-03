const mysql = require("mysql2/promise");

// async function test() {
//   const connection = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "abc",
//   });
//   const [result] = await connection.execute(`select * from student`);
//   console.log(result);
//   connection.end();
// }

// test();

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "abc",
//   multipleStatements: true,
// });

// async function test(id) {
//   const sql = `select * from student where stuno=?`;
//   const [results] = await pool.execute(sql, [id]);
//   console.log(results);
// }
// test(1);
