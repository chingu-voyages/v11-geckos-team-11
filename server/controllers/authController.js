const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../models/userModel");
const AppError = require("./../utils/appError");
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
    return next(new AppError("Please provide email and password", 400));
  }

  // 2) Check if user exists & password correct
  // Adding password back to output
  const user = await User.findOne({ email }).select("+password");
  const correct = await user.correctPassword(password, user.password);

  if (!user || !correct) {
    return next(new AppError("Incorrect email or password", 401));
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

// Give logged in users access to protected routes
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Check if JWT was sent in header or is in cookie
  // A) Check for Bearer in Reqest
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    // B) Check for Cookie with JWT
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // No token present
  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in or register.", 400)
    );
  }

  // 2) Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next("The user with that token does no longer exist", 401);
  }

  // 4) To Do: Check if user has changed password after token was issued

  // Attach current user to req object so we can use it later
  req.user = currentUser;

  // Grant access to protected route
  next();
});
