const AppError = require("../utils/app.error.middleware");

exports.isAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== "customer")
    return next(new AppError("Only admin can access this route", 403));

  next();
};
