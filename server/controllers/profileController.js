const request = require("request");
const Profile = require("./../models/profileModel");
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

// @route    GET api/v1/profile
// @desc     Get all profiles
// @access   Public
exports.getAllProfiles = catchAsync(async (req, res) => {
  const profiles = await Profile.find().populate("user", ["email"]);
  res.json(profiles);
});

// @route    POST api/v1/profile
// @desc     Create or update user profile
// @access   Private
exports.createProfile = catchAsync(async (req, res) => {
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin
  } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (company) profileFields.company = company;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (githubusername) profileFields.githubusername = githubusername;
  if (skills) {
    profileFields.skills = skills.split(",").map(skill => skill.trim());
  }

  // Build social object
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  const profile = await Profile.findOneAndUpdate(
    { user: req.user.id },
    { $set: profileFields },
    { new: true, upsert: true }
  );
  res.json(profile);
});

// @route    GET api/v1/profile/me
// @desc     Get current users profile
// @access   Private
exports.currentUserProfile = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id }).populate(
    "user",
    ["email"]
  );

  if (!profile) next(new AppError("Profile not found", 400));

  res.json(profile);
});

// @route    GET api/v1/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
exports.getProfile = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.params.user_id
  }).populate("user", ["email"]);

  if (!profile) {
    return next(new AppError("Profile not found", 400));
  }

  res.json(profile);
});

// @route    DELETE api/v1/profile
// @desc     Delete profile, user & posts
// @access   Private
exports.deleteProfile = catchAsync(async (req, res) => {
  // Remove Profile
  await Profile.findOneAndRemove({ user: req.user.id });
  // Remove User
  await User.findOneAndRemove({ _id: req.user.id });
});

// @route    PUT api/v1/profile/experience
// @desc     Add profile experience
// @access   Private
exports.addExperience = catchAsync(async (req, res) => {
  const { title, company, location, from, to, current, description } = req.body;

  const newExp = {
    title,
    company,
    location,
    from,
    to,
    current,
    description
  };

  const profile = await Profile.findOne({ user: req.user.id });
  profile.experience.unshift(newExp);

  await profile.save();

  res.json(profile);
});

// @route    DELETE api/v1/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private
exports.deleteExperience = catchAsync(async (req, res, next) => {
  const foundProfile = await Profile.findOne({ user: req.user.id });
  const expIds = foundProfile.experience.map(exp => exp._id.toString());
  const removeIndex = expIds.indexOf(req.params.exp_id);

  if (removeIndex === -1) {
    return next(new AppError("Cannot delete experience", 400));
  }
  foundProfile.experience.splice(removeIndex, 1);
  await foundProfile.save();
  return res.status(200).json(foundProfile);
});

// @route    PUT api/v1/profile/education
// @desc     Add profile education
// @access   Private
exports.addEducation = catchAsync(async (req, res) => {
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = req.body;

  const newEdu = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  };

  const profile = await Profile.findOne({ user: req.user.id });

  profile.education.unshift(newEdu);

  await profile.save();
  res.json(profile);
});

// @route    DELETE api/v1/profile/education/:edu_id
// @desc     Delete education from profile
// @access   Private
exports.deleteEducation = catchAsync(async (req, res, next) => {
  const foundProfile = await Profile.findOne({ user: req.user.id });
  const eduIds = foundProfile.education.map(edu => edu._id.toString());
  const removeIndex = eduIds.indexOf(req.params.edu_id);

  if (removeIndex === -1) {
    return next(new AppError("Cannot delete education", 400));
  }
  foundProfile.education.splice(removeIndex, 1);
  await foundProfile.save();
  return res.status(200).json(foundProfile);
});

// @route    GET api/v1/profile/github/:username
// @desc     Get user repos from Github
// @access   Public
exports.getGithub = catchAsync(async (req, res, next) => {
  const options = {
    uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
    method: "GET",
    headers: { "user-agent": "node.js" }
  };

  console.log(options);
  request(options, (error, response, body) => {
    if (error) console.error(error);

    if (response.statusCode !== 200) {
      return next(new AppError("No Github profile found", 404));
    }

    res.json(JSON.parse(body));
  });
});
