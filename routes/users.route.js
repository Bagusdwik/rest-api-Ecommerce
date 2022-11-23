const router = require("express").Router();

const userController = require("../controllers/users.controller");

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);

module.exports = router;
