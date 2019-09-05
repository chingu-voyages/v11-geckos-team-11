const express = require("express");
const userController = require("./../controllers/userController");

const router = express.Router();

// Get All Users Route
router.route("/").get(userController.getAllUsers);

module.exports = router;
