const router = require("express").Router();
const cateController = require("../controllers/categories.controller");
const adminMiddleware = require("../middlewares/admin.middleware");

router
  .route("/")
  .post(cateController.insertCategories)
  .get(cateController.getCategories);

router
  .route("/:categoryId")
  .patch(cateController.patchCategory)
  .delete(cateController.deleteCategory);

module.exports = router;
