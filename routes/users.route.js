const router = require("express").Router();
const authMiddleware = require("../middlewares/auth.middleware");

const userController = require("../controllers/users.controller");

router.route("/").put(authMiddleware, userController.updateUser);

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);

module.exports = router;
