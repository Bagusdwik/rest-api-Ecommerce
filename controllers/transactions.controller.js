const catchAsync = require("../utils/catch.promise");
const { TransactionHistory } = require("../models/index");

exports.getAllTransactions = catchAsync(async (req, res, next) => {
  const result = await TransactionHistory.findAll();

  res.send({
    status: "success",
    statusCode: "200 OK",
    data: {
      TransactionHistory: result,
    },
  });
});
exports.createTransactions = catchAsync(async (req, res, next) => {
  req.body.UserId = req.user.id;

  const result = await TransactionHistory.create(req.body);

  res.send({
    status: "success",
    statusCode: "201 Created",
    message: "You have successfully purchase the product",
    transactionBill: result,
  });
});
