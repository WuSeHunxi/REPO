const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("abc", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  // logging: null
});

module.exports = sequelize;
