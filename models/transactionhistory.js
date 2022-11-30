"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const AppError = require("../utils/app.error.middleware");

module.exports = (sequelize, DataTypes) => {
  class TransactionHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Product);
    }
  }
  TransactionHistory.init(
    {
      ProductId: DataTypes.UUID,
      UserId: DataTypes.UUID,
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: "Quantity cannot be empty",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Quantity cannot be empty",
          },
          isInt: {
            args: true,
            msg: "Quantity should be an integer",
          },
        },
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: {
          args: false,
          msg: "Total price cannot be empty",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Total price cannot be empty",
          },
          isInt: {
            args: true,
            msg: "Total price should be an integer",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "TransactionHistory",
    }
  );
  TransactionHistory.beforeCreate(async (th, _) => {
    // console.log(await sequelize.models.Products.findAll());
    const resultUser = await sequelize.models.User.findOne({
      where: {
        id: th.UserId,
      },
    });
    const result = await sequelize.models.Product.findOne({
      where: {
        id: th.ProductId,
      },
    });
    const { stock, price } = result.dataValues;
    const { balance } = resultUser.dataValues;

    if (balance < price) throw new AppError("insufficient balance", 403);

    if (th.quantity > stock)
      throw new AppError("quantity exceeds the limit", 403);

    th.id = uuidv4();
  });

  return TransactionHistory;
};
