// @ts-nocheck
const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const disciplineRouter = require("./disciplineRouter");
const groupRouter = require("./groupRouter");
const studentRouter = require("./studentRouter");
const checkRole = require("../middleware/checkRoleMiddleware");
router.use("/user", userRouter);
router.use("/discipline", checkRole("ADMIN"), disciplineRouter);
router.use("/group", checkRole("ADMIN"), groupRouter);
router.use("/student", checkRole("ADMIN"), studentRouter);
router.use("/teacher", checkRole("ADMIN"));
module.exports = router;
