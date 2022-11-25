const catchAsync = require("../utils/catch.promise");
const { User } = require("../models/index");
const AppError = require("../utils/app.error.middleware");
const compareHash = require("../utils/validate.hash");
const jwt = require("jsonwebtoken");

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

exports.createUser = catchAsync(async (req, res) => {
  const result = await User.create(req.body);
  const { role, password, updatedAt, ...data } = result.dataValues;

  data.balance = formatter.format(data.balance);

  res.send({
    status: "success",
    data: {
      user: data,
    },
  });
});
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const result = await User.findOne({
    where: {
      email,
    },
  });

  if (!result || !compareHash(password, result.password))
    return next(
      new AppError("Email/password does not match. Please try again.", 404)
    );

  const token = jwt.sign(
    { id: result.id, email: result.email, role: result.role },
    process.env.JWT_SECRET_KEY
  );

  res.send({
    status: "success",
    token,
  });
});
