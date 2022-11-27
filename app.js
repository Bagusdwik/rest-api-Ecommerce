const express = require("express");
const app = express();
const userRoute = require("./routes/users.route");
const errorMiddleware = require("./middlewares/err.middleware");
const categoriesRoute = require("./routes/categories.routes");
const authMiddleware = require("./middlewares/auth.middleware");

require("dotenv").config();

//middleware
app.use(express.json());

app.use("/users", userRoute);
app.use("/categories", authMiddleware, categoriesRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is listening to port " + PORT);
});
