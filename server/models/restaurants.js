const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Resturant = sequelize.define("restaurants", {
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
  price_range: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  location: {
    type: DataTypes.TEXT,
  },
});

module.exports = Resturant;
