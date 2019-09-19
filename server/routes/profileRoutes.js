const express = require("express");
const authController = require("./../controllers/authController");
const profileController = require("./../controllers/profileController");

const router = express.Router();

router.get("/", profileController.getAllProfiles);
router.get("/user/:user_id", profileController.getProfile);
router.get("/github/:username", profileController.getGithub);

// Protected routes
router.use(authController.protect);
router.get("/me", profileController.currentUserProfile);
router.post("/", profileController.createProfile);
router.delete("/", profileController.deleteProfile);
router.put("/experience", profileController.addExperience);
router.delete("/experience/:exp_id", profileController.deleteExperience);
router.put("/education", profileController.addEducation);
router.delete("/education/:edu_id", profileController.deleteEducation);

module.exports = router;
