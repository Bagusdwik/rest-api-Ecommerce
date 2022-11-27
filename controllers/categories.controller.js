const AppError = require("../utils/app.error.middleware");
const catchAsync = require("../utils/catch.promise");

exports.inserCategories = catchAsync(async (req, res, next) => {
  res.send({
    status: "success",
  });
});
