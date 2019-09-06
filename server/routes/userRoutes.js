const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// Get All Users Route
router
  .route("/")
  .get(authController.protect, userController.getAllUsers)
  .post(userController.createUser);

module.exports = router;
