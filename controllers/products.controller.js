const AppError = require("../utils/app.error.middleware");
const { Product } = require("../models/index");
const catchAsync = require("../utils/catch.promise");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const result = await Product.findAll();
  //test
  res.send({
    status: "success",
    statusCode: "200 OK",
    data: {
      Products: result,
    },
  });
});
exports.createProduct = catchAsync(async (req, res, next) => {
  const result = await Product.create(req.body);

  res.send({
    status: "success",
    statusCode: "201 Created",
    data: {
      Product: result,
    },
  });
});
