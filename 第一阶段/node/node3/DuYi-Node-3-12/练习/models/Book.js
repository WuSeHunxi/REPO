const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
  "Book",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: null,
    },
    imgurl: {
      type: DataTypes.STRING,
    },
    publicDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: null,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);

module.exports = Book;
