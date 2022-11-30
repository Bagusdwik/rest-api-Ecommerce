const router = require("express").Router();
const thController = require("../controllers/transactions.controller");

router
  .route("/")
  .get(thController.getAllTransactions)
  .post(thController.createTransactions);

module.exports = router;
