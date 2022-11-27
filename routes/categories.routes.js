const router = require("express").Router();
const cateController = require("../controllers/categories.controller");
const adminMiddleware = require("../middlewares/admin.middleware");

router.route("/").post(adminMiddleware.isAdmin, cateController.inserCategories);

module.exports = router;
