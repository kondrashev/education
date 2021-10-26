const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const groupRouter = require("./groupRouter");
const studentRouter = require("./studentRouter");
router.use("/user", userRouter);
router.use("/group", groupRouter);
router.use("/student", studentRouter);
module.exports = router;
