const Router = require("express");
const router = new Router();
const studentController = require("../controllers/studentController");
router.post("/add", studentController.addStudent);
router.get("/get", studentController.getStudents);
router.post("/delete", studentController.deleteStudents);
router.post("/update", studentController.updateStudent);
module.exports = router;
