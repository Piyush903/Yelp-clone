const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  on_sale: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Product;
