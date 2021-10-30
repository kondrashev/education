const Router = require("express");
const router = new Router();
const groupController = require("../controllers/groupController");
router.post("/add", groupController.addGroup);
router.get("/get", groupController.getGroups);
router.post("/delete", groupController.deleteGroups);
router.post("/update", groupController.updateGroup);
router.get("/upload", groupController.uploadInformation);
module.exports = router;
