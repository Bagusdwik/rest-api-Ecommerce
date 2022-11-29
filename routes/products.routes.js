const router = require("express").Router();
const adminMiddleware = require("../middlewares/admin.middleware");
const productController = require("../controllers/products.controller");
router
  .route("/")
  .get(productController.getAllProducts)
  .post(adminMiddleware, productController.createProduct);

module.exports = router;
