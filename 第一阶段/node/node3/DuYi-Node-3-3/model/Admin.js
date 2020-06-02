const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define(
  "Admin",
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  },
  {
    createAt: false,
    updateAt: false,
    paraoid: true,
  }
);
module.exports = Admin;
