const express = require("express");
const authController = require("./../controllers/authController");
const profileController = require("./../controllers/profileController");

const router = express.Router();

router.post("/", authController.protect, profileController.create);

module.exports = router;
