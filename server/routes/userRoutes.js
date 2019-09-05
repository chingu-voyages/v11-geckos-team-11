const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);

// Get All Users Route
router.route("/").get(userController.getAllUsers);

module.exports = router;
