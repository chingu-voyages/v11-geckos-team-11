const express = require("express");
const authController = require("./../controllers/authController");
const profileController = require("./../controllers/profileController");

const router = express.Router();

router.get("/", profileController.getAllProfiles);
router.get("/user/:user_id", profileController.getProfile);

// Protected routes
router.use(authController.protect);
router.post("/", profileController.createProfile);
router.delete("/", profileController.deleteProfile);
router.put("/experience", profileController.addExperience);
router.delete("/experience/:exp_id", profileController.deleteExperience);

module.exports = router;
