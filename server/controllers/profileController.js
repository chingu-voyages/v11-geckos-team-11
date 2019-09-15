const Profile = require("./../models/profileModel");
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.getAllProfiles = catchAsync(async (req, res) => {
  const profiles = await Profile.find().populate("user", ["email"]);
  res.json(profiles);
});

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

exports.getProfile = catchAsync(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.params.user_id
  }).populate("user", ["email"]);

  if (!profile) next(new AppError("Profile not found", 400));

  res.json(profile);
});

exports.deleteProfile = catchAsync(async (req, res) => {
  // Remove Profile
  await Profile.findOneAndRemove({ user: req.user.id });
  // Remove User
  await User.findOneAndRemove({ _id: req.user.id });
});

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
