const AppError = require("../utils/app.error.middleware");
const catchAsync = require("../utils/catch.promise");
const { Category, Product } = require("../models/index");

//TODO: make only admin can access this controller(adding admin middleware)

exports.insertCategories = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  req.body.UserId = "4c3373fb-e944-4f44-ac4b-a25ae43ad4a9";

  const result = await Category.create(req.body, {
    where: {
      id,
    },
  });

  res.send({
    status: "success",
    data: {
      Category: result,
    },
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const { id } = req.user;
  const result = await Category.findAll({
    where: {
      UserId: id,
    },
    include: Product,
  });

  res.send({
    status: "success",
    data: result,
  });
});
