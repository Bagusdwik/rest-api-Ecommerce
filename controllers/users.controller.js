const catchAsync = require("../utils/catch.promise");
const { User } = require("../models/index");

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
exports.loginUser = catchAsync((req, res) => {
  res.send({
    status: "success",
  });
});
