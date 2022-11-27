const router = require("express").Router();
const cateController = require("../controllers/categories.controller");
const adminMiddleware = require("../middlewares/admin.middleware");

router
  .route("/")
  .post(cateController.insertCategories)
  .get(cateController.getProducts);

module.exports = router;
