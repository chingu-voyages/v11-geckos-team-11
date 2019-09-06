const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const catchAsync = require("./../utils/catchAsync");

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user
    }
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next();
  }

  // 2) Check if user exists & password correct
  // Adding password back to output
  const user = await User.findOne({ email }).select("+password");
  const correct = await user.correctPassword(password, user.password);
  console.log(correct);

  if (!user || !correct) {
    return next();
  }

  // 3) Send token to client if everything is okay
  createSendToken(user, 200, req, res);
});

// overwrite jwt cookie & make it expire immediately
exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    // using httpOnly, because we don't want to allow client side script access to the cookie
    httpOnly: true
  });

  res.status(200).json({
    status: "success",
    message: "Logged out successfully"
  });
};
