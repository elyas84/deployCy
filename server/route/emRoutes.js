const express = require("express");
const router = express.Router();

const emController = require("../controller/emController");

router.route("/").get(emController.getEmployees);
router.route("/new").post(emController.new);
router.route("/:id").get(emController.getById).put(emController.update);

router.route("/delete/:id").delete(emController.delete);

module.exports = router;
