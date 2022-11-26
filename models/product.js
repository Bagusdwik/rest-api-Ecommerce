"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: {
          msg: "Title cannot be null",
          args: false,
        },
      },
      price: DataTypes.INTEGER,
      stock: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: "Stock cannot be empty",
        },
        validate: {
          isInt: {
            msg: "Stock must be an integer",
            args: true,
          },
          min: {
            args: 5,
            msg: "Stock must be higher than 5 ",
          },
        },
      },
      CategoryId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
