require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const { User } = require("./models/models");
const path = require("path");
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/", router);
app.use(express.static(path.resolve(__dirname, "static")));
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    User.create({ login: "pavel", password: "1976", role: "ADMIN" });
    User.create({ login: "student", password: "student" });
    app.get("/", (req, res) => {
      res.sendFile("index.html");
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
