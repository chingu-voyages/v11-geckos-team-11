const express = require("express");
const authController = require("./../controllers/authController");
const profileController = require("./../controllers/profileController");

const router = express.Router();

router.use(authController.protect);

router.post("/", profileController.createProfile);

router.get("/user/:user_id", profileController.getProfile);

module.exports = router;
